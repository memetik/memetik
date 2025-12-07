import { createRoot } from "react-dom/client";
import App from "./App";
import "@fontsource/geist-sans";
import "@fontsource/geist-sans/500.css";
import "@fontsource/geist-sans/600.css";
import "@fontsource/geist-sans/700.css";
import "@fontsource/geist-mono";
import "@fontsource/geist-mono/700.css";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
