const carousel = document.getElementById('carousel');
    let currentImageIndex = 0;

    function rotateCarousel() {
      const images = carousel.getElementsByTagName('img');
      images[currentImageIndex].classList.remove('active');
      currentImageIndex = (currentImageIndex + 1) % images.length;
      images[currentImageIndex].classList.add('active');
    }

    setInterval(rotateCarousel, 3000);