import L from "leaflet";

declare global {
  interface Window {
    L: typeof L;
  }
}
