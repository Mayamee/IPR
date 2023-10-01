import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./index.css";

const mountNode = document.getElementById("root")!;
const app = <App />;

createRoot(mountNode).render(app);
