import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import { useForm } from 'react-hook-form';

function Formulario() {
  
  const {t} = useTranslation();
  /*
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('/api/submit.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('Formulario enviado con éxito!');
      } else {
        alert('Hubo un problema al enviar el formulario.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error en la conexión.');
    }
  };

  return (
    <div className="App">
      <h2>{t("reserva.titulo")}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='datos'>
          <label htmlFor="nombre">{t("reserva.nombre")}:</label>
          <input
            id="nombre"
            style={{textTransform: "uppercase"}}
            min='2'
            {...register('nombre', { required: true })}
          />
          {errors.nombre && <span>{t("el")} {t("reserva.nombre")} {t("reserva.obligatorio")}</span>}
        </div>

        <div className='datos'>
          <label htmlFor="apellido">{t("reserva.apellido")}:</label>
          <input
            id="apellido"
            style={{textTransform: "uppercase"}}
            {...register('apellido', { required: true })}
          />
          {errors.apellido && <span>{t("el")} {t("reserva.apellido")} {t("reserva.obligatorio")}</span>}
        </div>
        
        <div className='datos'>
          <label htmlFor="codigoPais">{t("reserva.cod_pais")}: </label>
          <select 
            id="codigoPais" 
            {...register('codigoPais', { required: true })} // Deja que React Hook Form maneje el valor
          >
            <option value="+1">USA +1</option>
            <option value="+51">PERU +51</option>
            <option value="+34">ESPAÑA +34</option>
            <option value="+52">MEXICO +52</option>
            <option value="+54">ARGENTINA +54</option>
            <option value="+56">CHILE +56</option>
            <option value="+57">COLOMBIA +57</option>
            <option value="+55">BRAZIL +55</option>
            <option value="+593">ECUADOR +593</option>
            <option value="+33">FRANCIA +33</option>
            <option value="+351">PORTUGAL +351</option>
            <option value="+">otro</option>
          </select>
          {errors.codigoPais && <span>{t("reserva.cod_pais")} {t("reserva.obligatorio")}</span>}
        </div>

        <div className='datos'>
          <label htmlFor="celular">{t("reserva.numero")}:</label>
          <input
            id="celular"
            minLength={7}
            placeholder='Ingrese numero de telefono'
            {...register('celular', { required: true, pattern: /^\d+$/ })} // Usar expresión regular para solo números
          />
          {errors.celular && <span>{t("el")} {t("reserva.numero")} {t("reserva.obligatorio")}</span>}
        </div>

        <div className='datos'>
          <label htmlFor="num_pasajeros">{t("reserva.num_pasajero")}:</label>
          <input
            id="num_pasajeros"
            type="number"
            max='12'
            min='1'
            {...register('num_pasajeros', { required: true, min: 1 })}
          />
          {errors.num_pasajeros && <span>{t("el")} {t("reserva.num_pasajero")} {t("reserva.obligatorio")}</span>}
        </div>

        <div className='datos'>
          <label htmlFor="fecha_reserva">{t("reserva.fecha")}:</label>
          <input
            id="fecha_reserva"
            type="date"
            {...register('fecha_reserva', { required: true })}
          />
          {errors.fecha_reserva && <span>{t("reserva.fecha")} {t("reserva.obligatorio")}</span>}
        </div>

        <div className='datos'>
          <label htmlFor="hora_reserva">{t("reserva.Hora")}:</label>
          <input 
            id="hora_reserva"
            type="time"
            {...register('hora_reserva', { required: true })}
          />
          {errors.hora_reserva && <span>{t("reserva.Hora")} {t("reserva.obligatorio")}</span>}
        </div>

        <div className='datos'>
          <fieldset>
            <legend>{t("reserva.servicios")}</legend>
            <label>
              <input
                name="Servicio[]"
                type="checkbox"
                value="taller_textil"
                {...register('servicio', { required: true })}
              />{t("Ofrecemos.Taller_textil")}
            </label>
            <label>
              <input 
                name="Servicio[]"
                type="checkbox" 
                value="taller_cocina"
                {...register('servicio', { required: true })}
              />{t("Ofrecemos.Taller_cocina")}
            </label>
            <label>
              <input 
                name="Servicio[]"
                type="checkbox" 
                value="traiking"
                {...register('servicio', { required: true })}
              />LLAMA TRACKING
            </label>
            <label>
              <input 
                name="Servicio[]"
                type="checkbox" 
                value="hospedaje"
                {...register('servicio', { required: true })}
              />{t("Ofrecemos.Hospedaje")}
            </label>
            <label>
              <input 
                name="Servicio[]"
                type="checkbox" 
                value="picnic"
                {...register('servicio', { required: true })}
              />{t("Ofrecemos.Pago")}
            </label>
            {errors.servicio && <span>{t("reserva.seleccione")}</span>}
          </fieldset>
        </div>

        <button type="submit">{t("Enviar")}</button>
      </form>
    </div>
  );*/
  
  return (
    <div className="formulario">
      {/* <Formulario></Formulario> */}
      
      <a
        href="https://wa.me/+51926407674?text=Hola%20me%20gustaría%20saber%20más%20sobre%20tus%20servicios"
        className="whatsapp-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t("reserva.Realiza_reserva")}
        <svg
          className='whatsapp'
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
        >
          <style>
            {`@keyframes chatMotion3 {
              0%, to { transform: translateY(0); }
              50% { transform: translateY(-1px); }
            }`}
          </style>
          <path
            fill="#0A0A30"
            fillRule="evenodd"
            d="M12.121 6.74a5.25 5.25 0 00-4.414 8.093l.177.274-1.057 1.986 2.244-.82.256.162A5.25 5.25 0 1012.12 6.74zm-6.75 5.25a6.75 6.75 0 113.422 5.874l-2.52.876a.95.95 0 01-1.115-1.162l1.115-2.216a6.722 6.722 0 01-.902-3.372z"
            clipRule="evenodd"
          />
          <circle
            cx="9"
            cy="12"
            r="1"
            fill="#265BFF"
            style={{
              animation: "chatMotion3 .8s ease-in-out infinite",
            }}
          />
          <circle
            cx="12"
            cy="12"
            r="1"
            fill="#265BFF"
            style={{
              animation: "chatMotion3 .8s ease-in-out infinite",
              animationDelay: ".3s",
            }}
          />
          <circle
            cx="15"
            cy="12"
            r="1"
            fill="#265BFF"
            style={{
              animation: "chatMotion3 .8s ease-in-out infinite",
              animationDelay: ".5s",
            }}
          />
        </svg>
      </a>
    </div>
  );
}

export default Formulario;
