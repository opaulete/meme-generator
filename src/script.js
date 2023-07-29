const textInput = document.getElementById('text-input');
const imageInput = document.getElementById('image-input');
const errorDiv = document.getElementById('error-message');
const memeText = document.getElementById('meme-text');
const memeImage = document.getElementById('meme-image');

const MAX_IMAGE_SIZE = 3 * 1024 * 1024;

textInput.addEventListener('keyup', () => {
  memeText.innerHTML = textInput.value;
  localStorage.setItem('memeText', textInput.value);
});

function errorMessage(message) {
  errorDiv.innerText = message;
  errorDiv.style.display = 'block';
  errorDiv.style.margin = '10px';
}

function loadSelectedImage(file) {
  const image = file.files[0];
  const allowedFiles = ['image/jpeg', 'image/png', 'image/gif'];

  if (!allowedFiles.includes(image.type)) {
    errorMessage('Select a valid image type file (JPEG, PNG, GIF or WEBP)');
    return;
  }

  if (image.size > MAX_IMAGE_SIZE) {
    errorMessage('Image size exceeds the allowed limit (3 MB)');
    return;
  }

  const reader = new FileReader();
  reader.onload = (event) => {
    memeImage.src = event.target.result;
    localStorage.setItem('memeImage', event.target.result);
    errorMessage.style.display = 'none';
  };
  reader.readAsDataURL(image);
}

imageInput.addEventListener('change', (event) => {
  loadSelectedImage(event.target);
});

window.addEventListener('load', () => {
  const storedImage = localStorage.getItem('memeImage');
  const storedText = localStorage.getItem('memeText');

  if (storedImage) memeImage.src = storedImage;

  if (storedText) memeText.innerHTML = storedText;

  textInput.value = '';
});
