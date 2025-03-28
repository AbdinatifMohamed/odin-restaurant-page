/*

  <div class="homepage">
            'MOBILE TACO VAN';
            'WHERE EVERY TACO FEELS LIKE HOME';
            'WELCOME TO MOBILE TACO VAN';
            <button class="homepage__btn btn">EXPLORE</button>
    </div>


*/
import "./style.css";

const generateHomePage = () => {
    const div = document.createElement('div');
    div.classList.add('homepage');
    const firsth2 = document.createElement('h2');
    const secondh2 = document.createElement('h2');
    const thirdh2 = document.createElement('h2');
    firsth2.textContent = 'MOBILE TACO VAN';
    secondh2.textContent = 'WHERE EVERY TACO FEELS LIKE HOME';
    thirdh2.textContent = 'WELCOME TO MOBILE TACO VAN';
    const button = document.createElement('button');
    button.textContent = 'EXPLORE';
    button.classList.add('homepage__btn', 'btn');

    div.appendChild(firsth2);
    div.appendChild(secondh2);
    div.appendChild(thirdh2);
    div.appendChild(button);

    return div;
}



export  { generateHomePage };