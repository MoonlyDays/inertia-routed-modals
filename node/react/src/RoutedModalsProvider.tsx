import {RoutedModalsContext} from './RoutedModalsContext';
import {PropsWithChildren, useEffect, useMemo, useRef, useState} from 'react';
import {
    ComponentResolver,
    ModalAction,
    ModalComponent,
    ModalInstance,
    ModalResolver,
    ModalState,
} from '../types';
import {router} from '@inertiajs/react';

type RoutedModalsProviderProps = PropsWithChildren<{
    resolve: ComponentResolver;
}>;

export function RoutedModalsProvider({resolve, children}: RoutedModalsProviderProps) {
    const [modals, setModals] = useState<ModalState[]>([]);
    const backendModal = useRef<ModalState>();

    const resolveComponent: ModalResolver = useMemo(
        () => async (component: string) => {
            const module = (await resolve(component)) as {
                default: ModalComponent;
            };
            return module.default;
        },
        [resolve],
    );

    const closeModal = (modal: ModalInstance) => {
        if (!modal.local) {
            backendModal.current = undefined;
        }

        setModals((modals) =>
            modals.map((other) =>
                other.instance.nonce == modal.nonce
                    ? {
                        ...other,
                        open: false,
                    }
                    : other,
            ),
        );
    };

    const openModal = (modal: ModalInstance, onClose?: ModalAction) => {
        onClose ??= () => closeModal(modal);
        const state: ModalState = {
            instance: modal,
            open: true,
            onClose,
        };

        if (!modal.local) {
            backendModal.current = state;
        }

        setModals((modals) => [...modals, state]);
    };

    const closeAll = () => {
        setModals((modals) =>
            modals.map((modal) => ({...modal, open: false})),
        );
    };

    useEffect(() => {
        router.on('before', (event) => {
            const modal = backendModal.current?.instance;
            if (!modal) {
                return;
            }

            event.detail.visit.headers = {
                'X-Inertia-Modal-Nonce': modal.nonce,
                ...event.detail.visit.headers,
            };
        });
    }, []);

    return (
        <RoutedModalsContext.Provider
            value={{
                resolveComponent,
                modals,
                openModal,
                closeModal,
                closeAll,
            }}
        >
            {children}
        </RoutedModalsContext.Provider>
    );
}
