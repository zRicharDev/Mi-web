import React from 'react';

import './Contact.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Logo from '../img/Logo-Dapps-Negro.png';

function Contact() {
  return (
    <body className="Contact">
       
       <form action="">
      
                        <h1>Contáctanos</h1>
    
  <div className="Contenedor">
                    <div className ="Info">
                    <p> Av. República de Panamá 257 – Barranco, Lima<br/><br/>
                        Whatsapp: 940113661 – Teléfono: 017612980<br/><br/>
                        informes@dapps.pe<br/><br/>
                        Horario de Atención: Lunes a Sábado 9am a 9pm</p>
                        <img className="logo-dapps" src={Logo} height="100px" />
                        </div>
                
                
                
                <div class="form" className="Contacto">
                   
                        <div class="grupo">
                            <input type="text" name="" id="" required/><span class="barra"></span>
                            <label>Ruc</label>
                        </div>
            <           div class="grupo">
                            <input type="text" name="" id="" required/><span class="barra"></span>
                            <label>Nombre</label>
                        </div>
                        <div class="grupo">
                            <input type="text" name="" id="" required/><span class="barra"></span>
                            <label>Teléfono</label>
                         </div>
                        <div class="grupo">
                            <input type="text" name="" id="" required/><span class="barra"></span>
                            <label>Correo</label>
                        </div>
                        <div class="grupo">
                            <textarea name="" id="" rows="3" required></textarea><span class="barra"></span>
                            <label>Mensaje</label>
                        </div>
                        <button type="submit">Solicitar licencia</button>
                </div>
                </div>
            </form>
            
    </body>
  );
}

export default Contact;
