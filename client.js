let i = 1;
let images = [];
let time = 3000;

// Image List
images[0] = 'images/yellow-bike-icon.png';
images[1] = 'images/brown-bike-icon.png';
images[2] = 'images/black-bike-icon.png';

// Change Image
function changeImg() {
  // Used name attribute of "slide" within image tag
  document.slide.src = images[i];

  if(i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout('changeImg()', time);
}

window.onload = changeImg;
