document.addEventListener('DOMContentLoaded', function () {
    window.scrollGallery = function(direction) {
      const gallery = document.querySelector('.menu3');
      const scrollAmount = 300;

      gallery.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
      });
    };
  });

  const carousel = document.querySelector('.menu3');
const btnLeft = document.querySelector('.scroll-btn.left');
const btnRight = document.querySelector('.scroll-btn.right');

const scrollAmount = 2000; 

btnRight.addEventListener('click', () => {
  
  if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 10) {
    carousel.scrollTo({ left: 0, behavior: 'smooth' });
  } else {
    carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
});

btnLeft.addEventListener('click', () => {

  if (carousel.scrollLeft <= 0) {
    carousel.scrollTo({ left: carousel.scrollWidth, behavior: 'smooth' });
  } else {
    carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  }
});