import { PropsWithChildren, useEffect, useRef } from "react";
import { useRoutedModalsProvider } from "./routed-modals-context";
import { ModalAction, ModalInstance } from "./types";

type ClientModalProps = PropsWithChildren<{
    open: boolean;
    onClose: ModalAction;
}>;

export function ClientModal({ open, onClose, children }: ClientModalProps) {
    const ctx = useRoutedModalsProvider();
    const instance = useRef<ModalInstance>(undefined);

    const handleOpen = () => {
        instance.current = {
            component: "ClientModal",
            nonce: "LOCAL-" + crypto.randomUUID(),
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

    useEffect(() => {
        return handleClose();
    }, []);

    return null;
}
