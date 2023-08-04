// import './Card-Proyectos.css';



export const CardProyectos = (
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
        
        <div class="card-img-main">
          <img class="img-project" src=${img} alt=${subtitulo} />
        </div>
        <p class="container-tech">
          Tecnologias usadas
        </p> 
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
        <h3>${titulo}</h3>
        <h4>${subtitulo}</h4>
        
        <div class="info-card">
          <p>${descripcion}</p>
        </div>       
        <div class="a-card"> 
          <a href=${link} target="_blank">
          <img class="link-icon" src="/public/icons/enlace-roto(1).png" alt="icon-link" />
          Live preview</a>
          
          <a href=${github} target="_blank">
          <img class="link-icon" src="/public/icons/lupa.png" alt="icon-github" />
          View code</a>
        </div>
      </div>
        

      </div>
    `;
};

//meter en la informacion de los proyectos - no por ahora
{
  /* <details>
  <summary>Leer información</summary>
  <p>${descripcion}</p>
</details>; */
}

