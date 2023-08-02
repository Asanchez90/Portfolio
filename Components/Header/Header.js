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
        <button id="themeBtn">☀️</button>
        </ul>
        </nav>
`;
};

const template = Header();


{/* 
<label for="chkToggle" class="navbar-toggle" id="js-navbar-toggle">
  <img class="menu-movil" src="./public/toggle-navbar-sin-fondo.png" alt="menu-movil" width="30px" height="30px">
</label>

<input type="checkbox" id="chkToggle"> 

  */}