// Вы создаете веб-страницу для отображения списка статей. Каждая статья состоит из заголовка и текста. Вам необходимо использовать Bootstrap для стилизации элементов.
// Используйте Bootstrap ( |CSS), чтобы стилизовать элементы:
// Заголовок статьи (<h2>)
// Текст статьи (<p>)
// Кнопки "Добавить статью", "Удалить" и "Редактировать".
// Создайте начальный список статей, который будет загружаться при загрузке страницы. Используйте JSON-данные для определения заголовков и текстов статей.
// Позвольте пользователю добавлять новые статьи. При нажатии на кнопку "Добавить статью" должна появиться новая статья с заголовком "Новая статья" и текстом "Введите содержание статьи...".
// * Реализуйте функциональность удаления статей. При нажатии на кнопку "Удалить" соответствующая статья должна быть удалена из списка.
// * Реализуйте функциональность редактирования статей. При нажатии на кнопку "Редактировать" пользователь должен иметь возможность изменить заголовок и текст статьи. Используйте всплывающее окно или prompt для ввода новых данных.
// * Все изменения (добавление, удаление, редактирование) должны быть сохранены в локальное хранилище браузера, чтобы они сохранялись после перезагрузки страницы.

const articlesData = [
    {
        title: 'Заголовок статьи 1',
        content: 'Содержание статьи 1'
    },
    {
        title: 'Заголовок статьи 2',
        content: 'Содержание статьи 2'
    }
];

let block = document.querySelector('.block');

articlesData.forEach(elem => {
    addAr(elem.title, elem.content);
});


function addAr(title = 'Новая статья', content = "Введите содержание статьи...") {
    const divBlk = document.createElement('div');
    const addBlk = block.appendChild(divBlk);
    const articleTitle = addBlk.appendChild(document.createElement('h2'));
    articleTitle.textContent = title;
    articleTitle.setAttribute('class', 'title');
    const artcleCont = addBlk.appendChild(document.createElement('p'));
    artcleCont.textContent = content;
    artcleCont.setAttribute('class', 'content')
    const btn = document.createElement('button');
    const btnAdd = document.createElement('button');
    btn.textContent = 'Удалить статью';
    btn.setAttribute('class', 'remEl');
    btnAdd.textContent = "Добавить статью"
    btnAdd.setAttribute('class', 'addEl');
    addBlk.appendChild(btnAdd);
    addBlk.appendChild(btn);
    btn.addEventListener('click', () => {
        btn.parentNode.remove();
    })
    btnAdd.addEventListener('click', () => {
        addAr();
    })
}