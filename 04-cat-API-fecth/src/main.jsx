import { createRoot } from "react-dom/client";
import { App } from "./App";
import "../css/index.css";

const root = createRoot(document.getElementById("app"));

root.render(<App />);
