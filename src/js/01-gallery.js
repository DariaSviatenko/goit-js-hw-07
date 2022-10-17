import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const itemsMarkup = createGalleryItems(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', itemsMarkup);
galleryContainer.addEventListener('click',onGalleryContainerClick);

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
    })
    .join("");
};
function onGalleryContainerClick(evt){
  
}

const instance = basicLightbox.create(`
    <div class="modal">
        <p>
        </p>
    </div>
`);

instance.show();
console.log(galleryItems);
