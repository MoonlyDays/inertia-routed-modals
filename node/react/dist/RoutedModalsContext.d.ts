import { ModalAction, ModalInstance, ModalResolver, ModalState } from './Types';
type RoutedModalsContextProps = {
    resolveComponent: ModalResolver;
    modals: ModalState[];
    openModal: (modal: ModalInstance, onClose?: ModalAction) => void;
    closeModal: (modal: ModalInstance) => void;
    closeAll: () => void;
};
export declare const RoutedModalsContext: import("react").Context<RoutedModalsContextProps>;
export {};
