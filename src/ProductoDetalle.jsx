// ProductoDetalle.jsx
import { useParams } from 'react-router-dom';
import productosData from './productosData'; 
import poncho from './imagenes/poncho.webp';

function ProductoDetalle() {
  const { id } = useParams();
  const producto = productosData.find(p => p.id === parseInt(id));

  if (!producto) return <h2>Producto no encontrado</h2>;

  return (
    <div style={{ padding: '2rem' }}>
      <h2>{producto.nombre}</h2>
      <img src={producto.imagen || poncho} alt={producto.nombre} style={{ width: 300 }} />
      <p><strong>Precio:</strong> S/ {producto.precio}</p>
      <p><strong>Categoría:</strong> {producto.categoria}</p>
    </div>
  );
}

export default ProductoDetalle;
