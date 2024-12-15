import {useContext, useEffect} from 'react';
import {usePage} from '@inertiajs/react';
import {ModalProps} from '../types';
import {RoutedModalsContext} from './RoutedModalsContext';

export function ServerModal() {
    const ctx = useContext(RoutedModalsContext);
    const {modal} = usePage<{ modal?: ModalProps }>().props;

    const closeModal = () => {
        ctx.closeAll();
    };

    const openModal = (modal: ModalProps) => {
        ctx.resolveComponent(modal.component).then((Node) => {
            ctx.openModal({
                nonce: modal.nonce,
                component: modal.component,
                node: <Node {...modal.props} />,
                props: modal.props,
                local: false,
            });
        });
    };

    useEffect(() => {
        if (modal) {
            openModal(modal);
        } else {
            closeModal();
        }
    }, [modal?.nonce]);

    return null;
}
