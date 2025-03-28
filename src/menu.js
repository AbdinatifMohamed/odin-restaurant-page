/*
  <div class="menu">
            <div class="menu__foods">
                <h3>TACOS & MORE</h3>
                <div class="foods__item">
                    <div class="item">
                        <img src="./assets/imgs/foods-drinks/tacos.webp" alt="">
                        <p>TACOS</p>
                        <p>$2</p>
                    </div>
                </div>
            </div>
            <div class="menu__drinks">
                <h3>SODAS & JUGOS</h3>
                <div class="drinks__item">
                    <div class="item">
                        <img src="./assets/imgs/foods-drinks/tacos.webp" alt="">
                        <p>TACOS</p>
                        <p>$2</p>
                    </div>
                </div>
            </div>
        </div>





*/

import "./style.css"; 
import menuData from './menu.json' assert { type: 'json' };

const generateMenuPage = () => {
    const menu = document.createElement('div');
    menu.classList.add('menu');
    const foods = document.createElement('div');
    foods.classList.add('menu__foods');
    const drinks = document.createElement('div');
    drinks.classList.add('menu__drinks');

    for (let i = 0; i < 2; i++){
        const h3 = document.createElement('h3');
        const div = document.createElement('div');
        if (i==0){
            h3.textContent = 'TACOS & MORE';
            div.classList.add('foods__item');
            foods.appendChild(h3);
            foods.appendChild(div);
        } else {
            h3.textContent = 'SODAS & JUGOS';
            div.classList.add('drinks__item');
            drinks.appendChild(h3);
            drinks.appendChild(div);
        }
    }

    menu.appendChild(foods);
    menu.appendChild(drinks);
    for (let i = 0; i < menuData.foods.length; i++){
        const div = document.createElement('div');
        div.classList.add('item');
        const img = document.createElement('img');
        img.src = menuData.foods[i].img;
        const fp = document.createElement('p');
        fp.textContent = menuData.foods[i].name;
        const sp = document.createElement('p');
        sp.textContent = "$" + menuData.foods[i].price;

        div.appendChild(img);
        div.appendChild(fp);
        div.appendChild(sp);
        foods.querySelector('.foods__item').appendChild(div);
    }
    for (let i = 0; i < menuData.drinks.length; i++){
        const div = document.createElement('div');
        div.classList.add('item');
        const img = document.createElement('img');
        img.src = menuData.drinks[i].img;
        const fp = document.createElement('p');
        fp.textContent = menuData.drinks[i].name;
        const sp = document.createElement('p');
        sp.textContent = "$" + menuData.foods[i].price;

        div.appendChild(img);
        div.appendChild(fp);
        div.appendChild(sp);
        drinks.querySelector('.drinks__item').appendChild(div);
    }

    return menu;
}


export { generateMenuPage }; 