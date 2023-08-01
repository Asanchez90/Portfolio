import "./Proyectos.css";
import { projectsData } from '../../Utils/Lista-Proyectos';
import { CardProyectos } from '../../Card-Proyectos/Card-Proyectos';

// export const Proyectos = () => {
//     const main = document.querySelector("main");
//     main.innerHTML =     
//     `  
//     <article class="container-proyect">

//     <h2>Hola 👋🏻 Soy <span>el primer proyecto</span> </h2> 
    
        

//         <p>soy una web.</p>
//         <p>soy una web2.</p>
//         <p>soy una web3.</p>
//         <img src="/public/meme.png" alt="" width="300px" height="300px">
      
   
 
//   </article>
    
//     `;
//   };
  

  

  
  




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
  