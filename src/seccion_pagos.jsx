import { useEffect, useState } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import FormularioPago from './FormularioPago.jsx';
import productosData from './productosData';
import './style_tienda_online.css';
  
function App() {
  const [carrito, setCarrito] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [filtro, setFiltro] = useState('Todos');

  const { id } = useParams();
  const [productoAgregadoPorUrl, setProductoAgregadoPorUrl] = useState(false);

  useEffect(() => {
    if (id && !productoAgregadoPorUrl) {
      const producto = productosData.find(p => p.id === parseInt(id));
      if (producto) {
        setCarrito(prev => {
          const yaExiste = prev.some(item => item.id === producto.id);
          return yaExiste ? prev : [...prev, producto];
        });
        setProductoAgregadoPorUrl(true);
      }
    }
  }, [id, productoAgregadoPorUrl]);

  const navigate = useNavigate()

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const eliminarDelCarrito = (index) => {
      const nuevoCarrito = [...carrito];
      nuevoCarrito.splice(index, 1);
      setCarrito(nuevoCarrito);
  };

  const calcularTotal = () => {
      return carrito.reduce((total, item) => total + item.precio, 0);
  };

  const productosFiltrados = filtro === 'Todos'
    ? productosData
    : productosData.filter(p => p.categoria === filtro);
  
  const handleSumit = async (e) => {
    e.preventDefault();
    try{
      const response = await fetch('http://localhost/Server-PaymentForm-Php-main/formtoken', formData)
      navigate('/checkout', { state: response.data})
    }catch(error){
      console.error("Error al procesar el pago: ", error)
    }
  }

  return (
    <div className="app">
      <header className="header">
        <h1>Tienda Online La Casa del Chullo</h1>
        <select onChange={(e) => setFiltro(e.target.value)} value={filtro}>
          <option value="Todos">Todos</option>
          <option value="Accesorios">Accesorios</option>
          <option value="Ropa">Ropa</option>
          <option value="Decoración">Decoración</option>
        </select>
      </header>

      <div className="contenido-principal">
        <main className="productos-grid">
          <AnimatePresence>
            {productosFiltrados.map((producto) => (
              <motion.div
                className="producto-card"
                key={producto.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.3 }}
              >
                <img src={producto.imagen} alt={producto.nombre} />
                <Link to={`/tienda/${producto.id}`} className="enlace-producto">
                  {producto.nombre}
                </Link>
                <p>S/ {producto.precio}</p>
                <div className="botones-producto">
                  <motion.button onClick={() => agregarAlCarrito(producto)}>
                    Agregar al carrito
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </main>

        <aside className="carrito">
          <h2>Carrito</h2>
          {carrito.length === 0 && <p>Tu carrito está vacío.</p>}
          <AnimatePresence>
            {carrito.map((item, index) => (
              <motion.div
                key={index}
                className="carrito-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.2 }}
              >
                {item.nombre} - S/ {item.precio}
                <button onClick={() => eliminarDelCarrito(index)} className="eliminar">X</button>
              </motion.div>
            ))}
          </AnimatePresence>
          {carrito.length > 0 && (
                <div className="carrito-total">
                <p>Total: S/ {calcularTotal()}</p>
                <button className="pagar" onClick={() => setMostrarModal(true)}>Pagar</button>
                </div>
            )}
        </aside>
      </div>
      {mostrarModal && (
      <motion.div
        className="modal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setMostrarModal(false)}
      >
        <motion.div
          className="modal-contenido"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
          onClick={(e) => e.stopPropagation()}
        >
          <FormularioPago total={calcularTotal()} />
          <button onClick={() => setMostrarModal(false)} className="cerrar">
            Cancelar
          </button>
        </motion.div>
      </motion.div>
    )}
    </div>
  );
}

export default App;