import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ReactQueryProvider from "./react-query-client";
import "./index.scss";

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <ReactQueryProvider>
        <App />
      </ReactQueryProvider>
    </React.StrictMode>,
  );
} else {
  console.error("Root element not found");
}
