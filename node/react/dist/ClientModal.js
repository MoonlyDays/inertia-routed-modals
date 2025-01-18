import { useContext, useEffect, useRef } from 'react';
import { RoutedModalsContext } from './RoutedModalsContext';
export function ClientModal({ open, onClose, children }) {
    const ctx = useContext(RoutedModalsContext);
    const instance = useRef();
    const handleOpen = () => {
        instance.current = {
            component: 'ClientModal',
            nonce: 'LOCAL-' + crypto.randomUUID(),
            props: {},
            node: children,
            local: true,
        };
        ctx.openModal(instance.current, onClose);
    };
    const handleClose = () => {
        if (!instance.current) {
            return;
        }
        ctx.closeModal(instance.current);
        instance.current = undefined;
    };
    useEffect(() => {
        if (open) {
            handleOpen();
        }
        else {
            handleClose();
        }
    }, [open]);
    useEffect(() => {
        return handleClose();
    }, []);
    return null;
}
