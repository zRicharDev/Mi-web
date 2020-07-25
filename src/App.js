import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Proceso from './img/proceso-continuar-con-actividades.png'
import Proceso2 from './img/proceso-ampliar-mi-negocio2.png'
import Logo from './img/Logo-Dapps.png';
import Contact from './Components/Contact.js'
import { Link, animateScroll as scroll } from "react-scroll";

function App() {


  

  return (
    <html>
      
    <div>
   <header>
     <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
              <div class="container-fluid" >
               
              <img className="Logo" src={Logo} height="50px"   />
                <button type="button" class="navbar-toggler" 
                data-toggle="collapse" data-target="#navbarCollapse">
                  <span class="navbar-toggler-icon"/>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav" style={{paddingLeft:'30%'}}>
                       <a href="#" class="nav-item nav-link">Inicio</a>
                       <Link
    activeClass="active"
    to="Contactanos"
    spy={true}
    smooth={true}
    offset={-50}
    duration= {500}
> <a  href="#Contactanos" class="nav-item nav-link">Contactanos</a></Link>
                      
                    </div>
                </div>
              </div>    
          </nav>
    </header>
    

    <body>
      

    <div className='Cuerpo'>
        <section className='Cuerpo-Primero'>
            <h2 className="titulo-1" >Licencia de Funcionamiento Online </h2>
              
              <section className="Cuerpo-Primero-parrafo">
                    <p>
                      La Municipalidad de Chorrillos se adapta a los cambios tecnológicos añadiendo un 
                      canal de atención netamente virtual. De este modo podrán realizar trámites desde 
                      la comodidad de sus hogares y así poder frenar la ola de contagios del COVID-19. 
                      El cambio vigente permitirá solicitar licencias de funcionamiento para reaperturar 
                      o ampliar tu negocio.</p>
                    <p>Para ello tenemos dos tipos de procedimientos:</p>
              </section>


              <section className="Cuerpo-Primero-Botones"  >  
             
              <section className="boton" >
                <button style={{backgroundColor:'tomato'}}>CONTINUO CON <br/> MIS ACTIVIDADES</button>
              </section>
              <section className="boton" >
              <button style={{backgroundColor:'#63D355'}}>AMPLIO MI NEGOCIO</button>
              </section>
              <section className="boton" >
              <button style={{backgroundColor:'#FF3361'}}>QUIERO OBTENER <br/>UNA NUEVA LICENCIA</button>
              </section>
          </section>
          </section>

        <section className='Cuerpo-Segundo'>
          <h3 className="titulo-2">
            Quiero Continuar con mis actividades comerciales (reinciar mi laburo) 
          </h3>
          <img alt="proceso continuar con actividades" src={Proceso}  class="align-center"/> 
          <section  className="Cuerpo-Segundo-parrafo">
            <a>(1) Solicitar el certificado emitido por PRODUCE Y MINSA</a><br/>
            <a>(2) Presentar documentación a la Municipalidad (vía web)</a>
          </section >
        </section>

        <section className='Cuerpo-Tercero'> 
            <h3 className="titulo-3">
           Quiero ampliar mi negocio (Solo válido para locales con riesgo bajo y medio) en base al Decreto Supremo N° 009-2020-PRODUCE
            </h3>
          
             <img  src={Proceso2}  class="align-center"/> 
        

            <section  className="Cuerpo-tercero-parrafo">
              <a>(1) Verifico lista de actividades adicionales.</a> <br/>
              <a>(2) Relleno los formatos de declaración jurada.</a><br/>
              <a>(3) Presentar documentación a la Municipalidad (vía web)</a>
            </section>
         </section> 

         <section className='Cuerpo-Cuarto'> 
            <h3 className="titulo-4">
            <strong>Quiero una nueva licencia (Solo trámite de riesgo bajo y medio)</strong>
            </h3>
            <section  className="Cuerpo-Cuarto-parrafo">
            <p>Vecino chorrillano, si desea aperturar un nuevo negocio, recuerda que debes mantener todos los papeles bajo normativa para evitar posibles sanciones.</p>
            </section>
            <section className="Cuerpo-Cuarto-Botones">

            <section className="boton" >
                <button style={{backgroundColor:'tomato'}}>RELLENAR DECLARACIÓN JUHARA DE LICENCIA <br/>DE FUNCIONAMIENTO</button>
              </section>
              <section className="boton" >
              <button style={{backgroundColor:'#63D355'}}>RELLENAR DECLARACION JURADA DE LAS<br/> CONDICIONES DE SEGURIDAD EN LA EDIFICACIÓN</button>
              </section>
              <section className="boton" >
              <button style={{backgroundColor:'#FF3361'}}>ENVÍAR LAS DECLARACIONES JURADAS <br/>A LA MUNICIPALIDAD</button>
              </section>
              </section>
            
        </section>
         <section  className="Cuerpo-Quinto" >
           <a name="Contactanos">
        <Contact/>
        </a>
        </section> 
        
    </div>
    </body>

    <footer  >
        
        </footer> 

   
    </div>
    </html>
  );
}

export default App;
