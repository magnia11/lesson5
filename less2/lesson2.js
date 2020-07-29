'use strict';

const buttons = document.querySelectorAll('button');
buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        handleClick(event);
    });
});

/**
 * Создаем функцию для кнопки, при нажатии на которую
 * на странице будет видна либо картинка, либо текст.
 */
function handleClick(clickedButtonEvent) {
    const cardNode = clickedButtonEvent.target.parentNode;

    const card = {
        wrap: cardNode,
        img: cardNode.querySelector('img'),
        productName: cardNode.querySelector('.productName'),
        button: cardNode.querySelector('button'),
    };

    const textOnButton = card.button.innerText;
    if (textOnButton === 'Подробнее') {
        showText (card);
    } else if (textOnButton === 'Отмена') {
        hideText (card);
    }
};

/**
* Создаем функцию, которая будет показывать текст на 
* странице вместо картинки.
*/
function showText (card) {
     card.img.style.display = 'none';
    const text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis reiciendis est quam, expedita, pariatur, dolor blanditiis quidem voluptas earum corrupti labo?';
    card.productName.insertAdjacentHTML ('afterend', `<div class="desk">${text}</div>`);
    card.button.innerText = 'Отмена';
};

/**
* Создаем функцию, которая будет показывать картинку на 
* странице вместо текста.
*/
function hideText (card) {
    card.img.style.display = 'block';
    card.wrap.querySelector ('.desk').remove();
    card.button.innerText = 'Подробнее';
}
