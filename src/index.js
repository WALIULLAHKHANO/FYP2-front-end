import React from "react";
//import ReactDOM from "react-dom";
//import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client'; // Import from react-dom/client
import "../src/index.css";
import App from "./App";
//import drawer from './material-uicomonents/drawer'
import reportWebVitals from "./reportWebVitals";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./index.css";
// import  Drawer  from "@mui/material";
import DrawerLeft from "./material-uicomonents/DrawerLeft";

const container = document.getElementById('root');
const root = createRoot(container); // Create root with container

root.render(
  <React.StrictMode>
    <App />
    <DrawerLeft />
  </React.StrictMode>
);
reportWebVitals();
