import { PropsWithChildren } from 'react';
import { ModalAction } from '../types';
type ClientModalProps = PropsWithChildren<{
    open: boolean;
    onClose: ModalAction;
}>;
export declare function ClientModal({ open, onClose, children }: ClientModalProps): null;
export {};
