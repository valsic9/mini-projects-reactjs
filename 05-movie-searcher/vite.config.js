import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Añadiendo host:true para poder acceder desde cualquier dispositivo de tu red, como por ejemplo para probar el responsive desde tu teléfono o tu tablet conectado a la misma Wifi/red. By @Eleazar
    watch: {
      usePolling: true, // Recomendado para WSL, permite detectar cambios en archivos
    },
  },
});
