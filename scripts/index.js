window.onload = function(){
  window.scrollTo(20, 20);
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href').substring(1); // Remove o "#"
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 180, // Ajuste o valor conforme necessário
        behavior: 'smooth'
      });
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // Seleciona o botão burger e a lista de links mobile
  const burger = document.querySelector('.burguer');
  const mobileLinks = document.querySelector('.mobile__links');
  const navLinks = mobileLinks.querySelectorAll('li a');

  mobileLinks.style.display = 'none';
  // Adiciona um evento de clique ao botão burger
  burger.addEventListener('click', () => {
    // Verifica se a lista de links mobile está visível
    burger.setAttribute("src", "assets/close.png");

    if (burger.src.endsWith('assets/close.png')) {
      // Altere o valor da largura conforme necessário
      burger.style.width = '30px';
      burger.style.height = '30px';
      burger.style.marginLeft = '-35px';
    }

    if (mobileLinks.style.display === 'block') {
      // Se visível, oculta a lista
      mobileLinks.style.display = 'none';
      burger.setAttribute("src", "assets/menu.svg");
      burger.style.width = '30px';
      burger.style.height = '30px';

      burger.style.width = '40px';
      burger.style.height = '40px';
    } else {
      // Se não visível, exibe a lista
      mobileLinks.style.display = 'block';
    }
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Oculta a lista de links móveis quando um link é clicado
      mobileLinks.style.display = 'none';
      burger.setAttribute("src", "assets/menu.svg");
      burger.style.width = '40px';
      burger.style.height = '40px';
    });
  });
});



// Animação com scroll

const debounce = function(func, wait, immediate) {
  let timeout;
  return function(...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';


function animeScroll() {
  const windowTop = window.pageYOffset + ((window.innerHeight * 64) / 44);
  target.forEach(function(element) {
    if((windowTop) > element.offsetTop) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  })
}

animeScroll();

if(target.length) {
  window.addEventListener('scroll', debounce(function() {
    animeScroll();
  }, 1));
}

/* Efeito de máquina de escrever */ 

function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  textoArray.forEach((letra, i) => {
      setTimeout(function() {
        elemento.innerHTML += letra;
      }, 75 * i)
  });
}

const titulo = document.querySelector('h1');
typeWriter(titulo);