import { generateContactPage } from "./contact";
import { generateHomePage } from "./home";
import { generateMenuPage } from "./menu";

const content = document.querySelector('#content');
const homebtn = document.querySelector('#home__btn');
const menubtn = document.querySelector('#menu__btn');
const contactbtn = document.querySelector('#contact__btn');




function clearContent(){
    content.innerHTML = '';
}


homebtn.addEventListener('click', () => {
    clearContent();
    content.appendChild(generateHomePage());
})
menubtn.addEventListener('click', () => {
    clearContent();
    content.appendChild(generateMenuPage());
})
contactbtn.addEventListener('click', () => {
    clearContent();
    content.appendChild(generateContactPage());
})