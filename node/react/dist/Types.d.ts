import { ReactNode } from "react";
export type ModalComponent = (props: unknown) => ReactNode;
export type ComponentResolver = (component: string) => Promise<unknown>;
export type ModalResolver = (component: string) => Promise<ModalComponent>;
export type ModalAction = () => void;
export type ModalState = {
    instance: ModalInstance;
    open: boolean;
    onClose: ModalAction;
};
export type ModalInstance = {
    component: string;
    props: Record<string, unknown>;
    nonce: string;
    node: ReactNode;
    local: boolean;
};
export type PartialModalProps = {
    nonce: string;
};
export type FullModalProps = PartialModalProps & {
    component: string;
    props: Record<string, unknown>;
};
export type ModalProps = PartialModalProps | FullModalProps;
