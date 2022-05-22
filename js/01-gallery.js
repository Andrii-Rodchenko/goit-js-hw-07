import { galleryItems } from './gallery-items.js';
// Change code below this line


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
    if (!target.dataset.source) {
    return    
    } else {  
      const instance = basicLightbox.create(
  `<img src=${target.dataset.source} >`, {
  onShow: (instance) => { window.addEventListener('keydown', handleKeydownEscape)
    },
  onClose: (instance) => {window.addEventListener('keydown', handleСancellationEventListener) }
})
    function handleKeydownEscape(event) { 
      if (event.code === 'Escape') { 
        instance.close();
      } 
       return
      } 
      function handleСancellationEventListener() {
  window.removeEventListener ('keydown', handleKeydownEscape)
}

      instance.show()
  
    }
  
  
}
