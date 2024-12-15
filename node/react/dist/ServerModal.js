import { jsx as _jsx } from "react/jsx-runtime";
import { useContext, useEffect } from 'react';
import { usePage } from '@inertiajs/react';
import { RoutedModalsContext } from './RoutedModalsContext';
export function ServerModal() {
    const ctx = useContext(RoutedModalsContext);
    const { modal } = usePage().props;
    const closeModal = () => {
        ctx.closeAll();
    };
    const openModal = (modal) => {
        ctx.resolveComponent(modal.component).then((Node) => {
            ctx.openModal({
                nonce: modal.nonce,
                component: modal.component,
                node: _jsx(Node, { ...modal.props }),
                props: modal.props,
                local: false,
            });
        });
    };
    useEffect(() => {
        if (modal) {
            openModal(modal);
        }
        else {
            closeModal();
        }
    }, [modal?.nonce]);
    return null;
}
