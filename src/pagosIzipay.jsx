import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import KRGlue from '@lyracom/embedded-form-glue';
import axios from "axios";
import './PagosIzipay.css';

const PagoIzipay = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { formToken, publicKey } = location.state || {}; 

  useEffect(() => {
    //Endpoint de izipay
    let endpoint = "https://static.micuentaweb.pe";

    //Configurar libreria con los datos recibidos de su servidor
    KRGlue.loadLibrary(endpoint, publicKey).then(({ KR }) => {
        KR.setFormConfig({
            formToken: formToken,
            'kr-language': 'es-ES',
            'kr-payment-method': 'card',
        });

        //Incrustar la pasarela
        KR.attachForm('#micuentawebstd_rest_wrapper').then(({ KR, result }) => {
          KR.showForm(result.formId);
        });

        //Al recibir la respuesta enviar a su servidor a validar los datos
        KR.onSubmit( paymentData => {
          axios.post('http://localhost/Server-PaymentForm-Php-main/validate', {
            'kr-answer': paymentData.rawClientAnswer,
            'kr-hash': paymentData.hash,
          })
          .then(response => {
              if (response.data === true) {
                navigate('/result', { state: paymentData.clientAnswer });
              }
          })
          return false;
        });
    })
  }, []);

  return (
    <section className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="center-column col-md-6">
          <section className="payment-form">
            <div className="row">
              <img
                src="https://github.com/izipay-pe/Imagenes/blob/main/logo_tarjetas_aceptadas/logo-tarjetas-aceptadas-351x42.png?raw=true"
                alt="Tarjetas aceptadas"
                style={{ width: '200px' }}
              />
            </div>
            <hr />
            <div id="micuentawebstd_rest_wrapper">
              <div className="kr-embedded"></div>
            </div>
          </section>
        </div>
        <div className="col-md-3"></div>
      </div>
    </section>
  );
};

export default PagoIzipay;
