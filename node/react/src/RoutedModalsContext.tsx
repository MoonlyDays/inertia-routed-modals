import {createContext} from 'react';
import {
    ModalAction,
    ModalInstance,
    ModalResolver,
    ModalState,
} from './Types';

type RoutedModalsContextProps = {
    resolveComponent: ModalResolver;
    modals: ModalState[];

    openModal: (modal: ModalInstance, onClose?: ModalAction) => void;
    closeModal: (modal: ModalInstance) => void;
    closeAll: () => void;
};

const DEFAULT_CTX_FUNCTION = () => {
    throw Error('Your application is not wrapped with RoutedModalsProvider');
};

export const RoutedModalsContext = createContext<RoutedModalsContextProps>({
    resolveComponent: DEFAULT_CTX_FUNCTION,
    modals: [],

    openModal: DEFAULT_CTX_FUNCTION,
    closeModal: DEFAULT_CTX_FUNCTION,
    closeAll: DEFAULT_CTX_FUNCTION,
});
