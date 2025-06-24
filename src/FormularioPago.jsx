import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const FormularioPago = ({ total }) => {
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost/Server-PaymentForm-Php-main/formtoken', {
        orderId: `ORD-${Date.now()}`,
        amount: total,
        currency: 'PEN',
      });
      navigate('/pagosizipay', { state: response.data });
    } catch (error) {
      console.error('Error al procesar el pago:', error);
    }
  };

  return (
    <div className="payment-container">
      <div className="payment-card">
        <div className="payment-header">
          <h2 className="payment-title">Confirmación de Pago</h2>
          <div className="payment-total">
            <span>Total a pagar:</span>
            <span className="payment-amount">S/ {total.toFixed(2)}</span>
          </div>
        </div>

        <div className="payment-methods">
          <div className="method-icons">
            <img src="https://cdn-icons-png.flaticon.com/512/196/196578.png" alt="Visa" />
            <img src="https://cdn-icons-png.flaticon.com/512/196/196561.png" alt="Mastercard" />
            <img src="https://cdn-icons-png.flaticon.com/512/196/196565.png" alt="American Express" />
          </div>
        </div>

        <button 
          onClick={handleSubmit} 
          className="payment-button"
        >
          <span>Pagar con tarjeta</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>

        <div className="payment-security">
          <div className="security-badge">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <span>Pago seguro con Izipay</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormularioPago;