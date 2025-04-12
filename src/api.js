// src/api.js
export const getPhotos = async (query, page) => {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?query=${query}&page=${page}&client_id=AlzoTZIZCs1dUO9Ty6fU5S2t-g-n8JXYMgXoGGAZcYg`
  );
  const data = await response.json();
  return { results: data.results, totalPages: data.total_pages };
};
