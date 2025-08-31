import { createContext, useContext } from "react";
import { ModalAction, ModalInstance, ModalResolver, ModalState } from "./types";

type RoutedModalsContextProps = {
    resolveComponent: ModalResolver;
    modals: ModalState[];

    openModal: (modal: ModalInstance, onClose?: ModalAction) => void;
    closeModal: (modal: ModalInstance) => void;
    closeAll: () => void;
};

export const RoutedModalsContext = createContext<
    RoutedModalsContextProps | undefined
>(undefined);

export function useRoutedModalsProvider() {
    const ctx = useContext(RoutedModalsContext);
    if (!ctx) {
        throw Error(
            "Your application is not wrapped with RoutedModalsProvider",
        );
    }

    return ctx;
}
