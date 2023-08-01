import "./Sobre-mi.css"

export const SobreMi = () => {
    const main = document.querySelector("main");
    main.innerHTML =     
    `
    <section class="personal-link">
    <div>
      
        <h2>Hola 👋🏻 Soy <span>una persona especial</span> </h2> 
        
      
    </div>
 
  </section>
    
    `;
  };
  
  const template = SobreMi();
  