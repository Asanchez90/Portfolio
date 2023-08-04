import './Header.css';

export const Header = () => {
  return `

    <nav>
      <h2> <span>Alejandro Sánchez</span> </h2>
      
     

      <ul class="navbar">
        <li>
          <a href="#" id="home-link">Inicio</a>
        </li>
        <li>
          <a href="#" id="proyectos-link">Proyectos</a>
        </li>
        <li>
          <a href="#" id="personal-link">Sobre mi</a>
        </li>
        <li><button id="themeBtn">☀️</button></li>
        </ul>
        </nav>
`;
};

const template = Header();
