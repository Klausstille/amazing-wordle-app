import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    // base: "/amazing-wordle-app/",
    // server: {
    //     proxy: {
    //         "/api": {
    //             target: "https://api.pons.com",
    //             changeOrigin: true,
    //             rewrite: (path) => path.replace(/^\/api/, ""),
    //         },
    //     },
    // },
});
