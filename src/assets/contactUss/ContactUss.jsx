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
        console.log(result.text);
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
        <label className='symbol-requiered name' htmlFor='username'>
          Name
        </label>
        <input name='username' type='text' placeholder='Rellene con el nombre' required />
      </fieldset>

      <fieldset className='field-enamil'>
        <label className='symbol-requiered' htmlFor='email'>
          Email
        </label>
        <input placeholder='tu_email@gmail.com' type='email' name='user_email'  required />
      </fieldset>

      <fieldset className='field-enamil'>
        <label className='symbol-requiered' htmlFor='reply_to'>
          Email de Contacto
        </label>
        <input
          placeholder='schuttvalentin@gmail.com' // Coloca aquí la dirección de correo a la que quieres enviar
          type='email'
          name='reply_to'
          id='reply_to'
          required
        />
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