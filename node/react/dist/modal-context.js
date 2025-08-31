import { createContext, useContext } from "react";
export const ModalContext = createContext(undefined);
export function useModal() {
    const ctx = useContext(ModalContext);
    if (!ctx) {
        throw Error("Your modal is setup incorrectly!");
    }
    return ctx;
}
