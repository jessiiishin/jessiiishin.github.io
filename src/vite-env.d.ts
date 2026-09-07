/// <reference types="vite/client" />

// vite/client only declares lowercase image extensions, but some screenshots
// come off macOS with an uppercase extension.
declare module '*.PNG' {
  const src: string;
  export default src;
}
