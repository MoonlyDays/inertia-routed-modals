import { createContext, useContext } from "react";
export const RoutedModalsContext = createContext(undefined);
export function useRoutedModalsProvider() {
    const ctx = useContext(RoutedModalsContext);
    if (!ctx) {
        throw Error("Your application is not wrapped with RoutedModalsProvider");
    }
    return ctx;
}
