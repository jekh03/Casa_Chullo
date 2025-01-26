import "./styles.css";
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import llamadaPortada from './imagenes/alpaca.png'
import condor from './imagenes/condor.png'
import puma from './imagenes/puma.png'
import tejido from './imagenes/artesania.jpg'
import comida from './imagenes/comida.jpg'
import traiking from './imagenes/llamaTraking.jpg'
import picnic from './imagenes/pago.jpg'
import foto1 from './imagenes/ftocarrusel1.jpg'
import foto2 from './imagenes/ftocarrusel2.jpg'
import foto3 from './imagenes/wifala.jpg'
import foto4 from './imagenes/muestra_teñido.jpg'
import foto5 from './imagenes/traickingllama.png'
import foto6 from './imagenes/artesania2.jpg'
import foto7 from './imagenes/artesania3.jpg'
import foto8 from './imagenes/teñido.jpg'
import foto9 from './imagenes/cosecha.jpg'
import foto10 from './imagenes/pan.jpg'
import Footer from './footer.jsx';
import Formulario from './form.jsx';
import {useState, useLayoutEffect} from "react";
import { useTranslation } from "react-i18next";
import LanguageToggle from './leguajes.jsx';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css"
import InteractiveImage from "./animaciones.jsx";

function Header() {
  const { t } = useTranslation();
  const [stadoMenu, obtenerMenu] = useState(false);
  

  const menu = () => {
    obtenerMenu(!stadoMenu);
  };

  // Función para hacer scroll hacia la sección correspondiente
  const scrollToSection = (sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section className="navegacion">
      <div className="navegacion_adsolute">
        <h1></h1>
        <section className="navegable">
          <div className="navegable_inicio">
            <a
              
              onClick={(e) => {
                if (e.target.href) {
                  // Si el enlace tiene un href, no prevengas el comportamiento por defecto (navegar a otra página)
                  return;
                }
                scrollToSection("Inicio", e);  // Al hacer clic se hace scroll a la sección de Inicio
              }} 
              className="navegacion-link" 
              href="#"
            >
              <Link 
                to="/" 
              >
                <h3>{t("HOME")}</h3>
              </Link> 
              
            </a>

            <a 
              onClick={(e) => scrollToSection("novedades", e)} // Al hacer clic se hace scroll a la sección de servicios
              className="navegacion-link"
              href="#"
            >
              <h3>{t("Novedades")}</h3>
            </a>
            
            <a 
              onClick={(e) => scrollToSection("galeria", e)} // Al hacer clic se hace scroll a la sección de servicios
              className="navegacion-link"
              href="#"
            >
              <h3>{t("Galeria")}</h3>
            </a>
            <a 
              onClick={(e) => scrollToSection("nosotros", e)} // Al hacer clic se hace scroll a la sección de servicios
              className="navegacion-link"
              href="#"
            >
              <h3>{t("Nosotros")}</h3>
            </a>
            <a 
              onClick={(e) => scrollToSection("Servicios", e)} // Al hacer clic se hace scroll a la sección de servicios
              className="navegacion-link"
              href="#"
            >
              <h3>{t("SERVICE")}</h3>
            </a>
            
            <a 
              onClick={(e) => scrollToSection("Ubicacion", e)} // Al hacer clic se hace scroll a la sección de ubicación
              className="navegacion-link"
              href="#"
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
          style={{ display: stadoMenu ? 'block' : 'none' }}
        >
          <ul>
            <li><a onClick={() => scrollToSection("Inicio")} href="#"> <Link 
                to="/" 
              >
                {t("HOME")}
              </Link> </a></li>
            <li><a onClick={() => scrollToSection("galeria")} href="#"> {t("Galeria")}</a></li>
            <li><a onClick={() => scrollToSection("nosotros")} href="#"> {t("Nosotros")}</a></li>
            <li><a onClick={() => scrollToSection("Servicios")} href="#"> {t("SERVICE")}</a></li>
            <li><a onClick={() => scrollToSection("Ubicacion")} href="#"> {t("LOCATION")}</a></li>
            <li><Link to="/reservas">{t("RESERVATION")}</Link></li>
            <li><LanguageToggle></LanguageToggle></li>
          </ul>
        </div>
        <div className="lenguas">
          <LanguageToggle></LanguageToggle>
        </div>
      </div>
    </section>
  );
}

function Inicio(){
  const {t} = useTranslation();
  const [isHovered, setIsHovered]=useState(false);
  const [isHovered2, setIsHovered2]=useState(false);
  const [isHovered3, setIsHovered3]=useState(false);
  const [isHovered4, setIsHovered4]=useState(false);

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
          <h1>TUKUY YANAPAQ</h1>
          <p>{t("Inicio.TextInicio")} <strong>{t("Inicio.TextInicioFuerte")}</strong></p>
        </section>
      </section>
    </div>

    <section className="Novedades" id="novedades">
      <InteractiveImage></InteractiveImage>
    </section>

    <section className="Galeria" id="galeria">
      <ImageGallery items={images} lazyLoad={true} showThumbnails={false} showPlayButton={false} showFullscreenButton={false} autoPlay={true} slideInterval={5000}/>;
    </section>
    
    <section className="Nosotros" id="nosotros">
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
        
        

        <div className="Picnic servicios_ofrecidos"
          onMouseEnter={()=>setIsHovered4(true)}
          onMouseLeave={()=>setIsHovered4(false)}
          onClick={()=> abrirContenido(4)}
        >
          <img src={picnic} alt="img1"
            style={{transform: isHovered4? 'scale(1.3)':'scale(1)',
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
          <div className="mostrarDiv" >
            <p>{t("Ofrecemos.tex_descripcion")}</p>
            <div className="botones">
              <button onClick={()=>abrirContenido(1)}>{t("Cerrar")}</button>
              <button onClick={()=> window.location.href='/Casa_Chullo/reservas'}>{t("RESERVATION")}</button>
            </div>
          </div>
        )}

        {isOpen[2] &&(
          <div className="mostrarDiv">
            <p>{t("Ofrecemos.coci_descripcion")}</p>
            <div className="botones">
              <button onClick={()=>abrirContenido(2)}>{t("Cerrar")}</button>
              <button onClick={()=> window.location.href='/Casa_Chullo/reservas'}>{t("RESERVATION")}</button>
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
            <div className="botones">
              <button onClick={()=>abrirContenido(3)}>{t("Cerrar")}</button>
              <button onClick={()=> window.location.href='/Casa_Chullo/reservas'}>{t("RESERVATION")}</button>
            </div>
          </div>
        )} 

      
        {isOpen[4]&&(
          <div className="mostrarDiv">
            <p>{t("Ofrecemos.pago_descripcion")}</p> 
            <div className="botones">
              <button onClick={()=>abrirContenido(4)}>{t("Cerrar")}</button>
              <button onClick={()=> window.location.href='/Casa_Chullo/reservas'}>{t("RESERVATION")}</button>
            </div>
          </div>
        )}       
      </div>
    </section>

    <section id="Ubicacion" className="Ubicacion">
    <h1>{t("Donde_estamos")}</h1>
      <div className="mapa">
        <iframe className="Mapa"
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
      <Formulario></Formulario>
    </div>
    
  )
}

export function App() {
  return (
    <Router basename="/Casa_Chullo/">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/reservas" element={<Reservas />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}