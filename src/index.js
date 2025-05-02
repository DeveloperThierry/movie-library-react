import React from "react";
import ReactDOM from "react-dom/client"; // Note: 'react-dom/client' for createRoot

import App from "./App.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
