import './Sobre-mi.css';
import { infoPersonal } from '../../Utils/Informacion-personal';
import { CardPersonal } from '../../../Components/Card-Personal/Card-Personal';

export const SobreMi = () => {
  const main = document.querySelector('main');
  main.innerHTML = `
    <section class="personal-link">
    <section class="container">
        
        <h2 class="Tittle">Conoceme un poco </h2>
        <article class="container-personal">
       
          ${infoPersonal
            .map((el) => {
              return CardPersonal(el.Foto, el.alt, el.pregunta, el.respuesta);
            })
            .join('')}
        </article>
  <article class="mas-info">      
    <div class="info-cv">
      <p> Si quieres saber mas sobre mi, aqui te dejo mi CV</p>
      <button class="cv-personal">
          <a href="https://res.cloudinary.com/dcs7ntcz7/raw/upload/v1691143697/pdf/CV_Alejandro_qpyt4l.pages"> Descargar CV </a>
      </button>
    </div> 

   

  </section>
            
    `;
};

const template = SobreMi();

// ----------------------------------REVISAR  --------------------------------


