import React, { useState, useRef, useEffect } from 'react';
import yourImage from './imagenes/Anuncios.jpg'; // Importa tu imagen

const InteractiveImage = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar la visibilidad de la imagen ampliada
  const [isRotating, setIsRotating] = useState(true); // Estado para controlar si la imagen debe rotar
  const imageRef = useRef(null);
  let currentX = 0;
  let currentY = 0;
  let targetX = 0;
  let targetY = 0;

  // Función para animación suave de la rotación
  const updateAnimation = () => {
    if (isRotating) {
      currentX += (targetX - currentX) * 0.1; // Interpolación suave
      currentY += (targetY - currentY) * 0.1;

      if (imageRef.current) {
        imageRef.current.style.transform = `perspective(1000px) rotateX(${currentY}deg) rotateY(${currentX}deg)`;
      }
    }
    requestAnimationFrame(updateAnimation);
  };

  // Función para manejar el movimiento del ratón sobre la imagen
  const handleMouseMove = (e) => {
    if (isOpen) return; // No hacer nada si la imagen está agrandada

    const image = imageRef.current;
    if (!image) return;

    const rect = image.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    targetX = ((x - centerX) / centerX) * 15;
    targetY = ((y - centerY) / centerY) * -15;
  };

  // Función para manejar el ratón cuando sale de la imagen
  const handleMouseLeave = () => {
    targetX = 0;
    targetY = 0;
  };

  // Función para manejar el clic en la imagen
  const handleClick = () => {
    setIsOpen(!isOpen); // Cambia el estado de isOpen al hacer clic
    setIsRotating(false); // Detiene la rotación cuando la imagen está agrandada

    // Si la imagen está volviendo a su tamaño original, activa la rotación de nuevo
    if (isOpen) {
      setTimeout(() => {
        setIsRotating(true);
      }, 300); // Espera a que la animación de cambio de tamaño termine
    }
  };

  useEffect(() => {
    updateAnimation(); // Inicia la animación
  }, [isRotating]); // Dependencia para reiniciar la animación cuando cambia el estado de rotación

  // Definimos un estilo condicional para la rotación
  const imageStyle = isOpen
    ? { transform: 'none' } // Elimina la rotación cuando está agrandada
    : { transform: `perspective(1000px) rotateX(${currentY}deg) rotateY(${currentX}deg)` }; // Rotación normal

  return (
    <div
      className={`image-container ${isOpen ? 'opened' : ''}`} // Cambia de clase cuando la imagen está abierta
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img
        ref={imageRef}
        src={yourImage}
        alt="Interactive"
        className={`interactive-image ${isOpen ? 'open' : ''}`} // Clase dinámica
        onClick={handleClick} // Añade el evento de clic
        style={imageStyle} // Aplica el estilo condicional
      />
    </div>
  );
};
export default InteractiveImage;
