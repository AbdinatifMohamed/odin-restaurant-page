/*

<div class="contact">
            <div class="contact__infos">
                <div class="infos__item">
                    <i class="ri-map-pin-fill"></i>
                    <h4>LOCATION</h4>
                    <p>ON-WHEELS</p>
                </div>
                <div class="infos__item">
                    <i class="ri-mail-fill"></i>
                    <h4>EMAIL</h4>
                    <p>123@gmail.com</p>
                </div>
                <div class="infos__item">
                    <i class="ri-phone-fill"></i>
                    <h4>TEL</h4>
                    <p>555-1235</p>
                </div>
                <div class="infos__item">
                    <i class="ri-time-fill"></i>
                    <h4>HOURS</h4>
                    <p>MON-FRI</p>
                </div>
            </div>
            <form action="" class="contact__form">
                <h2>CONTACT US</h2>
                <input type="text" name="name" id="name" placeholder="Enter your name.." required>
                <input type="email" name="email" id="email"placeholder="Enter your email.." required>
                <textarea name="message" id="message" placeholder="Enter your message.." required></textarea>
                <button type="submit" class="btn btn--alt form__btn">SUBMIT</button>
            </form>
        </div>



*/

import "./style.css";
const infos = [
    {
        class: 'ri-map-pin-fill',
        title: 'LOCATION',
        desc: 'ON-WHEELS'
    },
    {
        class: 'ri-mail-fill',
        title: 'EMAIL',
        desc: '123@gmail.com'
    },
    {
        class: 'ri-phone-fill',
        title: 'TEL',
        desc: '555-1235'
    },
    {
        class: 'ri-time-fill',
        title: 'HOURS',
        desc: 'MON-FRI'
    }
];

const generateContactPage = () => {
    const contact = document.createElement('div');
    contact.classList.add('contact');
    const contactinfos = document.createElement('div');
    contactinfos.classList.add('contact__infos');
    for (let i = 0; i < infos.length; i++){
        const div = document.createElement('div');
        div.classList.add('infos__item');
        const icon = document.createElement('i');
        icon.classList.add(infos[i].class);
        const h4 = document.createElement('h4');
        h4.textContent = infos[i].title;
        const p = document.createElement('p');
        p.textContent = infos[i].desc;
        div.appendChild(icon);
        div.appendChild(h4);
        div.appendChild(p);
        contactinfos.appendChild(div);
    }
    const form = document.createElement('form');
    form.classList.add('contact__form');
    const h2 = document.createElement('h2');
    h2.textContent = 'CONTACT US';
    form.appendChild(h2);
    const input = document.createElement("input");
    input.type = "text";
    input.name = "name";
    input.id = "name";
    input.placeholder = "Enter your name..";
    input.required = true;
    form.appendChild(input);
    const input2 = document.createElement("input");
    input2.type = "email";
    input2.name = "email";
    input2.id = "email";
    input2.placeholder = "Enter your email..";
    input2.required = true;
    form.appendChild(input2);
    const textarea = document.createElement('textarea');
    textarea.name = 'message';
    textarea.id = 'message';
    textarea.placeholder = 'Enter your message..';
    textarea.required = true;
    form.appendChild(textarea);
    const button = document.createElement('button');
    button.type = 'submit';
    button.classList.add("btn", "btn--alt", "form__btn");
    button.textContent = 'SUBMIT';
    form.appendChild(button);

    contact.appendChild(contactinfos);
    contact.appendChild(form);

    return contact;
}



export { generateContactPage };

