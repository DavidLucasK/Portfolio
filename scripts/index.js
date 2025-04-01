//Funçao para desabilitar o hover e href do "ev" quando der hover no logo.

const logoev = document.querySelector('.logo-ev');
const link = logoev.closest('a');

// Remover o cursor pointer
logoev.style.cursor = 'default';

// Desabilitar o redirecionamento quando o mouse estiver sobre a logo
logoev.addEventListener('mouseover', (e) => {
    link.addEventListener('click', preventClick);
});

// Reabilitar o redirecionamento quando o mouse sair da logo
logoev.addEventListener('mouseout', (e) => {
    link.removeEventListener('click', preventClick);
});

function preventClick(e) {
    e.preventDefault();
}

//Função acaba aqui

window.onload = function(){
  window.scrollTo(20, 20);
}

const toggleDark = document.querySelector('.container-check img'); // Obtém um único elemento
const arrowUp = document.querySelector('.clique');
const containerCheck = document.querySelector('.container-check');

function removeAnimation() {
  toggleDark.style.animation = 'none';
  arrowUp.style.display = 'none';
  containerCheck.style.display = 'block';
}

toggleDark.addEventListener("click", removeAnimation);
toggleDark.addEventListener("touchstart", removeAnimation);

/* Function para acertar o GoTO do Header somente*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href').substring(1); // Remove o "#"
    
    // Verifica se o ID não é "SalveUmaCrianca" ou "LoveYouHoney"
    if (targetId !== "SalveUmaCrianca" && targetId !== "LoveYouHoney") {
      e.preventDefault();

      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 180, // Ajuste o valor conforme necessário
          behavior: 'smooth'
        });
      }
    } else {
      e.preventDefault();

      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // Verifica se a largura da tela é menor que 480px
        const offset = window.innerWidth < 480 ? 120 : 180;
        
        window.scrollTo({
          top: targetElement.offsetTop - offset, // Ajuste o valor conforme necessário
          behavior: 'smooth'
        });
      }
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
    burger.setAttribute("src", "assets/close.webp");

    if (burger.src.endsWith('assets/close.webp')) {
      // Altere o valor da largura conforme necessário
      burger.style.width = '20px';
      burger.style.height = '20px';
      burger.style.marginTop = '4px';
      burger.style.marginRight = '5px';
    }

    if (mobileLinks.style.display === 'block') {
      // Se visível, oculta a lista
      mobileLinks.style.display = 'none';
      burger.setAttribute("src", "assets/menu.svg");
      burger.style.marginTop = '0px';
      burger.style.marginRight = '0px';
      burger.style.width = '30px';
      burger.style.height = '30px';
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
      burger.style.marginTop = '0px';
      burger.style.marginRight = '0px';
      burger.style.width = '30px';
      burger.style.height = '30px';
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

// Função para atualizar o tema com base no estado do checkbox
function updateTheme() {
  const body = document.body;
  const languagesMenu = document.querySelector('.language-menu');
  const mobile__links = document.querySelector('.mobile__links');
  const header = document.querySelector('header');
  const about = document.querySelector('.about');
  const skills = document.querySelector('.skills');
  const soft = document.querySelector('.soft');
  const skills__content = document.querySelector('.skills .skills__content');
  const frontend = document.querySelector('.frontend');
  const backend = document.querySelector('.backend');
  const mobile = document.querySelector('.mobile');
  const projects = document.querySelector('.projects');
  const nissan = document.querySelector('.nissanlogo');
  const thomson = document.querySelector('.thomsonlogo');
  // const feedbacks = document.querySelector(".feedbacks");
  const aspasElements = document.querySelectorAll('.aspas');

  const checkbox = document.getElementById("dark-mode-toggle");

  if (checkbox.checked) {
    body.classList.add('dark-theme');
    languagesMenu.classList.add('dark-theme');
    header.classList.add('dark-theme');
    about.classList.add('dark-theme');
    skills.classList.add('dark-theme');
    soft.classList.add('dark-theme');
    skills__content.classList.add('dark-theme');
    frontend.classList.add('dark-theme');
    backend.classList.add('dark-theme');
    mobile.classList.add('dark-theme');
    projects.classList.add('dark-theme');
    // feedbacks.classList.add('dark-theme');
    nissan.setAttribute("src", "assets/nissandark.webp");
    thomson.setAttribute("src", "assets/thomsonreutersdark.webp");
    
    aspasElements.forEach(aspas => {
      aspas.setAttribute("src", "assets/aspas-dark.webp");
    });
  } else {
    body.classList.remove('dark-theme');
    languagesMenu.classList.remove('dark-theme');
    mobile__links.classList.remove('dark-theme');
    header.classList.remove('dark-theme');
    about.classList.remove('dark-theme');
    skills.classList.remove('dark-theme');
    soft.classList.remove('dark-theme');
    skills__content.classList.remove('dark-theme');
    frontend.classList.remove('dark-theme');
    backend.classList.remove('dark-theme');
    mobile.classList.remove('dark-theme');
    projects.classList.remove('dark-theme');
    // feedbacks.classList.remove('dark-theme');
    nissan.setAttribute("src", "assets/nissan.webp");
    thomson.setAttribute("src", "assets/Thomson_Reuters_logo.webp");
    
    aspasElements.forEach(aspas => {
      aspas.setAttribute("src", "assets/aspas.webp");
    });
  }
}

// Inicializa o estado do checkbox e aplica o tema ao carregar a página
window.addEventListener('load', function() {
  const checkbox = document.getElementById("dark-mode-toggle");
  checkbox.addEventListener('change', updateTheme);
  updateTheme(); // Aplica o tema baseado no estado inicial do checkbox
});

// Alterna o estado do checkbox ao clicar na imagem
document.getElementById("checkbox-img").addEventListener("click", function() {
  const checkbox = document.getElementById("dark-mode-toggle");
  const img = document.getElementById('checkbox-img');

  checkbox.checked = !checkbox.checked;

  if (checkbox.checked) {
    img.setAttribute("src", "assets/dark-theme.webp");
    img.style.width = '25px';
    img.style.height = '25px';
  } else {
    img.setAttribute("src", "assets/theme.webp");
    img.style.width = '25px';
    img.style.height = '25px';
  }

  updateTheme(); // Atualiza o tema imediatamente após a alteração do checkbox
});

function updateThemeMobile() {
  const body = document.body;
  const languagesMenu = document.querySelector('.language-menu');
  const header = document.querySelector('header');
  const about = document.querySelector('.about');
  const skills = document.querySelector('.skills');
  const soft = document.querySelector('.soft');
  const skills__content = document.querySelector('.skills .skills__content');
  const frontend = document.querySelector('.frontend');
  const backend = document.querySelector('.backend');
  const mobile = document.querySelector('.mobile');
  const projects = document.querySelector('.projects');
  const nissan = document.querySelector('.nissanlogo');
  const thomson = document.querySelector('.thomsonlogo');
  // const feedbacks = document.querySelector(".feedbacks");
  const aspasElements = document.querySelectorAll('.aspas');

  const checkbox = document.getElementById("dark-mode-toggle1");

  if (checkbox.checked) {
    body.classList.add('dark-theme');
    languagesMenu.classList.add('dark-theme');
    header.classList.add('dark-theme');
    about.classList.add('dark-theme');
    skills.classList.add('dark-theme');
    soft.classList.add('dark-theme');
    skills__content.classList.add('dark-theme');
    frontend.classList.add('dark-theme');
    backend.classList.add('dark-theme');
    mobile.classList.add('dark-theme');
    projects.classList.add('dark-theme');
    // feedbacks.classList.add('dark-theme');
    nissan.setAttribute("src", "assets/nissandark.webp");
    thomson.setAttribute("src", "assets/thomsonreutersdark.webp");
    
    aspasElements.forEach(aspas => {
      aspas.setAttribute("src", "assets/aspas-dark.webp");
    });
  } else {
    body.classList.remove('dark-theme');
    languagesMenu.classList.remove('dark-theme');
    header.classList.remove('dark-theme');
    about.classList.remove('dark-theme');
    skills.classList.remove('dark-theme');
    soft.classList.remove('dark-theme');
    skills__content.classList.remove('dark-theme');
    frontend.classList.remove('dark-theme');
    backend.classList.remove('dark-theme');
    mobile.classList.remove('dark-theme');
    projects.classList.remove('dark-theme');
    // feedbacks.classList.remove('dark-theme');
    nissan.setAttribute("src", "assets/nissan.webp");
    thomson.setAttribute("src", "assets/Thomson_Reuters_logo.webp");

    aspasElements.forEach(aspas => {
      aspas.setAttribute("src", "assets/aspas.webp");
    });
  }
}

// Alterna o estado do checkbox ao clicar na imagem
document.getElementById("checkbox-img1").addEventListener("click", function() {
  const checkbox = document.getElementById("dark-mode-toggle1");
  const img = document.getElementById('checkbox-img1');

  checkbox.checked = !checkbox.checked;

  if (checkbox.checked) {
    img.setAttribute("src", "assets/dark-theme.webp");
    img.style.width = '25px';
    img.style.height = '25px';
  } else {
    img.setAttribute("src", "assets/theme.webp");
    img.style.width = '25px';
    img.style.height = '25px';
  }

  updateThemeMobile(); // Atualiza o tema imediatamente após a alteração do checkbox
});

//Função para bug dos dispositivos mobile//
function checkScreenSize() {
  if (window.innerWidth < 768) {
    const img = document.getElementById('checkbox-img1');
    
    img.style.width = '25px';
    img.style.height = '25px';
    img.style.transition = '0s';

    const body = document.body;
    const mobile = document.querySelector('.mobile');
    const projects = document.querySelector('.projects');
    body.style.marginLeft = '20px'; 
    mobile.style.width = '100vw'; 
    projects.style.marginLeft = '15px';
  }
}

checkScreenSize();


// Sessão do carrossel de feedbacks
// Sessão do carrossel de feedbacks
// const prevBtn = document.querySelector('.prev-btn');
// const nextBtn = document.querySelector('.next-btn');
// const ul = document.querySelector('.container-feedbacks ul');
// let items = Array.from(ul.children);
// let totalItems = items.length;
// let itemWidth = items[0].offsetWidth; // Largura de um item
// let gap = parseFloat(getComputedStyle(ul).gap); // Obtém o gap entre os itens
// const minItems = 50; // Número mínimo de itens
// let currentIndex = 0; // Inicializa no primeiro item

// function initializeCarousel() {
//     // Duplicar itens até atingir o número mínimo
//     while (ul.children.length < minItems) {
//         items.forEach(item => {
//             const clone = item.cloneNode(true);

//             // Ajuste os links dentro do clone
//             const originalLink = item.querySelector('a');
//             const clonedLink = clone.querySelector('a');

//             // Mantenha o mesmo comportamento de rolagem suave dos links originais
//             if (originalLink && clonedLink) {
//                 clonedLink.addEventListener('click', function(e) {
//                     e.preventDefault();

//                     const targetId = originalLink.getAttribute('href').substring(1);
//                     const targetElement = document.getElementById(targetId);
                    
//                     if (targetElement) {
//                         window.scrollTo({
//                             top: targetElement.offsetTop - 120, // Ajuste o valor conforme necessário
//                             behavior: 'smooth'
//                         });
//                     }
//                 });
//             }

//             ul.appendChild(clone);
//         });
//     }

//     // Atualiza o array de itens e o número total de itens
//     updateItemVariables();
//     // Atualiza o carrossel para garantir que o primeiro item esteja visível
//     updateCarousel();
// }

// function updateItemVariables() {
//     // Atualiza o array de itens e o número total de itens
//     items = Array.from(ul.children);
//     totalItems = items.length;
//     itemWidth = items[0].offsetWidth; // Atualiza a largura do item
//     gap = parseFloat(getComputedStyle(ul).gap); // Atualiza o gap
// }

// function updateCarousel() {
//     // Calcula a posição do item centralizado
//     const carouselWidth = ul.parentElement.offsetWidth;
//     const totalWidth = (itemWidth + gap) * totalItems - gap; // Considera o gap total
//     const centerPosition = (carouselWidth - itemWidth) / 2;

//     // Calcula o offset necessário para centralizar o item
//     let offset = -currentIndex * (itemWidth + gap) + centerPosition;

//     if (window.innerWidth > 1025) {
//         ul.style.marginLeft = ("20px");
//     } else if (window.innerWidth < 480) {
//         offset += 10; // Adiciona 10px de deslocamento para telas menores
//     }

//     ul.style.transform = `translateX(${Math.max(Math.min(offset, 0), -(totalWidth - carouselWidth))}px)`;
// }

// function goToIndex(index) {
//     currentIndex = index;
//     updateCarousel();
// }

// prevBtn.addEventListener('click', () => {
//     const newIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - 1;
//     goToIndex(newIndex);
// });

// nextBtn.addEventListener('click', () => {
//     const newIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : 0;
//     goToIndex(newIndex);
// });

// // Inicializa o carrossel e ajusta o número de itens
// initializeCarousel();

// // Recalcula o carrossel quando a janela for redimensionada
// window.addEventListener('resize', updateCarousel);
