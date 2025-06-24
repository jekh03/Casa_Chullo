import React from "react";
import logo_bienvenida from './imagenes/logo2.webp'
import "./style_pantalla_inicio.css";

const SplashScreen = ({ fade }) => {
  return (
    <div className={`splash-container ${fade ? "fade-out" : ""}`}>
      <div className="splash-content">
        <img src={logo_bienvenida} alt="Logo" className="logo" />
        <h1 className="brand-name">TUKUY YANAPAQ</h1>
      </div>
    </div>
  );
};

export default SplashScreen;
