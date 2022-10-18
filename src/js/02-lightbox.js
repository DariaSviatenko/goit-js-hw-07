import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
const itemsMarkup = createGalleryItems(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", itemsMarkup);
galleryContainer.addEventListener("click", onGalleryContainerClick);

let lightbox = null;

function createGalleryItems(galleryItems) {
      return galleryItems
        .map(({ preview, original, description }) => {
          return `<a class="gallery__item" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
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
          lightbox = new SimpleLightbox('.gallery a', {captionsData: "alt", captionDelay: 250});
        
              lightbox.show();
        }



console.log(galleryItems);
