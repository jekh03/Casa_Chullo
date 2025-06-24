import React from 'react';
import { useTranslation } from "react-i18next";
import { FaWhatsapp, FaCalendarAlt } from 'react-icons/fa';
import './form.css';

function Formulario() {
  const { t } = useTranslation();
  
  return (
    <div className="reserva-container">
      <div className="reserva-content">
        <h2 className="reserva-title">{t("RESERVA_AHORA")}</h2>
        <p className="reserva-subtitle">{t("DESCRIPCION_RESERVA")}</p>
        
        <div className="whatsapp-container">
          <div className="gold-decoration"></div>
          
          <a
            href="https://wa.me/+51926407674?text=Hola%20me%20gustaría%20reservar%20un%20servicio%20en%20el%20centro%20textil"
            className="whatsapp-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="whatsapp-icon" />
            <span>{t("RESERVATION")}</span>
            <FaCalendarAlt className="calendar-icon" />
          </a>
          
          <div className="gold-decoration reverse"></div>
        </div>
      </div>
    </div>
  );
}

export default Formulario;