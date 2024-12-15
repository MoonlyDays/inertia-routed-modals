import { createContext } from 'react';
const DEFAULT_CTX_FUNCTION = () => {
    throw Error('Your modal is setup incorrectly!');
};
export const ModalContext = createContext({
    open: false,
    local: false,
    close: DEFAULT_CTX_FUNCTION,
    component: '',
    node: undefined,
    nonce: '',
    props: {},
});
