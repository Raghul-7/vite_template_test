/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_AANSWER_WIDGET_KEY?: string
  readonly VITE_AANSWER_HOST?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
