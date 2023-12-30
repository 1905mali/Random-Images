document.addEventListener('DOMContentLoaded', function() {
  const gridContainer = document.querySelector('.grid-container');

  for (let i = 0; i < 15; i++) {
      const gridItem = document.createElement('div');
      gridItem.classList.add('grid-item');

      const img = document.createElement('img');
      img.src = `https://source.unsplash.com/random?sig=${i}&w=1080&h=1920`;
      img.alt = 'Random Picture';

      gridItem.appendChild(img);
      gridContainer.appendChild(gridItem);
  }
});
async function fetchImages() {
  const response = await fetch('https://your-image-source.com/api');
  const data = await response.json();
  return data;
}

async function displayRandomImage() {
  const images = await fetchImages();
  const randomIndex = Math.floor(Math.random() * images.length);
  const randomImage = images[randomIndex];

  const imageContainer = document.getElementById('image-container');
  imageContainer.innerHTML = `
      <a href="${randomImage.source}" class="zoom">
          <img src="${randomImage.url}" alt="Random Image">
      </a>
  `;
}

displayRandomImage();
async function fetchRandomImageUrl() {
    const response = await fetch('https://source.unsplash.com/random');
    return response.url;
}

async function displayRandomImage() {
    const imageUrl = await fetchRandomImageUrl();
    const imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = `
        <img src="${imageUrl}" alt="Random Image">
    `;
}

displayRandomImage();
