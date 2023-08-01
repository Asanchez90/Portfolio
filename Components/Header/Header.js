import './Header.css';

export const Header = () => {
  return `

    <nav>
      <h2> Alejandro Sánchez </h2>
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
      </ul>
    </nav>
`;
};

const template = Header();
