let dataBlk = document.querySelector('.blk');
let data = JSON.parse(schedule);

data.forEach(elem => {
    addBlk(elem);
});

function addBlk(arr) {
    const exrBlk = dataBlk.appendChild(document.createElement('div'));
    const exrTtl = exrBlk.appendChild(document.createElement('h3'));
    const exrTime = exrBlk.appendChild(document.createElement('h4'));
    const exrMax = exrBlk.appendChild(document.createElement('h5'));
    const exrNow = exrBlk.appendChild(document.createElement('h5'));
    const btn = exrBlk.appendChild(document.createElement('button'));


    btn.textContent = "Записаться"

    btn.addEventListener('click', () => {
        if (arr.nowCount < arr.maxCount) {
            btn.textContent = "Вы записались"
            exrNow.textContent = "Количество записавшихся: " + (++arr.nowCount);
            const btn2 = exrBlk.appendChild(document.createElement('button'));
            btn2.textContent = "Отменить запись"
            btn2.addEventListener('click', () => {
                exrNow.textContent = "Количество записавшихся: " + (--arr.nowCount);
                btn.disabled = false;
                btn.textContent = "Записаться"
                btn2.remove();
            })
            btn.disabled = true;
        }
        else {
            btn.disabled = true;
            alert("К сожалению, мест больше нет.")
        }
    })

    exrTtl.textContent = arr.title;
    exrTime.textContent = 'Время проведения: ' + arr.time;
    exrMax.textContent = "Количество мест: " + arr.maxCount;
    exrNow.textContent = "Количество записавшихся: " + arr.nowCount;
}