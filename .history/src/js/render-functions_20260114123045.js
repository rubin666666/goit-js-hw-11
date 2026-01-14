import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

let lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
            <img
              class="gallery-image"
              src="${webformatURL}"
              alt="${tags}"
              title="${tags}"
            />
          </a>
          <div class="gallery-info">
            <div class="info-item">
              <h3>Likes</h3>
              <p>${likes}</p>
            </div>
            <div class="info-item">
              <h3>Views</h3>
              <p>${views}</p>
            </div>
            <div class="info-item">
              <h3>Comments</h3>
              <p>${comments}</p>
            </div>
            <div class="info-item">
              <h3>Downloads</h3>
              <p>${downloads}</p>
            </div>
          </div>
        </li>`
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('hidden');
}

export function hideLoader() {
  loader.classList.add('hidden');
}
