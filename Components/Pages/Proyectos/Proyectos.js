import "./Proyectos.css";
import { projectsData } from '../../Utils/Lista-Proyectos';
import { CardProyectos } from '../../Card-Proyectos/Card-Proyectos';


//Esta funcion es la que sirve.
export const Project = () => {
    const main = document.querySelector("main");
    main.innerHTML = `
    <section class="container">
        <h4>Proyectos</h4>
        <article class="container-project">
        ${projectsData.map((el) => 
          {
            return CardProyectos(el.img, el.titulo, el.subtitulo, el.descripcion, el.tecnologia, el.link, el.github);
          }).join("")
        }
        </article>
    </section>
    `
};
const template = Project();
  