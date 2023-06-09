import { galleryItems } from './gallery-items.js';
// Change code below this line
//console.log(galleryItems);

function createElementsCard(galleryItems) {
    return galleryItems
        .map(({ original, preview, description }) => {
            return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
        })
        .join('');
}

const item = document.querySelector('.gallery');
const cardsMarkup = createElementsCard(galleryItems);
item.insertAdjacentHTML('beforeend', cardsMarkup);

item.addEventListener('click', showBigImage);
function showBigImage(event) {
    if (!event.target.classList.contains('gallery__image')) {
        return;
    }
    event.preventDefault();
    const eventCurrent = event.target;
    console.log(eventCurrent);
    const urlCurrentImg = event.target.dataset.source;
    console.log(urlCurrentImg);

    const instance = basicLightbox.create(`
      <img src="${urlCurrentImg}" width="800" height="600">
         `);
    instance.show();
    item.addEventListener('keydown', event => {
        if (event.code === 'Escape') {
            instance.close();
        }
    });
}
