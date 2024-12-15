import {createContext, type ReactNode} from 'react';
import {ModalAction} from '../types';

type ModalContextProps = {
    open: boolean;
    local: boolean;
    close: ModalAction;
    component: string;
    node: ReactNode;
    nonce: string;
    props: Record<string, unknown>;
};

const DEFAULT_CTX_FUNCTION = () => {
    throw Error('Your modal is setup incorrectly!');
};

export const ModalContext = createContext<ModalContextProps>({
    open: false,
    local: false,
    close: DEFAULT_CTX_FUNCTION,
    component: '',
    node: undefined,
    nonce: '',
    props: {},
});
