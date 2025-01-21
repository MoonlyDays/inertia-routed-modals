import { type ReactNode } from 'react';
import { ModalAction } from './Types';
type ModalContextProps = {
    open: boolean;
    local: boolean;
    close: ModalAction;
    component: string;
    node: ReactNode;
    nonce: string;
    props: Record<string, unknown>;
};
export declare const ModalContext: import("react").Context<ModalContextProps>;
export {};
