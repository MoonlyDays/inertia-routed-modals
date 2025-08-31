import { PropsWithChildren } from "react";
import { ComponentResolver } from "./types";
type RoutedModalsProviderProps = PropsWithChildren<{
    resolve: ComponentResolver;
}>;
export declare function RoutedModalsProvider({ resolve, children, }: RoutedModalsProviderProps): import("react/jsx-runtime").JSX.Element;
export {};
