const API_KEY = '40305157-29c77b29b48ab694c9a8a21a8';
const URL = `https://pixabay.com/api/`;
const PerPage = 12;

export function fetchGalleryImg(searchQuery, page) {
  return fetch(
    `${URL}?q=${searchQuery}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PerPage}&page=${page}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}