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
    const popupFilter = document.querySelector('.popup-filter');

    if (popupFilter) {
        const buttonPopup = document.querySelector('.catalog__filter');
        if (buttonPopup) {
            buttonPopup.addEventListener('click', function () {
                document.body.classList.add('no-scroll');
                popupFilter.classList.add('popup-filter--show')
                setTimeout(function () {
                    popupFilter.classList.add('popup-filter--active')
                }, 10);
            })
        }

        const buttonPopupClose = document.querySelector('.popup-filter__close');
        if (buttonPopupClose) {
            buttonPopupClose.addEventListener('click', function () {
                popupFilter.classList.remove('popup-filter--active')
                setTimeout(function () {
                    popupFilter.classList.remove('popup-filter--show')
                    document.body.classList.remove('no-scroll');
                }, 300);
            });
        }
    }

    let titles = [
        "Общее",
        "Сыр",
        "Мясо",
        "Компонент"
    ];

    let buttons = [
        [
            "Хит",
            "Новинка",
            "С мясом",
            "Вегетарианская",
            "С Курицей",
            "Без лука",
            "С грибами",
            "С морепродуктами",
            "Барбекью"
        ],
        [
            "Реджанито",
            "Моцарелла",
            "Чеддер",
            "С голубой плесенью",
            "Смесь итальянских сыров",
            "Мягкий молодой сыр"
        ],
        [
            "Пепперони",
            "Свинина",
            "Ветчина",
            "Бекон"
        ],
        [
            "Креветка",
            "Ананасы",
            "Шампиньоны",
            "Лук",
            "Перец халапеньо",
            "Орегано",
            "Зеленый перец",
            "Томаты",
            "Чеснок",
            "Красный перец",
            "Оливки",
            "Маслины",
            "Клубника",
            "Смесь итальянских трав"
        ]
    ];

    const groups = document.querySelector('.popup-filter__groups');
    if (groups) {
        let groupHtml = '';
        for (let i = 0; i < titles.length; i++) {
            let buttonsHtml = '';
            for (let j = 0; j < buttons[i].length; j++) {
                buttonsHtml = buttonsHtml + `<button>${buttons[i][j]}</button>`
            }
            groupHtml = groupHtml + `<div class="popup-filter__group"> 
                        <h4>${titles[i]}</h4>
                        <div class="popup-filter__checkbox"> 
                        ${buttonsHtml}
                        </div>
                    </div>`;
        }
        groups.innerHTML = groupHtml;
    }

    //задача сгенерировать кнопки от 1 до 10 
    //1.ищем на странице элемент .here
    //2.проверяем нашли ли этот элемент 
    //3. создаем перемнную для накопления html-кнопок 
    //4. запускаем цикл от 1 до 10
    //5.Наращиваем переменную html-кнопок с ипользованием текущего индекса
    //6.После цикла вcтавляем полученный html в нужное место outerHtml


    //const pagination = document.querySelector('.here');
    //if (pagination) {
    //let hereHtml = '';
    //let = 'n';
    // for (let i = 1; i <= 10; i = i + 1) {
    //hereHtml = hereHtml + `<li>
     //<a href="#" class="pagination__button">${i}</a></li>`
    //}
    //if (pagination) {
   //for (let i = n; i >= 3; i = i + 1)  {
    // hereHtml = hereHtml + `<li><span>${...}</span></li>`
   //}
    //}
   // if (pagination) {
    //for (let i = 10; i <= 8; i = i + 1) {
    //hereHtml = hereHtml + `<li><a href="#" class="pagination__button">${i}</a></li>`
    //}
    //}
    //pagination.outerHTML = hereHtml;

    //задача 2 сгенерировать кнопки от т1 до 1000
    //но выводить только первые три и последние три 
    // между ними трим точки 

    let categories = [
        {
            icon: 'icon-sale',
            title: 'Акции',
            isActive: true
        },
        {
            icon: 'icon-pizza',
            title: 'Пицца',
            isActive: true
        },
        {
            icon: 'icon-sushi',
            title: 'Суши',
            isActive: true
        },
        {
            icon: 'icon-juice',
            title: 'Сок',
            isActive: true
        },
        {
            icon: 'icon-snakes',
            title: 'Снеки',
            isActive: true
        },
        {
            icon: 'icon-combo',
            title: 'Комбо',
            isActive: true
        },
        {
            icon: 'icon-desert',
            title: 'Десерт',
            isActive: true
        },
        {
            icon: 'icon-souce',
            title: 'Соус',
            isActive: true
        },
    ];

    let categoriesList = document.querySelector('.categories__list');
    if (categoriesList) {
        let categoriesHtml = '';
        categories.forEach(function (category) {
            let isActive = '';
            if (category.isActive)
categoriesHtml = categoriesHtml + `<li>
                         <a href="#" class="active">
                            <svg width="24" height="24">
                                <use xlink:href="images/icons/sprite.svg#icon-sale" />
                                svg xlink:href="images/icons/sprite.
                                svg#${category.icon}
                            </svg>
                            ${category.title}
                        </a>
                      </li>`;
        });
        categoriesList.innerHTML = categoriesHtml;
    }
});




//let m = [5, 4, 5, 2];
//console.log(m[0])
//m[1] = 7
//console.log(m);
//m[10] = 9
//console.log(m[10])
//m.push(588)
//m.length

let pizzas = [

];
let pizza = {
    img: 'images/img1',
    title: 'Пицца',
    oldPrice: 600,
    newPrice: 300,
    isHit: true
};

//pizza ['img']
pizza.title

