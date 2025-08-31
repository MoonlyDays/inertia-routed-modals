import { useEffect, useRef } from "react";
import { useRoutedModalsProvider } from "./routed-modals-context";
export function ClientModal({ open, onClose, children }) {
    const ctx = useRoutedModalsProvider();
    const instance = useRef(undefined);
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
