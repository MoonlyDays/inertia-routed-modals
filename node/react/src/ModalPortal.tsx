import {PropsWithChildren, ReactNode, useContext} from 'react';
import {RoutedModalsContext} from './RoutedModalsContext';
import {ModalContext} from './ModalContext';
import {ServerModal} from './ServerModal';

export function ModalPortal({layout: Layout}: {
    layout?: (props: PropsWithChildren) => ReactNode
}) {
    const ctx = useContext(RoutedModalsContext);

    return (
        <>
            <ServerModal/>
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
