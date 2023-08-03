import './style.css'
import { Header } from "./Components/Header/Header"
import { Footer } from "./Components/Footer/Footer"
// paginas
import { Home } from "./Components/Pages/Home/Home"
import { Project } from './Components/Pages/Proyectos/Proyectos'
import { SobreMi } from "./Components/Pages/Sobre-mi/Sobre-mi.js"


//Funcionalidad
import { changeTheme } from './Components/Toggle-light-dark/ChangeTheme'



// inyectamos el template de Header en el elemento header que tenemos en el indexed.html

document.querySelector('.nav-header').innerHTML = Header();

changeTheme();


// inyectamos el template de Footer en el elemento Footer que tenemos en el indexed.html
document.querySelector('.nav-footer').innerHTML = Footer();

//por defecto, lo primero que se pinta es la pagina home 

Home();



//aqui podriamos hacer una funcion de link que me recoja el id y me la ejecute
document.querySelector("#home-link").addEventListener("click", () => {
    Home();
});


document.querySelector("#proyectos-link").addEventListener("click", () => {
    Project();
});

document.querySelector("#personal-link").addEventListener("click", () => {
    SobreMi();
});

