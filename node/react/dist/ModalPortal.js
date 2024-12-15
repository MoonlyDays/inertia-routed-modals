import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext } from 'react';
import { RoutedModalsContext } from './RoutedModalsContext';
import { ModalContext } from './ModalContext';
import { ServerModal } from './ServerModal';
export function ModalPortal({ layout: Layout }) {
    const ctx = useContext(RoutedModalsContext);
    return (_jsxs(_Fragment, { children: [_jsx(ServerModal, {}), ctx.modals.map((modal) => {
                let node = modal.instance.node;
                if (Layout) {
                    node = _jsx(Layout, { children: node });
                }
                return (_jsx(ModalContext.Provider, { value: {
                        open: modal.open,
                        close: modal.onClose,
                        local: modal.instance.local,
                        nonce: modal.instance.nonce,
                        component: modal.instance.component,
                        node: modal.instance.node,
                        props: modal.instance.props,
                    }, children: node }, modal.instance.nonce));
            })] }));
}
