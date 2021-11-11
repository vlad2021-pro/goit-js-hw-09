import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

// Change code below this line

const gallaryNode = document.querySelector('.gallery');

const newGallery = galleryItems.map(element => { 
 return `<div class="gallery__item">
  <a class="gallery__link" href="${element.original}">
    <img
      class="gallery__image"
      src="${element.preview}"
      data-source= "${element.original}"
      alt="${element.description}"
    />
  </a>
</div>`;

})
  .join('');

gallaryNode.insertAdjacentHTML('beforeend', newGallery)
  
let gallery = new SimpleLightbox('.gallery a',
  {
captionDelay: '250',
captionPosition: 'bottom',
captionsData: 'alt'
  });

