// выводит окошко на экран
// alert('222');

// Только раскрытие текста
// document.querySelector('.info__link').addEventListener('click', function () {
//     this.remove()
//     document.querySelector('.info__text').classList.add('info__text--active');
// })

let buttonText;
let buttonText2 = "Скрыть текст";

// Раскрытие-сворачивание
// document.querySelector('.info__link').addEventListener('click', function () {
//     document.querySelector('.info__text').classList.toggle('info__text--active');
//     if (this.textContent == 'Показать полностью') {
//         this.textContent = "Скрыть текст";
//     } else {
//         this.textContent = "Показать полностью";
//     }
// })

document.querySelector('.info__link').addEventListener('click', function () {
    document.querySelector('.info__text').classList.toggle('info__text--active');
    buttonText = this.textContent;
    this.textContent = buttonText2;
    buttonText2 = buttonText;
})

// ждем полной загрузки страницы 
document.addEventListener('DOMContentLoaded', function () {
    const buttonPopup = document.querySelector('.catalog__filter');
    if (buttonPopup) {
        buttonPopup.addEventListener('click', function () {
            const popupFilter = document.querySelector('.popup-filter');
            if (popupFilter) {
                document.body.classList.add('no-scroll');
                popupFilter.classList.add('popup-filter--show')
                setTimeout(function () {
                    popupFilter.classList.add('popup-filter--active')
                }, 10);
            }
        })
    }
    const buttonPopupClose = document.querySelector('.popup-filter__close');
    if (buttonPopupClose) {
        buttonPopupClose.addEventListener('click', function () {
            popupFilter.classList.remove('popup-filter--active')}
        )
        }}

)
   