import "./styles.css";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import llamadaPortada from './imagenes/llama_portada.png'
import condor from './imagenes/condor.png'
import puma from './imagenes/puma.png'
import tejido from './imagenes/artesania.jpg'
import comida from './imagenes/comida.jpg'
import traiking from './imagenes/traiking.jpg'
import hospedaje from './imagenes/hospedaje.jpg'
import picnic from './imagenes/picnic.jpg'
import RotatingSquares from './animaciones.jsx';
import AnimatedBox from "./animacionesgaleria.jsx";
import Footer from './footer.jsx';
import Formulario from './form.jsx';
import {useState} from "react";
import { useTranslation } from "react-i18next";
import LanguageToggle from './leguajes.jsx';

function Header(){
  const {t} = useTranslation();
  const [stadoMenu, obtenerMenu] = useState(false);
  const menu =()=>{
    obtenerMenu(!stadoMenu);
  }
  return(
    <section className="navegacion">
      <h1>CASA DE CHULLO</h1>
      <section className="navegable">
        <div className="navegable_inicio">
        <Link 
          to="/" 
          className="navegacion-link"
        >
          <h3>{t("HOME")}</h3>
        </Link>
        <a 
          href="/#Servicios" 
          className="navegacion-link"
        >
          <h3>{t("SERVICE")}</h3>
        </a>
        <a 
          href="/#Ubicacion" 
          className="navegacion-link"
        >
          <h3>{t("LOCATION")}</h3>
        </a>
        </div>
      </section>
      <div className="Reserva">
        <Link 
          to="/reservas" 
          className="navegacion-link"
        >
          <h3>{t("RESERVATION")}</h3>
        </Link>  
      </div>
      <div className="menuObciones" onClick={menu}>☰ Menú</div>
      <div 
        className="menu_"
        style={{display:stadoMenu?'block':'none'}}
      >
        <ul>
          <li><Link to="/">{t("HOME")}</Link></li>
          <li><a href="/#Servicios">{t("SERVICE")}</a></li>
          <li><a href="/#Ubicacion">{t("LOCATION")}</a></li>
          <li><Link to="/reservas">{t("RESERVATION")}</Link></li>
          <li><LanguageToggle></LanguageToggle></li>
        </ul>
      </div>
      <div className="lenguas">
        <LanguageToggle></LanguageToggle>
      </div>
    </section>
  )
}

function Inicio(){
  const {t} = useTranslation();
  const [isHovered, setIsHovered]=useState(false);
  const [isHovered2, setIsHovered2]=useState(false);
  const [isHovered3, setIsHovered3]=useState(false);
  const [isHovered4, setIsHovered4]=useState(false);
  const [isHovered5, setIsHovered5]=useState(false);

  const[isOpen, setIsOpen] = useState({
    1:false,
    2:false,
    3:false,
    4:false,
    5:false,
  });
  
  const abrirContenido = (index) =>{
    setIsOpen((estadoPrevio) =>({
      ...estadoPrevio,
      [index]: !estadoPrevio[index],
    }));
  }

  return (
    <>
    <div className="background">
      <RotatingSquares />
      <section id="Inicio" className="Inicio">
        
        <section className="info">
          <p>{t("Inicio.TextInicio")} <strong>{t("Inicio.TextInicioFuerte")}</strong></p>
          <div className="contenedor_imagen">
            <img src={llamadaPortada}/>
          </div>
        </section>
      </section>
    </div>

    <section className="Galeria">
      <AnimatedBox />
    </section>
    
    <section className="Nosotros">
      <h1>{t("Somos.Titulo")}</h1>
      <div className="contenedor_info">
        <img src={condor} alt="condor" className="img_condor"/>
        <div className="Quienes_somos">
          <p>
            {t("Somos.en")} <strong>Casa de Chullo</strong>, {t("Somos.descripcion1")}
          </p>
          <p>
            <strong>{t("Somos.nuestro_equipo")}</strong> {t("Somos.descripcion2")}
          </p>
          <p>
            {t("Somos.en")} <strong>Casa de Chullo</strong>, {t("Somos.descripcion3")} 
          </p>
        </div>
        <img src={puma} alt="puma" className="img_puma"/>
      </div>
    </section>

    <section id="Servicios" className="Servicios">
      <h1>{t("Ofrecemos.Titulo")}</h1>
      <div className="caja_servicios">
        <div className="Teñido servicios_ofrecidos"
          onMouseEnter={()=>setIsHovered(true)}
          onMouseLeave={()=>setIsHovered(false)}
          onClick={()=> abrirContenido(1)}
        >
          <img src={tejido} alt="img1"
            style={{transform: isHovered? 'scale(1.3)':'scale(1)',
              transition: 'transform 0.1s ease',
            }}
          />
          
          <div className="contenido" >
            <h2>{t("Ofrecemos.Taller_textil")}</h2>
          </div>
        </div>
        
        <div className="Cocina servicios_ofrecidos"
          onMouseEnter={()=>setIsHovered2(true)}
          onMouseLeave={()=>setIsHovered2(false)}
          onClick={()=>abrirContenido(2)}
        >
          <img src={comida} alt="img1"
            style={{transform: isHovered2? 'scale(1.3)':'scale(1)',
              transition: 'transform 0.1s ease',
            }}
          />

          <div className="contenido" >
            <h2>{t("Ofrecemos.Taller_cocina")}</h2>
          </div>
        </div>
        
        <div className="Caminata servicios_ofrecidos"
          onMouseEnter={()=>setIsHovered3(true)}
          onMouseLeave={()=>setIsHovered3(false)}
          onClick={()=> abrirContenido(3)}
        >
          <img src={traiking} alt="img1"
            style={{transform: isHovered3? 'scale(1.3)':'scale(1)',
              transition: 'transform 0.1s ease',
            }}
          />

          <div className="contenido" >
            <h2>LLAMA TRACKING</h2>
          </div>
        </div>
        
        <div className="Hospedaje servicios_ofrecidos"
          onMouseEnter={()=>setIsHovered4(true)}
          onMouseLeave={()=>setIsHovered4(false)}
          onClick={()=> abrirContenido(4)}
        >
          <img src={hospedaje} alt="img1"
            style={{transform: isHovered4? 'scale(1.3)':'scale(1)',
              transition: 'transform 0.1s ease',
            }}
          />
          
          <div className="contenido" >
            <h2>{t("Ofrecemos.Hospedaje")}</h2>
          </div>
        </div>

        <div className="Picnic servicios_ofrecidos"
          onMouseEnter={()=>setIsHovered5(true)}
          onMouseLeave={()=>setIsHovered5(false)}
          onClick={()=> abrirContenido(5)}
        >
          <img src={picnic} alt="img1"
            style={{transform: isHovered5? 'scale(1.3)':'scale(1)',
              transition: 'transform 0.1s ease',
            }}
          />

          <div className="contenido" >
            <h2>{t("Ofrecemos.Pago")}</h2>
          </div>
        </div>
      </div>
      <div className="informacion_Servicios">
        {isOpen[1] &&(
          <div className="mostrarDiv">
            <p>{t("Ofrecemos.tex_descripcion")}</p>
            <div>
              <button onClick={()=>abrirContenido(1)}>{t("Cerrar")}</button>
              <button onClick={()=> window.location.href='/reservas'}>{t("RESERVATION")}</button>
            </div>
          </div>
        )}

        {isOpen[2] &&(
          <div className="mostrarDiv">
            <p>{t("Ofrecemos.coci_descripcion")}</p>
            <div>
              <button onClick={()=>abrirContenido(2)}>{t("Cerrar")}</button>
              <button onClick={()=> window.location.href='/reservas'}>{t("RESERVATION")}</button>
            </div>
          </div>
        )}

        {isOpen[3]&&(
          <div className="mostrarDiv">
            <p>
              {t("Ofrecemos.llama_descripcion1")}
              <br/> <br/>
              {t("Ofrecemos.llama_descripcion2")}
            </p>
            <div>
              <button onClick={()=>abrirContenido(3)}>{t("Cerrar")}</button>
              <button onClick={()=> window.location.href='/reservas'}>{t("RESERVATION")}</button>
            </div>
          </div>
        )} 

        {isOpen[4]&&(
          <div className="mostrarDiv">
            <p>{t("Ofrecemos.hosp_descripcion")}</p> 
            <div>
              <button onClick={()=>abrirContenido(4)}>{t("Cerrar")}</button>
              <button onClick={()=> window.location.href='/reservas'}>{t("RESERVATION")}</button>
            </div>
          </div>
        )}  

        {isOpen[5]&&(
          <div className="mostrarDiv">
            <p>{t("Ofrecemos.pago_descripcion")}</p> 
            <div className="botones">
              <button onClick={()=>abrirContenido(5)}>{t("Cerrar")}</button>
              <button onClick={()=> window.location.href='/reservas'}>{t("RESERVATION")}</button>
            </div>
          </div>
        )}       
      </div>
    </section>

    <section id="Ubicacion" className="Ubicacion">
    <h1>{t("Donde_estamos")}</h1>
      <div className="mapa">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3881.3257539492297!2d-72.04943302539394!3d-13.392144568406772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916dd91926ccec6d%3A0xfc6abb98a8a5ab72!2sCentro%20Textil%20La%20Casa%20del%20Chullo!5e0!3m2!1ses-419!2spe!4v1724107048742!5m2!1ses-419!2spe"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
    </>
  );
}


function Reservas(){
  return(
    <div className="formulario">
      <RotatingSquares />
      <Formulario></Formulario>
    </div>
    
  )
}

export function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/reservas" element={<Reservas />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}