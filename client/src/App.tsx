import React from "react";
import ReactDOM from 'react-dom/client'
import AppRouter from "./router";
import './App.css'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRouter></AppRouter>
  </React.StrictMode>
)
