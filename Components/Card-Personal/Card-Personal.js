import './Card-personal.css';

export const CardPersonal = (Foto, alt, pregunta, respuesta) => {
  return `
    <div class="card-personal">
        <div class="foto-card-div">
        <img class="foto-card-personal" src=${Foto} alt=${alt} />
        </div>
        <div class="info-texto">
        <p class="pregunta">${pregunta}</p>
        <p class="respuesta">${respuesta}</p>
        </div>
        <hr>
    </div>
    <div>
           
    `;
};
