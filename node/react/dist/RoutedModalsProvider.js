import { jsx as _jsx } from "react/jsx-runtime";
import { RoutedModalsContext } from './RoutedModalsContext';
import { useEffect, useMemo, useRef, useState } from 'react';
import { router } from '@inertiajs/react';
export function RoutedModalsProvider({ resolve, children }) {
    const [modals, setModals] = useState([]);
    const backendModal = useRef();
    const resolveComponent = useMemo(() => async (component) => {
        const module = (await resolve(component));
        return module.default;
    }, [resolve]);
    const closeModal = (modal) => {
        if (!modal.local) {
            backendModal.current = undefined;
        }
        setModals((modals) => modals.map((other) => other.instance.nonce == modal.nonce
            ? {
                ...other,
                open: false,
            }
            : other));
    };
    const openModal = (modal, onClose) => {
        onClose ??= () => closeModal(modal);
        const state = {
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
        setModals((modals) => modals.map((modal) => ({ ...modal, open: false })));
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
    return (_jsx(RoutedModalsContext.Provider, { value: {
            resolveComponent,
            modals,
            openModal,
            closeModal,
            closeAll,
        }, children: children }));
}
