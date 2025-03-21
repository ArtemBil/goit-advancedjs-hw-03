import iziToast from "izitoast";
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import "izitoast/dist/css/iziToast.min.css";
import {renderImages} from './js/render-functions.js';
import {fetchImages} from './js/pixabay-api.js';

const PUBLIC_API_KEY = '49464671-8ab53a49f1e625c6669932451';
const errorNotFoundMessage = 'Sorry, there are no images matching your search query. Please try again!'

const form = document.querySelector('form');
const gallery = document.getElementById('gallery');
const loader = document.querySelector('.loader');
const instance = new SimpleLightbox('#gallery a', {
    captions: true,
    captionType: 'attr',
    captionDelay: 250,
    showCounter: false,
    captionsData: 'alt'
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = event.target.querySelector('input');
    const searchCriteria = input.value;
    const url = `https://pixabay.com/api/?key=${PUBLIC_API_KEY}&q=${encodeURI(searchCriteria)}&image_type=photo&orientation=horizontal&safesearch=true`;

    gallery.innerHTML = '';
    loader.classList.add('loading');
    form.reset();

    fetchImages(url).then(data => {
        loader.classList.remove('loading');

        if (!data.hits.length) {
            return iziToast.error({
                message: errorNotFoundMessage,
                position: 'topRight'
            });
        }

        renderImages(data.hits);
        instance.refresh();
    })

});

console.log(import.meta.env.VITE_PIXABAY_API_KEY)