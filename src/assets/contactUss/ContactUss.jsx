import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'


export const ContactUss = () => {
  const refForm = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(refForm.current);
    const serviceId ="service_zqgnx7s";
    const templatesID = "template_uviobia";
    
    const apikey = "3Snu28qrHG0pNlLwv";

    emailjs.sendForm(serviceId, templatesID, refForm.current, apikey)
      .then((result) => {
        alert('Mensaje enviado Correctamente')
      })
      .catch((error) => {
        console.error(error);
      });
     e.target.reset();
  };

  return (
    <form ref={refForm} onSubmit={handleSubmit}>
      <div className='header-contact'>
        <h2>Contactanos</h2>
        <p>Complete el formulario</p>
      </div>

      
      <fieldset className='field-name'>
        <label className='symbol-requiered name' htmlFor='opcion'>
          Seleccione Una Opcion
        </label>
        <select htmlFor='opcion' name ='opcion' >
        <option   htmlFor='opcion'name ='opcion' value="" required></option>
        <option   htmlFor='opcion'name ='opcion' value="Empresa 1" required>Empresa 1</option>
          <option   htmlFor='opcion'name ='opcion' value="Empresa 2" required>Empresa 2</option>
          <option   htmlFor='opcion'name ='opcion' value="Empresa 2" required>Empresa 3</option>
          <option   htmlFor='opcion'name ='opcion' value="Empresa 2" required>Empresa 4</option>
          <option   htmlFor='opcion'name ='opcion' value="Empresa 2" required>Empresa 5</option>
          <option   htmlFor='opcion'name ='opcion' value="Empresa 2" required>Interes por 2 o mas</option>
        </select>
      </fieldset>


      <fieldset className='field-name'>
        <label className='symbol-requiered name' htmlFor='username'>
          Name
        </label>
        <input name='username' type='text' placeholder='Rellene con el nombre' required />
      </fieldset>

      <fieldset className='field-name'>
        <label className='symbol-requiered name' htmlFor='provincia'>
        Provincia
        </label>
        <input name='provincia' type='text' placeholder='Rellene con su provincia' required />
      </fieldset>

      <fieldset className='field-name'>
        <label className='symbol-requiered name' htmlFor='localidad'>
          Localidad
        </label>
        <input name='localidad' type='text' placeholder='Rellene con su localidad' required />
      </fieldset>

      <fieldset className='field-name'>
        <label className='symbol-requiered name' htmlFor='telefono'>
      Telefono
        </label>
        <input name='telefono' type='text' placeholder='Rellene con su telefono' required />
      </fieldset>
      
      <fieldset className='field-name'>
        <label className='symbol-requiered name' htmlFor='matricula'>
      Matricula
        </label>
        <input name='matricula' type='text' placeholder='Rellene con su telefono' required />
      </fieldset>

      <fieldset className='field-enamil'>
        <label className='symbol-requiered' htmlFor='email'>
          Email
        </label>
        <input placeholder='tu_email@gmail.com' type='email' name='user_email'  required />
      </fieldset>



      <fieldset className='field-message'>
        <label className='symbol-requiered'>Message</label>
        <textarea maxLength='500' placeholder='Escribe tu mensaje' name='message' id='message' cols='30' rows='10'></textarea>
      </fieldset>
      <button className='btn-send' type='submit'>
        Send
      </button>
    </form>
  );
};