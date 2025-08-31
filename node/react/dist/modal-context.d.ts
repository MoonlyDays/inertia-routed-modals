import { type ReactNode } from "react";
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
export declare const ModalContext: import("react").Context<ModalContextProps | undefined>;
export declare function useModal(): ModalContextProps;
export {};
