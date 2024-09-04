import React, { useEffect, useState } from 'react';

//--> Dibujar y animar cuadrilateros
const MIN_DISTANCE = 200; // Distancia mínima entre cuadriláteros

const getRandomPositionAndSize = () => {
  const x = Math.random() * (window.innerWidth - 150); // Ajustar según el tamaño máximo
  const y = Math.random() * (window.innerHeight - 150); // Ajustar según el tamaño máximo
  const size = Math.random() * 100 + 50; // Tamaño aleatorio entre 50px y 150px
  return { x, y, size };
};

const distance = (pos1, pos2) => {
  const dx = pos1.x - pos2.x;
  const dy = pos1.y - pos2.y;
  return Math.sqrt(dx * dx + dy * dy);
};

const isValidPosition = (position, positions) => {
  return positions.every(pos => distance(position, pos) > MIN_DISTANCE);
};

const RotatingSquares = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const generatePositions = () => {
      const newPositions = [];
      while (newPositions.length < 10) {
        const newPosition = getRandomPositionAndSize();
        if (isValidPosition(newPosition, newPositions)) {
          newPositions.push(newPosition);
        }
      }
      setPositions(newPositions);
    };

    generatePositions();
  }, []);

  return (
    <>
      {positions.map((position, index) => (
        <div
          key={index}
          className="cuadrado"
          style={{
            top: `${position.y}px`,
            left: `${position.x}px`,
            width: `${position.size}px`,
            height: `${position.size}px`,
            transform: `rotate(${30 * index}deg)`, // Rotación inicial diferente para cada cuadrilátero
          }}
        />
      ))}
    </>
  );
};

export default RotatingSquares;

