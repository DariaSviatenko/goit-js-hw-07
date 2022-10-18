import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
const itemsMarkup = createGalleryItems(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", itemsMarkup);
galleryContainer.addEventListener("click", onGalleryContainerClick);

let instance = null;

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
}

function onGalleryContainerClick(evt) {
  evt.preventDefault();
  const isGalleryImageEl = evt.target.classList.contains("gallery__image");
  if (!isGalleryImageEl) {
    return;
  }
  instance = basicLightbox.create(`
  <div class="modal">
      <img src="${evt.target.dataset.source}" width="1200" height="800">
      </div>`);

  instance.show();
}

function onEscKeyPress(evt) {
  const ESC_KEY_CODE = "Escape";
  const isEscKey = evt.code === ESC_KEY_CODE;
  if (isEscKey && instance) {

    instance.close();
  }
}
document.addEventListener("keydown", onEscKeyPress);


