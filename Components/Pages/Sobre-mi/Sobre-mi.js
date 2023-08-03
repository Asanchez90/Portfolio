import './Sobre-mi.css';
import { infoPersonal } from '../../Utils/Informacion-personal';
import { CardPersonal } from '../../../Components/Card-Personal/Card-Personal';

export const SobreMi = () => {
  const main = document.querySelector('main');
  main.innerHTML = `
    <section class="personal-link">
    <section class="container">
        
        <h2 class="Tittle">Conoce un poco sobre mí</h2>
        <article class="container-personal">
       
          ${infoPersonal.map((el) => 
            {
              return CardPersonal(el.Foto, el.alt ,el.pregunta ,el.respuesta);
            }).join("")
          }
        </article>
        
        
        
        
    
 
  </section>
            
    `;
};

const template = SobreMi();

// ----------------------------------REVISAR  --------------------------------

{/* <div>
<p> Si quieres saber mas sobre mi, aqui te dejo mi CV</p>
    <button class="cv-personal">
        <a href="https://res.cloudinary.com/dcs7ntcz7/raw/upload/v1691062427/pdf/Plantilla-Europass_qe63gc.doc"> Descargar CV </a>
    </button>
  </div> */}

// ----------------------------------
{
  /* <ul>
<li>
  <a href="#">
    <img src="public/icons/github-color.png" alt" Github icon">
  </a>
</li>
<li>
  <a href="#">
    <img src="public/icons/linkedin-cuadrado.png" alt" Linkedin icon">
  </a>
</li>
<li>
  <a href="#">
    <img src="public/icons/gorjeo-cuadrado.png" alt" Twitter icon">
  </a>
</li>

</ul> */
}


