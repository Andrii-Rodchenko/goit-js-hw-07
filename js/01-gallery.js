import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const markupGallery = createGalleryLayout(galleryItems);

galleryEl.innerHTML = markupGallery;

function createGalleryLayout(array) { 
const markup = array.map(({preview, original, description}) => {
    return   `  
    <div class="gallery__item">
    <a class="gallery__link" href=${original} onclick = "event.preventDefault()" >
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a> 
  </div>`
}).join(" ")
    return markup
}

galleryEl.addEventListener("click", handleImageClick)

function handleImageClick(event) {
    const { target } = event;
    target.dataset.source
    if (!target.dataset.source) {
    return    
    } else {  
console.log(target.dataset.source)
const instance = basicLightbox.create(`
<img src=${target.dataset.source} >`)
instance.show() }
  
}
