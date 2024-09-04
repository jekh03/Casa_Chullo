import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function Formulario() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [codigoPais, obtenerCodigoPais] = useState("+51");
  const [numTelefono, obtenerNumTelefono] = useState("");

  const guardarCodigoPais = (event) => {
    obtenerCodigoPais(event.target.value);
  }

  const guardarNumTelefono = (event) => {
    const valorIngresado = event.traget.value;

    if (/^\d*$/.test(inputValue)) {
      setPhoneNumber(inputValue);
    }
  }

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
      <h2>Haz tu Reserva</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='datos'>
          <label htmlFor="nombre">Nombre:</label>
          <input
            id="nombre"
            style={{textTransform: "uppercase"}}
            min='2'
            {...register('nombre', { required: true })}
          />
          {errors.nombre && <span>El nombre es obligatorio</span>}
        </div>

        <div className='datos'>
          <label htmlFor="apellido">Apellido:</label>
          <input
            id="apellido"
            style={{textTransform: "uppercase"}}
            {...register('apellido', { required: true })}
          />
          {errors.apellido && <span>El apellido es obligatorio</span>}
        </div>

        <div className='datos'>
          <label htmlFor="">Número de celular: </label>
          <select name="codigo" id="">
            <option value="+1">+1 USA</option>
            <option value="+51">+51 PE</option>
            <option value="+34">+34 ES</option>
            <option value="+52">+52 MX</option>
            <option value="+54">+54 AR</option>
            <option value="+56">+56 CH</option>
            <option value="+57">+57 CO</option>
            <option value="+55">+55 BR</option>
            <option value="+593">+593 EC</option>
            <option value="+33">+33 FR</option>
            <option value="+351">+351 PT</option>
            <option value="+">otro</option>
          </select>
          <label htmlFor="celular"></label>
          <input
            id="celular"
            {...register('celular', { required: true })}
          />
          {errors.celular && <span>El número de celular es obligatorio</span>}
        </div>

        <div className='datos'>
          <label htmlFor="num_pasajeros">Número de Pasajeros:</label>
          <input
            id="num_pasajeros"
            type="number"
            max='12'
            {...register('num_pasajeros', { required: true, min: 1 })}
          />
          {errors.num_pasajeros && <span>El número de pasajeros es obligatorio y debe ser mayor a 0</span>}
        </div>

        <div className='datos'>
          <label htmlFor="fecha_reserva">Fecha de Reserva:</label>
          <input
            id="fecha_reserva"
            type="date"
            {...register('fecha_reserva', { required: true })}
          />
          {errors.fecha_reserva && <span>La fecha de reserva es obligatoria</span>}
        </div>

        <div className='datos'>
          <label htmlFor="hora_reserva">Hora de reserva:</label>
          <input 
            id="hora_reserva"
            type="time"
            {...register('hora_reserva',{required: true})}
          />
          {errors.hora_reserva && <span>La hora de reserva es incorrecta</span>}
        </div>

        <div className='datos'>
          <fieldset>
            <legend>¿Qué servicios se le ofrece?</legend>
            <label>
              <input
                name="Servicio[]"
                type="checkbox"
                value="taller_textil"
                {...register('servicio', {required:true})}
              />Taller Textil
            </label>
            <label>
              <input 
                name="Servicio[]"
                type="checkbox" 
                value="taller_cocina"
                {...register('servicio', {required:true})}
              />Taller de cocina
            </label>
            <label>
              <input 
                name="Servicio[]"
                type="checkbox" 
                value="traiking"
                {...register('servicio', {required:true})}
              />Traiking
            </label>
            <label>
              <input 
                name="Servicio[]"
                type="checkbox" 
                value="hospedaje"
                {...register('servicio', {required:true})}
              />Hospedaje
            </label>
            <label>
              <input 
                name="Servicio[]"
                type="checkbox" 
                value="picnic"
                {...register('servicio', {required:true})}
              />Picnic
            </label>
            {errors.servicio && <span>seleccione una obcion</span>}

          </fieldset>
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Formulario;
