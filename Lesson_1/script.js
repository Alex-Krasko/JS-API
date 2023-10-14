let addElem = document.querySelector('#addEl');
let remElem = document.querySelector('#remEl');
let clElem = document.querySelector('#cloneEl');
let id = 1;

addElem.addEventListener('click', () => {
    let elem = document.body.appendChild(document.createElement('div'));
    elem.style.width = '100px';
    elem.style.height = '100px';
    elem.style.backgroundColor = '#aaaaaa'
    elem.classList.add('box');
    let ttl = elem.appendChild(document.createElement('p'));
    ttl.textContent = id++;
})

remElem.addEventListener('click', () => {
    document.body.lastChild.remove();
    id--;
})

clElem.addEventListener('click', () => {
    let elem = document.body.appendChild(document.body.lastChild.cloneNode());
    let ttl = elem.appendChild(document.createElement('p'));
    ttl.textContent = id - 1;
})