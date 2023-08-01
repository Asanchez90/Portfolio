import './Card-Proyectos.css';

// import { tech } from "../../utils/projects-data";

export const Card_Proyectos = (
  img,
  titulo,
  subtitulo,
  descripcion,
  tecnologia,
  link,
  github
) => {
  return `
    <div class="card-project">
        
        <div class="card-left">
            
                <img class="img-project" src=${img} alt=${subtitulo} />

                <a href=${link} target="_blank">
                    <img class="link-icon" src="/icons/link.png" alt="icon-link" />
                Live preview</a>

                <a href=${github} target="_blank">
                    <img class="link-icon" src="/icons/github-movil.png" alt="icon-github" />
                View code</a>

                <div class="container-tech">
                    ${tecnologia
                      .map(
                        (el) =>
                          `<img class="icon-tech" src=${el} alt="icon-tech" />`
                      )
                      .join(' ')}
                </div>

        </div>

        <div class="card-right">
            <h5>${titulo}</h5>
            <h6>${subtitulo}</h6>
            <hr>
            <button class="info-project">Leer información</button>
            <p>${descripcion}</p>
            
        </div>

    </div>
    `;
};

//meter en la informacion de los proyectos
{/* <details>
  <summary>Leer información</summary>
  <p>${descripcion}</p>
</details>; */}
