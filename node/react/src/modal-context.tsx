import { createContext, type ReactNode, useContext } from "react";
import { ModalAction } from "./types";

type ModalContextProps = {
    open: boolean;
    local: boolean;
    close: ModalAction;
    component: string;
    node: ReactNode;
    nonce: string;
    props: Record<string, unknown>;
};

export const ModalContext = createContext<ModalContextProps | undefined>(
    undefined,
);

export function useModal() {
    const ctx = useContext(ModalContext);
    if (!ctx) {
        throw Error("Your modal is setup incorrectly!");
    }

    return ctx;
}
