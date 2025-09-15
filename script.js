// Script to create an interactive slideshow of menu pages

document.addEventListener('DOMContentLoaded', () => {
  // Define the list of image filenames in sorted order
  const imageFiles = [
    'p1.jpg',
    'p2.jpg',
    'p3.jpg',
    'p4.jpg',
    'p5.jpg',
    'p6.jpg',
    'p7.jpg',
    'p8.jpg',
    'p9.jpg',
    'p10.jpg',
    'p11.jpg',
    'p12.jpg',
    'p13.jpg',
    'p14.jpg'
  ];

  const slideshowContainer = document.getElementById('slideshow-container');
  const counter = document.getElementById('counter');
  let currentIndex = 0;

  // Dynamically insert slides into the DOM
  imageFiles.forEach((file) => {
    const slideDiv = document.createElement('div');
    slideDiv.classList.add('slide');
    const img = document.createElement('img');
    img.src = `${file}`;
    img.alt = `صفحة المنيو ${file}`;
    slideDiv.appendChild(img);
    slideshowContainer.appendChild(slideDiv);
  });

  const slides = document.getElementsByClassName('slide');

  function showSlide(index) {
    // clamp the index to stay within bounds
    if (index >= slides.length) {
      currentIndex = 0;
    } else if (index < 0) {
      currentIndex = slides.length - 1;
    } else {
      currentIndex = index;
    }
    // Hide all slides and show current
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    slides[currentIndex].style.display = 'block';
    // Update counter text in Arabic: page number of total pages
    counter.textContent = `${currentIndex + 1} / ${slides.length}`;
    // Scroll to top of page on slide change to improve usability
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  // Attach event listeners to navigation buttons
  document.getElementById('prevBtn').addEventListener('click', () => {
    showSlide(currentIndex - 1);
  });
  document.getElementById('nextBtn').addEventListener('click', () => {
    showSlide(currentIndex + 1);
  });

  // Show the first slide on load
  showSlide(currentIndex);
});
