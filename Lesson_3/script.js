
const productsData = [
    {
        id: 1,
        name: "Ноутбук",
        category: "Электроника",
    },
    {
        id: 2,
        name: "Смартфон",
        category: "Электроника",
    },
    {
        id: 3,
        name: "Кофемашина",
        category: "Бытовая техника",
    },
    {
        id: 4,
        name: "Фотокамера",
        category: "Электроника",
    },
    {
        id: 5,
        name: "Микроволновая печь",
        category: "Бытовая техника",
    },
    {
        id: 6,
        name: "Книга",
        category: "Книги",
    },
    {
        id: 7,
        name: "Футболка",
        category: "Одежда",
    },
    {
        id: 8,
        name: "Шапка",
        category: "Одежда",
    },
    {
        id: 9,
        name: "Стул",
        category: "Мебель",
    },
    {
        id: 10,
        name: "Стол",
        category: "Мебель",
    },
];
const init = () => {
    const products = document.getElementById('products');
    productsData.forEach(product => {
        const liEl = document.createElement('li');
        liEl.id = product.id;
        liEl.textContent = product.name;
        liEl.dataset.category = product.category;
        products.appendChild(liEl);
    })
}
init();


const selectEl = document.getElementById('categories');

selectEl.addEventListener('change', (e) => {
    const products = document.getElementById('products');
    products.innerHTML = '';
    productsData.forEach(product => {
        if (product.category == selectEl.value) {
            const liEl = document.createElement('li');
            liEl.id = product.id;
            liEl.textContent = product.name;
            liEl.dataset.category = product.category;
            products.appendChild(liEl);
        }
    })
})
