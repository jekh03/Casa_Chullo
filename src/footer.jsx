import React from "react";

function Footer(){
    return (
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-info">
              <p className="footer-title">&copy; 2024 Asociación Tukuy Yanapaq</p>
              <p>Todos los derechos reservados.</p>
            </div>
    
            <div className="footer-contact">
              <p><strong>Contacto:</strong> tukuyyanapaq@gmail.com</p>
              <p><strong>Tel:</strong> +51 926 407 674 | +51 928 128 752</p>
            </div>
    
            <div className="footer-location">
              <p><strong>Ubicación:</strong> Calle Kantuccata s/n, Chinchero, Cusco, Perú</p>
            </div>
          </div>
        </footer>
      );
}

export default Footer;