import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

function createElementsCard(galleryItems) {
    return galleryItems
        .map(({ original, preview, description }) => {
            return `
        <li class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
        />
    </a>
</li>
        `;
        })
        .join('');
}
console.log(createElementsCard(galleryItems));
const item = document.querySelector('.gallery');
const cardsMarkup = createElementsCard(galleryItems);
item.insertAdjacentHTML('beforeend', cardsMarkup);
/*** */
var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});
