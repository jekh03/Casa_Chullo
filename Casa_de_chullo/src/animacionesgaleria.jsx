import React, { useState } from 'react';
import catarata from './imagenes/catarata.jpg'
import torre from './imagenes/torre.jpg'
import muestra_teñido from './imagenes/muestra_teñido.jpg'
import muestra_teñido1 from './imagenes/ftocarrusel1.jpg'
import muestra_teñido2 from './imagenes/ftocarrusel2.jpg'
import { useSpring, animated } from '@react-spring/web';

// Definición del componente AnimatedBox
const AnimatedBox = () => {
  const [step, setStep] = useState(0);

  const [headStyles, headApi] = useSpring(() => ({
    from: { x: "9vw", width: '14vw', height: '14vw', backgroundColor: '#61dafb',filter:'blur(1px)', zIndex:2},
  }));

  const [bodyStyles, bodyApi] = useSpring(()=>({
    from: {x:"0vw", width: '7vw', height: '7vw', backgroundColor: '#61dafb', position: 'absolute',filter:'blur(2px)',zIndex:1},
  }));

  const [bodyStyles2, bodyApi2] = useSpring(()=>({
    from: {x:"25vw", width: '21vw', height: '21vw', backgroundColor: '#61dafb', position: 'absolute',filter:'blur(0px)',zIndex:3},
  }));

  const [bodyStyles3, bodyApi3] = useSpring(()=>({
    from: {x:"48vw", width: '14vw', height: '14vw', backgroundColor: '#61dafb', position: 'absolute',filter:'blur(1px)',zIndex:2},
  }));

  const [bodyStyles4, bodyApi4] = useSpring(()=>({
    from: {x:"64vw", width: '7vw', height: '7vw', backgroundColor: '#61dafb', position: 'absolute',filter:'blur(2px)',zIndex:1},
  }));

  const handleClick = () => {
    if (step === 0) {
      // Primera fase: avanza y crece
      headApi.start({
        to: { x: "25vw", width: '21vw', height: '21vw', backgroundColor: '#61dafb',filter:'blur(0px)',zIndex:3},
      });

      bodyApi.start({
        to: {x:"9vw", width: '14vw', height: '14vw', backgroundColor: '#61dafb',filter:'blur(1px)',zIndex:2}
      });

      bodyApi2.start({
        to: {x:"48vw", width: '14vw', height: '14vw', backgroundColor: '#61dafb',filter:'blur(1px)',zIndex:2}
      });

      bodyApi3.start({
        to: {x:"64vw", width: '7vw', height: '7vw', backgroundColor: '#61dafb',filter:'blur(2px)',zIndex:1}
      });

      bodyApi4.start({
        to: {x:"0vw", width: '7vw', height: '7vw', backgroundColor: '#61dafb',filter:'blur(2px)',zIndex:1}
      });
      setStep(1);
    } else if (step === 1) {
      // Segunda fase: avanza y se reduce
      headApi.start({
        to: { x:"48vw", width: '14vw', height: '14vw', backgroundColor: '#61dafb',filter:'blur(1px)',zIndex:2},
      });

      bodyApi.start({
        to: { x: "25vw", width: '21vw', height: '21vw', backgroundColor: '#61dafb',filter:'blur(0px)',zIndex:3},
      });

      bodyApi2.start({
        to: { x:"64vw", width: '7vw', height: '7vw', backgroundColor: '#61dafb',filter:'blur(2px)',zIndex:1}
      });

      bodyApi3.start({
        to: { x:"0vw", width: '7vw', height: '7vw', backgroundColor: '#61dafb',filter:'blur(2px)',zIndex:1}
      });

      bodyApi4.start({
        to: {x:"9vw", width: '14vw', height: '14vw', backgroundColor: '#61dafb',filter:'blur(1px)',zIndex:2}
      });
      setStep(2);
    } else if (step === 2) {
      // Tercera fase: retrocede al punto inicial sin cambiar tamaño --->CORREGIR EL SATO ES MUY LAGO
      headApi.start({
        to: { x:"64vw", width: '7vw', height: '7vw', backgroundColor: '#61dafb',filter:'blur(2px)',zIndex:1},
      });

      bodyApi.start({
        to: { x:"48vw", width: '14vw', height: '14vw', backgroundColor: '#61dafb',filter:'blur(1px)', zIndex:2},
      });

      bodyApi2.start({
        to: { x:"0vw", width: '7vw', height: '7vw', backgroundColor: '#61dafb',filter:'blur(2px)',zIndex:1}
      });

      bodyApi3.start({
        to: { x:"9vw", width: '14vw', height: '14vw', backgroundColor: '#61dafb',filter:'blur(1px)', zIndex:2}
      });

      bodyApi4.start({
        to: { x: "25vw", width: '21vw', height: '21vw', backgroundColor: '#61dafb',filter:'blur(0px)', zIndex:3}
      });
      setStep(3);
    } else if(step === 3){
      // Caurta fase
      headApi.start({
        to: { x:"0vw", width: '7vw', height: '7vw', backgroundColor: '#61dafb',filter:'blur(2px)',zIndex:1},
      });

      bodyApi.start({
        to: { x:"64vw", width: '7vw', height: '7vw', backgroundColor: '#61dafb',filter:'blur(2px)',zIndex:1},
      });

      bodyApi2.start({
        to: { x:"9vw", width: '14vw', height: '14vw', backgroundColor: '#61dafb',filter:'blur(1px)', zIndex:2}
      });

      bodyApi3.start({
        to: { x: "25vw", width: '21vw', height: '21vw', backgroundColor: '#61dafb',filter:'blur(0px)', zIndex:3}
      });

      bodyApi4.start({
        to: { x:"48vw", width: '14vw', height: '14vw', backgroundColor: '#61dafb',filter:'blur(1px)', zIndex:2}
      });
      setStep(4);
    } else if(step==4){
      // Tercera fase: retrocede al punto inicial sin cambiar tamaño --->CORREGIR EL SATO ES MUY LAGO
      headApi.start({
        to: { x:"9vw", width: '14vw', height: '14vw', backgroundColor: '#61dafb',filter:'blur(1px)', zIndex:2},
      });

      bodyApi.start({
        to: { x:"0vw", width: '7vw', height: '7vw', backgroundColor: '#61dafb', filter:'blur(2px)',zIndex:1},
      });

      bodyApi2.start({
        to: { x: "25vw", width: '21vw', height: '21vw', backgroundColor: '#61dafb',filter:'blur(0px)', zIndex:3}
      });

      bodyApi3.start({
        to: { x:"48vw", width: '14vw', height: '14vw', backgroundColor: '#61dafb',filter:'blur(1px)', zIndex:2}
      });

      bodyApi4.start({
        to: { x:"64vw", width: '7vw', height: '7vw', backgroundColor: '#61dafb',filter:'blur(2px)', zIndex:1}
      });
      setStep(0);
    }
  };

  return (
    <div class='gallery'>
      <animated.div className="fto" style={headStyles} onClick={handleClick}><img src={catarata}></img></animated.div>
      <animated.div className="fto" style={bodyStyles} onClick={handleClick}><img src={torre}></img></animated.div>
      <animated.div className="fto" style={bodyStyles2} onClick={handleClick}><img src={muestra_teñido}></img></animated.div>
      <animated.div className="fto" style={bodyStyles3} onClick={handleClick}><img src={muestra_teñido1}></img></animated.div>
      <animated.div className="fto" style={bodyStyles4} onClick={handleClick}><img src={muestra_teñido2}></img></animated.div>
    </div>
  );
}

export default AnimatedBox; // Exportar el componente AnimatedBox
