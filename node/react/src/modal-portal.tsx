import { PropsWithChildren, ReactNode } from "react";
import { useRoutedModalsProvider } from "./routed-modals-context";
import { ModalContext } from "./modal-context";
import { ServerModal } from "./server-modal";

export function ModalPortal({
    layout: Layout,
}: {
    layout?: (props: PropsWithChildren) => ReactNode;
}) {
    const ctx = useRoutedModalsProvider();

    return (
        <>
            <ServerModal />
            {ctx.modals.map((modal) => {
                let node = modal.instance.node;
                if (Layout) {
                    node = <Layout>{node}</Layout>;
                }

                return (
                    <ModalContext.Provider
                        key={modal.instance.nonce}
                        value={{
                            open: modal.open,
                            close: modal.onClose,
                            local: modal.instance.local,
                            nonce: modal.instance.nonce,
                            component: modal.instance.component,
                            node: modal.instance.node,
                            props: modal.instance.props,
                        }}
                    >
                        {node}
                    </ModalContext.Provider>
                );
            })}
        </>
    );
}
