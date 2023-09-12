import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Enviar correo electrónico al destinatario
    emailjs.send('service_zqgnx7s', 'template_uviobia', {
      to_email: formData.email, // Correo del destinatario
      message: formData.message, // Contenido del mensaje
    }, 'tu_usuario_id')
      .then((response) => {
        console.log('Correo enviado al destinatario correctamente', response);

        // Enviar correo electrónico "no-reply" al remitente
        emailjs.send('tu_servicio_id', 'nombre_de_tu_plantilla_no_reply', {
          to_email: formData.email, // Correo del remitente
        }, 'tu_usuario_id')
          .then((response) => {
            console.log('Correo "no-reply" enviado correctamente al remitente', response);
          })
          .catch((error) => {
            console.error('Error al enviar el correo "no-reply" al remitente', error);
          });
      })
      .catch((error) => {
        console.error('Error al enviar el correo al destinatario', error);
      });

    // Limpia el formulario después del envío
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div>
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Mensaje:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default ContactForm;