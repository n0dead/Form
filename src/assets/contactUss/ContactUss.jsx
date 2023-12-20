import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import  { useState, useEffect} from 'react'
import {getFirestore, collection, addDoc  } from 'firebase/firestore'
import { FirebaseApp } from '../credenciales/Credenciales'
import '../contactUss/ContactUss.css'

const db = getFirestore(FirebaseApp);

export const ContactUss = () => {
  const refForm = useRef();



  // creando el objeto 
  const valorInicial = { 
username:'',
localidad:'',
telefono:'',
user_email:'',
message:''

  }

  const [user, setUser] = useState(valorInicial);

  const capturarImputs = (e) =>{
   

    const {name, value } = e.target;

    setUser({...user, [name]:value})
    

    
  };



  const handleSubmit = async(e) => {
    e.preventDefault(); // prevenir por default el evento del formulario 
   
    // utilizando try catch como dice la ducumentacion de firebase para poder agregar un documento a la base de datos
    try {
  await addDoc(collection(db,'Formulario'),{
     ...user
    })




    // vinculado con emailJS como dice su documentacion 
    const serviceId ="service_puh54hc";
    const templatesID = "template_pgwrl29";
    
    const apikey = "wCvphfNNy1Efv2MOQ";
    

    emailjs.sendForm(serviceId, templatesID, refForm.current, apikey)
      .then((result) => {
        alert('Mensaje enviado Correctamente')
      })
      .catch((error) => {
        console.error(error);
      });
     e.target.reset();
   } catch (error) {
    console.log(error);
   }
  
   setUser({...valorInicial})
  
};




  return (
    <form ref={refForm} onSubmit={handleSubmit}>
    
      <fieldset className='field-name'>
        <label className='symbol-requiered ' htmlFor='username'>
          Nombre y Apellido
        </label>
        <input  placeholder='    Rellene con el nombre' name='username' type='text' value={user.username} onChange={capturarImputs}  required />
      </fieldset>

      
      <fieldset className='field-enamil'>
        <label className='symbol-requiered' htmlFor='email'>
          Email
        </label>
        <input placeholder='    Tu_email@gmail.com' type='email' name='user_email' value={user.user_email} onChange={capturarImputs}   required />
      </fieldset>

      
  <div className='grid-form'>

  <fieldset className='field-name'>
        <label className='symbol-requiered name' htmlFor='telefono'>
      Teléfono
        </label>
        <input className='telefono' name='telefono' type='number' placeholder='    Rellene con su telefono' value={user.telefono} onChange={capturarImputs}  required />
      </fieldset>


      <fieldset className='field-name'>
        <label className='symbol-requiered-name' htmlFor='localidad'>
        Provincia
        </label>
       
        <select htmlFor='localidad' name ='localidad' value={user.localidad} onChange={capturarImputs} >
        <option  htmlFor='localidad'name ='localidad' value="" required>Seleccionar</option>
        <option   htmlFor='localidad'name ='localidad' value="Buenos Aires" required>Buenos Aires</option>
          <option   htmlFor='localidad'name ='localidad' value="Entre Rios" required>Entre Rios</option>
          <option   htmlFor='localidad'name ='localidad' value="Cordoba" required>Cordoba</option>
          <option   htmlFor='localidad'name ='localidad' value="Catamarca" required>Catamarca</option>
          <option   htmlFor='localidad'name ='localidad' value="Chaco" required>Chaco</option>
          <option   htmlFor='localidad'name ='localidad' value="Chubut" required>Chubut</option>
          <option   htmlFor='localidad'name ='localidad' value="Corrientes" required>Corrientes</option>
          <option   htmlFor='localidad'name ='localidad' value="Formosa" required>Formosa</option>
          <option   htmlFor='localidad'name ='localidad' value="Jujuy" required>Jujuy</option>
          <option   htmlFor='localidad'name ='localidad' value="La Pampa" required>La Pampa</option>
          <option   htmlFor='localidad'name ='localidad' value="La Rioja" required>La Rioja</option>
          <option   htmlFor='localidad'name ='localidad' value="Mendoza" required>Mendoza</option>
          <option   htmlFor='localidad'name ='localidad' value="Misiones" required>Misiones</option>
          <option   htmlFor='localidad'name ='localidad' value="Neuquén" required>Neuquén</option>
          <option   htmlFor='localidad'name ='localidad' value="Río Negro" required>Río Negro</option>
          <option   htmlFor='localidad'name ='localidad' value="Salta" required>Salta</option>
          <option   htmlFor='localidad'name ='localidad' value="San Juan" required>San Juan</option>
          <option   htmlFor='localidad'name ='localidad' value="San Luis" required>San Luis</option>
          <option   htmlFor='localidad'name ='localidad' value="Santa Cruz" required>Santa Cruz</option>
          <option   htmlFor='localidad'name ='localidad' value="Santa Fe" required>Santa Fe</option>
          <option   htmlFor='localidad'name ='localidad' value="Santiago del Estero" required>Santiango del Estero</option>
          <option   htmlFor='localidad'name ='localidad' value="Tierra Del Fuego" required>Tierra Del Fuego</option>
          <option   htmlFor='localidad'name ='localidad' value="Tucuman" required>Tucuman</option>
        </select>
      </fieldset>

  </div>

{/*

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
  </fieldset>*/}
    
      {/* <fieldset className='field-name'>
        <label className='symbol-requiered name' htmlFor='matricula'>
      Matricula
        </label>
        <input name='matricula' type='text' placeholder='Ingrese su matricula' required />
      </fieldset>  */}




      <fieldset className='message'>
        <label className='symbol'> Consulta</label>
        <textarea maxLength='500' placeholder='   Escribe tu mensaje' name='message' id='message' cols='30' rows='10'value={user.message} onChange={capturarImputs}></textarea>
      </fieldset>
      <button className='send' type='submit' >
       Enviar
      </button>
    </form>
  );
};