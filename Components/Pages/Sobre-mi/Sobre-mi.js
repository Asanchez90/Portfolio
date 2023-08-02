import "./Sobre-mi.css"

export const SobreMi = () => {
    const main = document.querySelector("main");
    main.innerHTML =     
    `
    <section class="personal-link">
    <div>
      
        <h2>Hola 👋🏻 Soy <span>una persona especial</span> </h2> 
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
      
    </div>
 
  </section>
    
    `;
  };
  
  const template = SobreMi();
  