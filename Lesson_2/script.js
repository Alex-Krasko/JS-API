const opnBtn = document.querySelector('#btn');

opnBtn.addEventListener('click', (e) => {
    if (e.isTrusted) {
        opnBtn.textContent = 'Товар добавлен в корзину';
        setTimeout(() => { opnBtn.textContent = 'Купить'; }, 2000)
    }
    else {
        opnBtn.textContent = 'Тест на робота не пройден';
    }
})