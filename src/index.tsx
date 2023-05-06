import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { StrictMode } from "react";
import ClientContext from "./ClientContext";
import Client from "./Client";

// const client = new Client("ws://localhost:4000/ws");
const client = new Client("wss://jsbufferviewerdemo-backend.onrender.com/ws");

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <StrictMode>
    <ClientContext.Provider value={client}>
      <App />
    </ClientContext.Provider>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
