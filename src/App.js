import logo from './logo.png';
import background from "./background.jpg";
import pcicons from './img/system-network-svgrepo-com.png';
import soportestaff from "./img/support-svgrepo-com-300x300.png";
import forum from "./img/forum-message-svgrepo-com-300x300.png";
import mac from "./img/apple-mac.jpg"
import yo from "./img/PortadaHW-940x1024.png"
import './App.css';
import styled, { keyframes } from 'styled-components';

export function Fondo() {
    return (
        <div style={{
            backgroundImage: `url(${background})`,
            backgroundSize: '100% auto',
            backgroundPositionY: '57%',
            opacity: (0.7),
            height: '100%',
            width: '100%',
            zIndex: -10,
            position: 'absolute',
            backgroundRepeat: "no-repeat"
        }}>
        </div>
    );
}

function App() {
  return (
    <div className="App">
      <nav className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul className="mainnav">
          <li>INICIO</li>
          <li>BLOG</li>
          <li>CONTACTO</li>
          <li className="boton">MAS</li>
          <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="16">
              <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
          </svg></li>
        </ul>
      </nav>
    </div>
  );
}

export default App;

const pulse = keyframes`
  0% {
    opacity: 0.85;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.85;
  }
`;

const BrightText = styled.h1`
//  text-stroke: 1px black;
//  -webkit-text-stroke: 1px black;
  text-shadow: 0 0 10px #000, 0 0 2px #fff, 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #fff;
  animation: ${pulse} 1.5s ease-in-out infinite;
`;

export function Title() {
    return (
        <div className="titulo">
            <BrightText>Hardware Actual</BrightText>
            <span>Innovando Siempre</span>
            <span className="button">CONOCE MAS</span>
        </div>
    );
}

export function Cuerpo() {
    return (
        <div className="cuerpo">
            <h1>Nuestros servicios son</h1>
            <div className="contenedor">
            <div>
                <img src={pcicons} alt="pcicons"/>
                <span>Infraestructura de red</span>
                <p>
                    Te apoyamos con el despliege e implementacion de infraestructuras de red pequeñas o medianas. realizar la planeacion, cotizacion de equipos y configuracion.
                </p>
            </div>
            <div>
                <img src={forum} alt="forum"/>
                <span>Asesoria</span>
                <p>
                    Brindamos apoyo y asesoria en cuanto a equipo, herramientas de software o redes que desees adquirir para tu casa o negocio.
                </p>
                </div>
            <div>
                <img src={soportestaff} alt="soportestaff"/>
                <span>Soporte Tecnico</span>
                <p>
                    Brindamos soporte tecnico para inconvenientes con equipos de Computo(Laptop, Desktop, Ultrabook, MacBook) con respecto a fallas tanto de sistema como de hardware adicionalmente a equipos de redes como routers, repetidores, etc.
                </p>
            </div>
            </div>
        </div>
    );
}

export function Aboutme() {
    return (
      <div className="aboutme">
          <div style={{
              backgroundImage: `url(${mac})`,
              backgroundSize: '100% auto',
              backgroundPositionY: '57%',
              opacity: (0.3),
              height: '100%',
              width: '100%',
              zIndex: -10,
              position: 'absolute'
          }}>
          </div>
          <div className="acercademi">
              <h1>
                  Acerca de mi
              </h1>
              <p>
                  Mi nombre es Omar Vilera, me dedico desde hace aproximadamente 9 años al rubro tecnológico, cuento con habilidades y conocimientos sobre el hardware y software de equipos computo en general.
              </p>
              <p>
                  Actualmente me encuentro estudiando la carrera técnica de “Administración de redes y comunicaciones”.
              </p>
              <p>
                  Esta página nace como iniciativa de brindar servicios sobre lo que amo hacer. Ofreciendo un servicio de calidad y confiable buscando resolver cualquier problemática que se le presente al cliente.
              </p>
          </div>
          <div className="yo">
              <img src={yo} alt="yo"/>
          </div>

      </div>
    );
}