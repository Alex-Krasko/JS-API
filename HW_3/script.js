const image = document.querySelector('.img');
const blk = document.querySelector('.blk');
const phName = document.querySelector('.photografer');
const likeCounter = document.querySelector('.like');
const btn = document.querySelector('.btn');
const url = 'https://api.unsplash.com/photos/?client_id=JJ6o08AqVFDr2IbjE1exXlShCJiPhdRfUhrwSfEFK88';

async function getPic() {
    const response = await fetch(url);
    let data = await response.json();
    let likes = 0;
    // data.forEach(el => {
    //     image.setAttribute('src', el.urls.small);
    //     likes = el.likes;
    //     likeCounter.textContent = likes;
    //     phName.textContent = el.user.first_name + " " + el.user.last_name;
    // });
    const el = data[Math.floor(Math.random() * 10)]
    image.setAttribute('src', el.urls.small);
    likes = el.likes;
    likeCounter.textContent = likes;
    phName.textContent = el.user.first_name + " " + el.user.last_name;

    btn.addEventListener('click', function () {
        likeCounter.textContent = ++likes;
    });
}

getPic();