import './style.css'
import { Header } from "./Components/Header/Header"
import { Footer } from "./Components/Footer/Footer"
// paginas
import { Home } from "./Components/Pages/Home/Home"
import { Proyectos } from "./Components/Pages/Proyectos/Proyectos"
import { SobreMi } from "./Components/Pages/Sobre-mi/Sobre-mi"

//Funcionalidad


// inyectamos el template de Header en el elemento header que tenemos en el indexed.html

document.querySelector('.nav-header').innerHTML = Header();


// inyectamos el template de Footer en el elemento Footer que tenemos en el indexed.html
document.querySelector('.nav-footer').innerHTML = Footer();

//por defecto, lo primero que se pinta es la pagina home 
Home();

document.querySelector("#home-link").addEventListener("click", () => {
    Home();
});


document.querySelector("#proyectos-link").addEventListener("click", () => {
    Proyectos();
});

document.querySelector("#personal-link").addEventListener("click", () => {
    SobreMi();
});