import React, { useEffect, useState } from 'react';

//--> Dibujar y animar cuadrilateros
const MIN_DISTANCE = 10; // Distancia mínima en vw entre cuadriláteros

const getRandomPositionAndSize = () => {
  const x = Math.random() * (100 - 15); // Ajustar para que no salga del viewport
  const y = Math.random() * (100 - 15); // Ajustar para que no salga del viewport
  const size = Math.random() * 10 + 5; // Tamaño aleatorio entre 5vw y 15vw
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
            top: `${position.y}vw`, 
            left: `${position.x}vw`, 
            width: `${position.size}vw`, 
            height: `${position.size}vw`, 
            transform: `rotate(${30 * index}deg)`, // Rotación inicial diferente para cada cuadrilátero
          }}
        />
      ))}
    </>
  );
};

export default RotatingSquares;
