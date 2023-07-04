/// <reference types="vite/client" />
declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $filters: Record<string, unknown>;
    }
}

export {}  // Important! See note
