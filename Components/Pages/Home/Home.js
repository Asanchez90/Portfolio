import "./Home.css"

export const Home = () => {
    const main = document.querySelector("main");
    main.innerHTML =     
    `
    <section class="home">
    <div>
      
        <h2>Hola 👋🏻 Soy <span>Alejandro Sánchez</span> </h2> 
        <p>Estudiante Full Stack Developer.</p>
        <p>Soy una persona que le gusta estar en constante movimiento, aprender nuevas tecnologías y reinventarme.</p>
      
    </div>
    <div>
      <img class ="avatar"src="./public/foto-avatar.jpeg" alt="yo-idiota">
    </div>
  </section>
    
    `;
  };
  
  const template = Home();
  