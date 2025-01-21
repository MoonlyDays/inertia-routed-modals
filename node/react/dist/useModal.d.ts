export declare function useModal(): {
    open: boolean;
    local: boolean;
    close: import("./Types").ModalAction;
    component: string;
    node: import("react").ReactNode;
    nonce: string;
    props: Record<string, unknown>;
};
