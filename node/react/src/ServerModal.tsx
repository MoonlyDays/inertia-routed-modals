import {useContext, useEffect, useRef} from 'react';
import {usePage} from '@inertiajs/react';
import {FullModalProps, ModalInstance, ModalProps} from '../types';
import {RoutedModalsContext} from './RoutedModalsContext';

export function ServerModal() {
    const ctx = useContext(RoutedModalsContext);
    const {modal} = usePage<{ modal?: ModalProps }>().props;
    const instance = useRef<ModalInstance>();

    const closeModal = () => {
        ctx.closeAll();
    };

    const openModal = (modal: FullModalProps) => {
        ctx.resolveComponent(modal.component).then((Node) => {
            ctx.openModal(instance.current = {
                nonce: modal.nonce,
                component: modal.component,
                node: <Node {...modal.props} />,
                props: modal.props,
                local: false,
            });
        });
    };

    useEffect(() => {
        // Nonce is empty, we have been requested to close the modal.
        const nonce = modal?.nonce;
        if (!nonce) {
            closeModal();
            return;
        }

        const current = instance.current;
        if (current) {
            // We have a current modal, and if our current nonce matches the requested one - backend
            // has requested to persist this modal. Do not do anything.
            if (current.nonce == nonce) {
                return;
            }

            // If we're here we have a nonce mismatch. Close the current modal
            // and let the code below open the new modal.
            closeModal();
        }

        // We have been given a persist prop, we can't open a modal just from this.
        if (!("component" in modal)) {
            throw Error('Backend responded to keep the modal, but there is no modal to keep.');
        }

        openModal(modal);
    }, [modal?.nonce]);

    return null;
}
