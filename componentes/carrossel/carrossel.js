/*document.addEventListener('DOMContentLoaded', function () {
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



class CarrrosselComponent extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
        <div class="gallery-wrapper">
          <h1 class="titulo-sobreposto">Peças compatíveis com:</h1>
            <button class="scroll-btn left" onclick="scrollGallery(-1)">❮</button>
              <button class="scroll-btn right" onclick="scrollGallery(1)">❯</button>
                <div class="menu3">
              
                  <a href="/pages/Corsa.html"><img src="/imgs/Corsa-Sedan-20021 (1).png" alt="Corsa Sedan 2002"></a>

                  <a href="/pages/Ford-ka.html"><img src="/imgs/ford-ka-20101.png" alt="Ford Ka 2010"></a>
                    
                  <a href="/pages/Honda-city.html"><img src="/imgs/honda-city1.png" alt="Honda City"></a>

                  <a href="/pages/Strada.html"><img src="/imgs/strada-20091.png" alt="Fiat Strada 2009"></a>

                  <a href="/pages/Gol-bola.html"><img src="/imgs/gol-bola1.png" alt="Volkswagen Gol Bola"></a>

                  <a href="/pages/Fox.html"><img src="/imgs/Fox-20101.png" alt="Volkswagen Fox 2010"></a>

                  <a href="/pages/Corsa.html"><img src="/imgs/Corsa-Sedan-20021 (1).png" alt="Corsa Sedan 2002"></a>

                </div>
          </div>`;
          
    }
}

customElements.define('carrossel-component', CarrrosselComponent);*/

//NÃO FUNCIONA / N ENCONTRO O ERRO  