import { ReactNode } from 'react';

export type ModalComponent = (props: unknown) => ReactNode;
export type ComponentResolver = (component: string) => Promise<unknown>;
export type ModalResolver = (component: string) => Promise<ModalComponent>;
export type ModalAction = () => void;

export interface ModalState {
    instance: ModalInstance;
    open: boolean;
    onClose: ModalAction;
}

export interface ModalInstance {
    component: string;
    props: Record<string, unknown>;
    nonce: string;
    node: ReactNode;
    local: boolean;
}

export type ModalProps = {
    component: string;
    nonce: string;
    props: Record<string, unknown>;
};
