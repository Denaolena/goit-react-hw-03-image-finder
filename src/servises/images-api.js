function fetchImages(keyWord, page) {
  return fetch(
    `https://pixabay.com/api/?q=${keyWord}&page=${page}&key=35912782-f9206aec1cfed4286d9fa7302&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`No images for keyword ${keyWord}`));
  });
}

export default fetchImages;
