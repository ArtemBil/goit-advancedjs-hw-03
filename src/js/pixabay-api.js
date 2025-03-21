import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const errorMessage = 'Something went wrong with your request. Please try again.'

/**
 * Fetch Image Data
 *
 * @param url
 * @return {Promise<any>}
 */
export function fetchImages(url) {
    return fetch(url)
        .then(response => response.json())
        .catch(() => {
            iziToast.error({
                message: errorMessage,
                position: 'topRight'
            });
        })
}