'use strict';

const images = [
    { 'id': '1', 'url': './img/goku.jpg' },
    { 'id': '2', 'url': './img/itachi.jpeg' },
    { 'id': '3', 'url': './img/madara.webp' },
    { 'id': '4', 'url': './img/kira.webp' },
    { 'id': '5', 'url': './img/levi.jpg' },
    { 'id': '6', 'url': './img/hashirama.webp' },
    { 'id': '7', 'url': './img/kakashi2.jpeg' },
    { 'id': '8', 'url': './img/minato.jpg' }
]

const containerItems = document.querySelector('#container-items');

const loadImages = (images, container) => {
    images.forEach(image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages(images, containerItems);

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore(lastItem, items[0]);
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);