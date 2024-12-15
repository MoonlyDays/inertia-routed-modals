import { createContext } from 'react';
const DEFAULT_CTX_FUNCTION = () => {
    throw Error('Your application is not wrapped with RoutedModalsProvider');
};
export const RoutedModalsContext = createContext({
    resolveComponent: DEFAULT_CTX_FUNCTION,
    modals: [],
    openModal: DEFAULT_CTX_FUNCTION,
    closeModal: DEFAULT_CTX_FUNCTION,
    closeAll: DEFAULT_CTX_FUNCTION,
});
