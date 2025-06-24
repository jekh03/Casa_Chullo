import "./styles.css";
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import condor from './imagenes/condor.webp'
import puma from './imagenes/puma.webp'
import tejido from './imagenes/artesania.jpg'
import comida from './imagenes/comida.jpg'
import traiking from './imagenes/llamaTraking.jpg'
import picnic from './imagenes/pago.jpg'
import foto1 from './imagenes/fto_carrusel1.webp'
import foto2 from './imagenes/ftocarrusel2.webp'
import foto3 from './imagenes/wifala.webp'
import foto4 from './imagenes/muestra_teñido.webp'
import foto5 from './imagenes/traickingllama.webp'
import foto6 from './imagenes/artesania2.jpg'
import foto7 from './imagenes/artesania3.jpg'
import foto8 from './imagenes/teñido.webp'
import foto9 from './imagenes/cosecha.jpg'
import foto10 from './imagenes/pan.webp'
import foto11 from './imagenes/catarata.jpg'
import chall_inicio from './imagenes/llama_portada.webp'
import Footer from './footer.jsx';
import Formulario from './form.jsx';
import Infografia from "./infografia.jsx";
import Tienda from "./seccion_pagos.jsx";
import {useState, useEffect, useLayoutEffect} from "react";
import { useTranslation } from "react-i18next";
import { useNavigate} from "react-router-dom";
import LanguageToggle from './leguajes.jsx';
import Bienvenida from './pantalla_bienvenida.jsx';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css"
import PagosIzipay from './pagosIzipay.jsx';
import ProductoDetalle from './ProductoDetalle.jsx';
import InteractiveImage from "./animaciones.jsx";

function Header() {
  const { t } = useTranslation();
  const [stadoMenu, obtenerMenu] = useState(false);
  const [scroll, obtenerScroll] = useState(false)

  useEffect(()=>{
    const manejoScroll = () =>{
      const estaDesplazada = window.scrollY>10;
      if (estaDesplazada !== scroll){
        obtenerScroll(estaDesplazada)
      }
    }

    document.addEventListener('scroll', manejoScroll)
    return () => document.removeEventListener('scroll', manejoScroll)
  },[scroll])
  

  const menu = () => {
    obtenerMenu(!stadoMenu);
  };

  const cerrarMenu = ()=>{
    obtenerMenu(false)
  }

  // Función para hacer scroll hacia la sección correspondiente
  const scrollToSection = (sectionId, e) => {
    if (e) e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      cerrarMenu()
    }
  };

  return (
    <header  className={`navegacion ${scroll ? 'scrolled' : ''}`}>
      <div className="navegacion_adsolute">
        <div className="logo-barra-navegacion">
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <h2>Tukuy Yanapaq</h2>
          </Link>
        </div>

        <nav className="navegable">
          <Link 
            to="/"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("Inicio", e);
            }}

            className="navegacion-link"
          >
            {t("HOME")}
          </Link> 

          <a 
            onClick={(e) => scrollToSection("novedades", e)} // Al hacer clic se hace scroll a la sección de servicios
            className="navegacion-link"
            href="#novedades"
          >
            {t("Novedades")}
          </a>
          
          <a 
            onClick={(e) => scrollToSection("galeria", e)} 
            className="navegacion-link"
            href="#galeria"
          >
            {t("Galeria")}
          </a>
          <a 
            onClick={(e) => scrollToSection("nosotros", e)} // Al hacer clic se hace scroll a la sección de servicios
            className="navegacion-link"
            href="#nosotros"
          >
            {t("Nosotros")}
          </a>
          <a 
            onClick={(e) => scrollToSection("Servicios", e)} // Al hacer clic se hace scroll a la sección de servicios
            className="navegacion-link"
            href="#Servicios"
          >
            {t("SERVICE")}
          </a>
          
          <a 
            onClick={(e) => scrollToSection("Ubicacion", e)} // Al hacer clic se hace scroll a la sección de ubicación
            className="navegacion-link"
            href="#Ubicacion"
          >
            {t("LOCATION")}
          </a>
          <Link 
            to="/reservas" 
            className="navegacion-link boton-reserva"
          >
            {t("RESERVATION")}
          </Link>
          <div className="languas">
            <LanguageToggle />
          </div>  
        </nav>
        <div className="menuObciones">
          <button className="menu-toggle" onClick={menu}>
            ☰ {t("MENÚ")}
          </button>
          <div className={`mobile-nav ${stadoMenu ? 'open' : ''}`}>
            <button className="close-menu" onClick={menu}>×</button>
            <ul>
              <li>
                <Link
                  to="/"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("Inicio", e);
                  }}
                >
                  {t("HOME")}
                </Link>
              </li>
              <li><a onClick={(e) => scrollToSection("galeria",e)} href="#galeria"> {t("Galeria")}</a></li>
              <li><a onClick={(e) => scrollToSection("nosotros",e)} href="#nosotros"> {t("Nosotros")}</a></li>
              <li><a onClick={(e) => scrollToSection("Servicios",e)} href="#Servicios"> {t("SERVICE")}</a></li>
              <li><a onClick={(e) => scrollToSection("Ubicacion",e)} href="#Ubicacion"> {t("LOCATION")}</a></li>
              <li><Link to="/reservas" onClick={cerrarMenu}>{t("RESERVATION")}</Link></li>
              <li><LanguageToggle></LanguageToggle></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

function Inicio(){
  const {t} = useTranslation();
  const [isHovered, setIsHovered]=useState(false);
  const [isHovered2, setIsHovered2]=useState(false);
  const [isHovered3, setIsHovered3]=useState(false);
  const [isHovered4, setIsHovered4]=useState(false);
  
  const navigate = useNavigate();
  const navigate_tienda = useNavigate();

  const manejarRedireccion = () => {
    navigate_tienda('/tienda');
  };

  const images = [
    {
      original: foto2,
      thumbnail: foto2,
    },
    {
      original: foto1,
      thumbnail: foto1,
    },
    {
      original: foto3,
      thumbnail: foto3,
    },
    {
      original: foto4,
      thumbnail: foto4,
    },
    {
      original: foto5,
      thumbnail: foto5,
    },
    {
      original: foto6,
      thumbnail: foto6,
    },
    {
      original: foto7,
      thumbnail: foto7,
    },
    {
      original: foto8,
      thumbnail: foto8,
    },
    {
      original: foto9,
      thumbnail: foto9,
    },
    {
      original: foto10,
      thumbnail: foto10,
    },
    {
      original: foto11,
      thumbnail: foto11,
    }
  ];

  const[isOpen, setIsOpen] = useState({
    1:false,
    2:false,
    3:false,
    4:false,
  });
  
  const abrirContenido = (index) =>{
    setIsOpen((estadoPrevio) =>({
      ...estadoPrevio,
      [index]: !estadoPrevio[index],
    }));
  }

  const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
  
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <button className="close-button" onClick={onClose}>✖</button>
          {children}
        </div>
      </div>
    );
  };
  
  
  useLayoutEffect(() => {
    const caracteristicasElementos = document.querySelectorAll(".servicios_ofrecidos");
  
    caracteristicasElementos.forEach((caracteristicaElemento) => {
      caracteristicaElemento.addEventListener("pointermove", (event) => {
        const reaccionar = caracteristicaElemento.getBoundingClientRect();
        caracteristicaElemento.style.setProperty("--x", `${event.clientX - reaccionar.left}`);
        caracteristicaElemento.style.setProperty("--y", `${event.clientY - reaccionar.top}`);
      });
    });
  
    return () => {
      // Limpieza de los event listeners cuando el componente se desmonta
      caracteristicasElementos.forEach((caracteristicaElemento) => {
        caracteristicaElemento.removeEventListener("pointermove", () => {});
      });
    };
  }, []);
  
  

  return (
    <>
    <div className="background">
      <section id="Inicio" className="Inicio">
        <section className="info" id="info">
          <div className="titulo_inicio">
            <h1>TUKUY YANAPAQ</h1>
            <p>{t("Inicio.TextInicio")} <strong>{t("Inicio.TextInicioFuerte")}</strong></p>
            <button className="btn_redireccion_compra" onClick={() => navigate('/reservas')}>CONTACTANOS</button>
          </div>
          <div className="contenedor_imagen">
            <img src={chall_inicio} alt="casa del chullo" className="img_inicio"/>
          </div>
          
        </section>
      </section>
    </div>
    {/*
    <section className="Novedades" id="novedades">
      <InteractiveImage></InteractiveImage>
    </section>
    */}

    <section className="Galeria" id="galeria">
      <ImageGallery items={images} lazyLoad={true} showThumbnails={false} showPlayButton={false} showFullscreenButton={false} autoPlay={true} slideInterval={5000}/>;
    </section>
    
    <section className="Nosotros" id="nosotros">
      <h1>{t("Somos.Titulo")}</h1>
      <div className="contenedor_info">
          <div className="animal-decoracion condor-container">
              <img src={condor} alt="condor" className="img_condor"/>
              <div className="gold-aura"></div>
          </div>
          
          <div className="Quienes_somos">
              <div className="texto-destacado">
                  <p>
                      {t("Somos.en")} <strong className="nombre-dorado">Tukuy Yanapaq</strong>, {t("Somos.descripcion1")}
                  </p>
              </div>
              
              <div className="texto-destacado">
                  <p>
                      <strong className="nombre-dorado">{t("Somos.nuestro_equipo")}</strong> {t("Somos.descripcion2")}
                  </p>
              </div>
              
              <div className="texto-destacado">
                  <p>
                      {t("Somos.en")} <strong className="nombre-dorado">Tukuy Yanapaq</strong>, {t("Somos.descripcion3")} 
                  </p>
              </div>
          </div>
          
          <div className="animal-decoracion puma-container">
              <img src={puma} alt="puma" className="img_puma"/>
              <div className="gold-aura"></div>
          </div>
      </div>
  </section>

    <section id="Servicios" className="Servicios">
      <h1>{t("Ofrecemos.Titulo")}</h1>
      <div className="caja_servicios">
        {/* Tarjeta 1 - Teñido (ya modificado) */}
        <div className="Teñido servicios_ofrecidos">
          <div className="card-image-container">
            <img src={tejido} alt="img1" className="card-image" />
            <div className="image-overlay"></div>
          </div>
          <div className="contenido">
            <h2 className="card-title">{t("Ofrecemos.Taller_textil")}</h2>
            <div className="card-hover-content">
              <button className="card-button" onClick={() => abrirContenido(1)}>
                Ver más
              </button>
            </div>
          </div>
        </div>

        {/* Tarjeta 2 - Cocina (modificada para coincidir) */}
        <div className="Cocina servicios_ofrecidos">
          <div className="card-image-container">
            <img src={comida} alt="Taller de cocina" className="card-image" />
            <div className="image-overlay"></div>
          </div>
          <div className="contenido">
            <h2 className="card-title">{t("Ofrecemos.Taller_cocina")}</h2>
            <div className="card-hover-content">
              <button className="card-button" onClick={() => abrirContenido(2)}>
                Ver más
              </button>
            </div>
          </div>
        </div>

        {/* Tarjeta 3 - Caminata (modificada para coincidir) */}
        <div className="Caminata servicios_ofrecidos">
          <div className="card-image-container">
            <img src={traiking} alt="Llama tracking" className="card-image" />
            <div className="image-overlay"></div>
          </div>
          <div className="contenido">
            <h2 className="card-title">LLAMA TRACKING</h2>
            <div className="card-hover-content">
              <button className="card-button" onClick={() => abrirContenido(3)}>
                Ver más
              </button>
            </div>
          </div>
        </div>

        {/* Tarjeta 4 - Picnic (modificada para coincidir) */}
        <div className="Picnic servicios_ofrecidos">
          <div className="card-image-container">
            <img src={picnic} alt="Experiencia picnic" className="card-image" />
            <div className="image-overlay"></div>
          </div>
          <div className="contenido">
            <h2 className="card-title">{t("Ofrecemos.Pago")}</h2>
            <div className="card-hover-content">
              <button className="card-button" onClick={() => abrirContenido(4)}>
                Ver más
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="informacion_Servicios">
        <Modal isOpen={isOpen[1]} onClose={() => abrirContenido(1)}>
          <p>{t("Ofrecemos.tex_descripcion")}</p>
          <div className="botones">
            <button onClick={() => abrirContenido(1)}>{t("Cerrar")}</button>
            <button onClick={() => navigate('/reservas')}>{t("RESERVATION")}</button>
          </div>
        </Modal>

        <Modal isOpen={isOpen[2]} onClose={() => abrirContenido(2)}>
          <p>{t("Ofrecemos.coci_descripcion")}</p>
          <div className="botones">
            <button onClick={() => abrirContenido(2)}>{t("Cerrar")}</button>
            <button onClick={() => navigate('/reservas')}>{t("RESERVATION")}</button>
          </div>
        </Modal>

        <Modal isOpen={isOpen[3]} onClose={() => abrirContenido(3)}>
          <p>
            {t("Ofrecemos.llama_descripcion1")} <br/><br/>
            {t("Ofrecemos.llama_descripcion2")}
          </p>
          <div className="botones">
            <button onClick={() => abrirContenido(3)}>{t("Cerrar")}</button>
            <button onClick={() => navigate('/reservas')}>{t("RESERVATION")}</button>
          </div>
        </Modal>

        <Modal isOpen={isOpen[4]} onClose={() => abrirContenido(4)}>
          <p>{t("Ofrecemos.pago_descripcion")}</p>
          <div className="botones">
            <button onClick={() => abrirContenido(4)}>{t("Cerrar")}</button>
            <button onClick={() => navigate('/reservas')}>{t("RESERVATION")}</button>
          </div>
        </Modal>  
      </div>
    </section>

    <section id="Ubicacion" className="Ubicacion">
      <h1>{t("Donde_estamos")}</h1>
      <div className="mapa-container">
          <div className="mapa-decoration">
              <div className="gold-bar"></div>
              <div className="mapa-wrapper">
                  <iframe 
                      className="mapa-interactivo"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3881.3257539492297!2d-72.04943302539394!3d-13.392144568406772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916dd91926ccec6d%3A0xfc6abb98a8a5ab72!2sCentro%20Textil%20La%20Casa%20del%20Chullo!5e0!3m2!1ses-419!2spe!4v1724107048742!5m2!1ses-419!2spe"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
              </div>
              <div className="gold-bar"></div>
          </div>
          
          <div className="mapa-info">
              <p className="direccion">{t("Dirección_completa")}</p>
              
              <div className="horario-atencion">
                  <div className="horario-icono">
                      <i className="far fa-clock"></i>
                  </div>
                  <div className="horario-texto">
                      <span className="horario-titulo">{t("Horario_de_atencion")}:</span>
                      <span className="horario-horas">7:00 AM - 8:00 PM {t("todos_los_dias")}</span>
                  </div>
              </div>
              
              <a 
                  href="https://maps.google.com?q=Centro+Textil+La+Casa+del+Chullo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mapa-link"
              >
                  <span>{t("Abrir_en_maps")}</span>
                  <i className="fas fa-external-link-alt"></i>
              </a>
          </div>
      </div>
    </section>
    </>
  );
}


function Reservas(){
  return(
    <div className="formulario">
      <Formulario></Formulario>
    </div>
    
  )
}

function Seccion_Infografia(){
  return(
    <Infografia></Infografia>
  )
}

function Seccion_tienda(){
  return(
    <Tienda></Tienda>
  )
}

export function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true); // empieza a desvanecerse
    }, 2500); // empieza a desvanecer a los 2.5s

    const hideTimer = setTimeout(() => {
      setShowSplash(false); // se oculta completamente
    }, 3500); // después de 1s de animación

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (showSplash) {
    return <Bienvenida fade={fadeOut}/>;
  }
  return (
    <Router basename="/">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/reservas" element={<Reservas />} />
        <Route path="/infografia" element={<Seccion_Infografia/>}></Route>
        
        
        <Route path="/tienda/:id?" element={<Seccion_tienda/>}></Route>
        {/*
        <Route path="/pagosizipay" element={<PagosIzipay/>}></Route>
      */}
        
      </Routes>
      <Footer></Footer>
    </Router>
  );
}