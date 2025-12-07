import { createRoot } from "react-dom/client";
import App from "./App";
import "geist/style/sans.css";
import "geist/style/mono.css";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
