import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: false, // on utilise notre manifest.json dans public/
      includeAssets: ["icons/icon-192.png", "icons/icon-512.png"],
      workbox: {
        globPatterns: ["**/*.{js,css,html,png,svg,jpg}"],
        // Important : le site a plusieurs routes (react-router-dom).
        // Sans ce réglage, ouvrir directement /quiz ou /parcours/lea
        // hors ligne (ou après un rafraîchissement) afficherait une
        // erreur au lieu de la bonne page.
        navigateFallback: "/index.html"
      }
    })
  ]
});
