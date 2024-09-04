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

function Header(){
  return(
    <section className="navegacion">
      <h1>CASA DE CHULLO</h1>
      <section className="navegable">
        <div className="navegable_inicio">
        <Link to="/" className="navegacion-link"><h3>Inicio</h3></Link>
        <a href="/#Servicios" className="navegacion-link"><h3>Servicios</h3></a>
        <a href="/#Ubicacion" className="navegacion-link"><h3>Ubicación</h3></a>
        </div>
      </section>
      <div className="Reserva">
        <Link to="/reservas" className="navegacion-link">
          <h3>Reservas</h3>
        </Link>  
      </div> 
    </section>
  )
}

function Inicio(){
  const [isHovered, setIsHovered]=useState(false);
  const [isHovered2, setIsHovered2]=useState(false);
  const [isHovered3, setIsHovered3]=useState(false);
  const [isHovered4, setIsHovered4]=useState(false);
  const [isHovered5, setIsHovered5]=useState(false);
  return (
    <>
    <div className="background">
      <RotatingSquares />
      <section id="Inicio" className="Inicio">
        
        <section className="info">
          <p>Descubre el arte ancestral del teñido y tejido, explora nuestras exquisitas prendas de lana de alpaca, y disfruta de la auténtica cocina local. <strong>¡Sumérgete en una experiencia cultural única y cálida!</strong></p>
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
      <h1>QUIENES SOMOS</h1>
      <div className="contenedor_info">
        <img src={condor} alt="condor" className="img_condor"/>
        <div className="Quienes_somos">
          <p>
            En <strong>Casa de Chullo</strong>, nos dedicamos a preservar y promover el arte ancestral del teñido y tejido tradicional. Fundado con la misión de mantener vivas las técnicas textiles que han sido transmitidas de generación en generación, nuestro centro es un espacio donde la historia, la cultura y la sostenibilidad se encuentran.
          </p>
          <p>
            <strong>Nuestro equipo</strong> de artesanos y colaboradores está comprometido con la creación de productos de alta calidad, utilizando lana de alpaca y procesos respetuosos con el medio ambiente. Nos enorgullece contribuir al desarrollo de nuestra comunidad, ofreciendo empleo, formación y una experiencia cultural única para nuestros visitantes.
          </p>
          <p>
            En <strong>Casa de Chullo</strong>, no solo encontrarás prendas artesanales excepcionales, sino también la oportunidad de sumergirte en la rica tradición cultural de nuestra región, a través de talleres, degustaciones y un entorno de hospedaje que refleja la autenticidad de nuestras raíces.
          </p>
        </div>
        <img src={puma} alt="puma" className="img_puma"/>
      </div>
    </section>

    <section id="Servicios" className="Servicios">
      <h1>Estamos ofreciendo</h1>
      <div className="caja_servicios">
        <div className="Teñido servicios_ofrecidos"
          onMouseEnter={()=>setIsHovered(true)}
          onMouseLeave={()=>setIsHovered(false)}
        >
          <img src={tejido} alt="img1"
            style={{transform: isHovered? 'scale(1.3)':'scale(1)',
              transition: 'transform 0.1s ease',
            }}
          />
          
          <div className="contenido">
            <h2>Taller de Teñido y Tejido Natural</h2>
            <p>Sumérgete en la tradición artesanal aprendiendo sobre el proceso de teñido y tejido natural de las prendas típicas de la zona. Descubre cómo se obtienen los vibrantes colores utilizando plantas naturales y conoce cada paso para crear las hermosas telas que caracterizan a nuestra cultura.</p>
          </div>
        </div>
        
        <div className="Cocina servicios_ofrecidos"
          onMouseEnter={()=>setIsHovered2(true)}
          onMouseLeave={()=>setIsHovered2(false)}
        >
          <img src={comida} alt="img1"
            style={{transform: isHovered2? 'scale(1.3)':'scale(1)',
              transition: 'transform 0.1s ease',
            }}
          />

          <div className="contenido">
            <h2>Taller de Cocina Tradicional</h2>
            <p>Conosca como se hacen los deliciosos platillos típicos de la región en nuestro taller de cocina. Te guiamos paso a paso para que puedas recrear estos sabores en casa, conectándote con la cultura local a través de la gastronomía.</p>
          </div>
        </div>
        
        <div className="Caminata servicios_ofrecidos"
          onMouseEnter={()=>setIsHovered3(true)}
          onMouseLeave={()=>setIsHovered3(false)}
        >
          <img src={traiking} alt="img1"
            style={{transform: isHovered3? 'scale(1.3)':'scale(1)',
              transition: 'transform 0.1s ease',
            }}
          />

          <div className="contenido">
            <h2>Traiking</h2>
            <p>Disfruta de una aventura al aire libre y conoce las impresionantes cataratas de Pocpoc.</p>
            <p>La caminata incluye un almuerzo para que puedas disfrutar de la naturaleza mientras saboreas platos locales.</p>
          </div>
        </div>
        
        <div className="Hospedaje servicios_ofrecidos"
          onMouseEnter={()=>setIsHovered4(true)}
          onMouseLeave={()=>setIsHovered4(false)}
        >
          <img src={hospedaje} alt="img1"
            style={{transform: isHovered4? 'scale(1.3)':'scale(1)',
              transition: 'transform 0.1s ease',
            }}
          />
          
          <div className="contenido">
            <h2>Hospedaje con desayuno Incluido</h2>
            <p>Relájate en nuestro acogedor hospedaje en Chinchero. Ofrecemos habitaciones cómodas para que puedas descansar después de un día de actividades. Incluye desayuno y Wi-Fi gratis, ideal para quienes deseen conectarse mientras disfrutan de su estadía.</p> 
          </div>
        </div>

        <div className="Picnic servicios_ofrecidos"
          onMouseEnter={()=>setIsHovered5(true)}
          onMouseLeave={()=>setIsHovered5(false)}
        >
          <img src={picnic} alt="img1"
            style={{transform: isHovered5? 'scale(1.3)':'scale(1)',
              transition: 'transform 0.1s ease',
            }}
          />

          <div className="contenido">
            <h2>Picnic</h2>
            <p>Disfruta de un picnic en el campo rodeado de naturaleza. Te ofrecemos una cesta con productos frescos, mantas y todo lo necesario para un día relajante al aire libre. Perfecto para compartir con tu pareja, familia o amigos</p> 
          </div>
        </div>
      </div>
    </section>

    <section id="Ubicacion" className="Ubicacion">
    <h1>Nos encuentras en</h1>
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