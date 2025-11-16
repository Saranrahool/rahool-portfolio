/// <reference types="vite/client" />

declare module "*.md" {
  const content: string;
  export default content;
}

declare module "*?raw" {
  const content: string;
  export default content;
}

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  // add more env variables as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
  glob<T = unknown>(
    pattern: string,
    options?: {
      eager?: boolean;
      import?: string;
      query?: string;
    }
  ): Record<string, T>;
}