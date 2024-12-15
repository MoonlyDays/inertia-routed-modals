import {PropsWithChildren, useContext, useEffect, useRef} from 'react';
import {RoutedModalsContext} from './RoutedModalsContext';
import {ModalAction, ModalInstance} from '../types';

type ClientModalProps = PropsWithChildren<{
    open: boolean;
    onClose: ModalAction;
}>;

export function ClientModal({open, onClose, children}: ClientModalProps) {
    const ctx = useContext(RoutedModalsContext);
    const instance = useRef<ModalInstance>();

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
        } else {
            handleClose();
        }
    }, [open]);

    return null;
}
