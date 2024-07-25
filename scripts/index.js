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
      burger.style.width = '25px';
      burger.style.height = '25px';
      burger.style.marginTop = '8px';
      burger.style.marginRight = '10px';
    }

    if (mobileLinks.style.display === 'block') {
      // Se visível, oculta a lista
      mobileLinks.style.display = 'none';
      burger.setAttribute("src", "assets/menu.svg");
      burger.style.marginTop = '0px';
      burger.style.marginRight = '0px';
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
      burger.style.marginTop = '0px';
      burger.style.marginRight = '0px';
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

// function typeWriter(elemento) {
//   const textoArray = elemento.innerHTML.split('');
//   elemento.innerHTML = '';
//   textoArray.forEach((letra, i) => {
//       setTimeout(function() {
//         elemento.innerHTML += letra;
//       }, 100 * i)
//   });
// }

// const titulo = document.querySelector('.cargo');
// typeWriter(titulo);


function typeWriter(elemento, textos, index = 0) {
  const textoArray = textos[index].split('');
  elemento.innerHTML = '';
  textoArray.forEach((letra, i) => {
    setTimeout(function() {
      elemento.innerHTML += letra;
    }, 100 * i);
  });

  // Calcular o tempo total necessário para escrever o texto
  const tempoTotal = 100 * textoArray.length;

  // Chamar a função novamente após o tempo necessário para escrever o texto, mais um pequeno delay
  setTimeout(() => {
    // Alternar para o próximo texto ou reiniciar
    const proximoIndex = (index + 1) % textos.length;
    typeWriter(elemento, textos, proximoIndex);
  }, tempoTotal + 1000); // 1000ms de delay antes de mudar para o próximo texto
}

const titulo = document.querySelector('.cargo');
const textos = [
  'Desenvolvedor Fullstack',
  'Desenvolvedor Frontend',
  'Designer UX/UI'
];

typeWriter(titulo, textos);

// Função para atualizar o tema com base no estado do checkbox
function updateTheme() {
  const body = document.body;
  const mobile__links = document.querySelector('.mobile__links');
  const header = document.querySelector('header');
  const about = document.querySelector('.about');
  const skills = document.querySelector('.skills');
  const skills__content = document.querySelector('.skills .skills__content');
  const frontend = document.querySelector('.frontend');
  const backend = document.querySelector('.backend');
  const mobile = document.querySelector('.mobile');
  const projects = document.querySelector('.projects');
  const nissan = document.querySelector('.nissanlogo');
  const thomson = document.querySelector('.thomsonlogo');

  const checkbox = document.getElementById("dark-mode-toggle");

  if (checkbox.checked) {
    body.classList.add('dark-theme');
    mobile__links.style.backgroundColor = 'red';
    header.classList.add('dark-theme');
    about.classList.add('dark-theme');
    skills.classList.add('dark-theme');
    skills__content.classList.add('dark-theme');
    frontend.classList.add('dark-theme');
    backend.classList.add('dark-theme');
    mobile.classList.add('dark-theme');
    projects.classList.add('dark-theme');
    nissan.setAttribute("src", "assets/nissandark.png");
    thomson.setAttribute("src", "assets/thomsonreutersdark.png");
  } else {
    body.classList.remove('dark-theme');
    mobile__links.classList.remove('dark-theme');
    header.classList.remove('dark-theme');
    about.classList.remove('dark-theme');
    skills.classList.remove('dark-theme');
    skills__content.classList.remove('dark-theme');
    frontend.classList.remove('dark-theme');
    backend.classList.remove('dark-theme');
    mobile.classList.remove('dark-theme');
    projects.classList.remove('dark-theme');
    nissan.setAttribute("src", "assets/nissan.png");
    thomson.setAttribute("src", "assets/Thomson_Reuters_logo.png");
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
    img.setAttribute("src", "assets/dark-theme.png");
    img.style.width = '25px';
    img.style.height = '25px';
  } else {
    img.setAttribute("src", "assets/theme.png");
    img.style.width = '25px';
    img.style.height = '25px';
  }

  updateTheme(); // Atualiza o tema imediatamente após a alteração do checkbox
});

function updateThemeMobile() {
  const body = document.body;
  const header = document.querySelector('header');
  const about = document.querySelector('.about');
  const skills = document.querySelector('.skills');
  const skills__content = document.querySelector('.skills .skills__content');
  const frontend = document.querySelector('.frontend');
  const backend = document.querySelector('.backend');
  const mobile = document.querySelector('.mobile');
  const projects = document.querySelector('.projects');
  const nissan = document.querySelector('.nissanlogo');
  const thomson = document.querySelector('.thomsonlogo');

  const checkbox = document.getElementById("dark-mode-toggle1");

  if (checkbox.checked) {
    body.classList.add('dark-theme');
    header.classList.add('dark-theme');
    about.classList.add('dark-theme');
    skills.classList.add('dark-theme');
    skills__content.classList.add('dark-theme');
    frontend.classList.add('dark-theme');
    backend.classList.add('dark-theme');
    mobile.classList.add('dark-theme');
    projects.classList.add('dark-theme');
    nissan.setAttribute("src", "assets/nissandark.png");
    thomson.setAttribute("src", "assets/thomsonreutersdark.png");
  } else {
    body.classList.remove('dark-theme');
    header.classList.remove('dark-theme');
    about.classList.remove('dark-theme');
    skills.classList.remove('dark-theme');
    skills__content.classList.remove('dark-theme');
    frontend.classList.remove('dark-theme');
    backend.classList.remove('dark-theme');
    mobile.classList.remove('dark-theme');
    projects.classList.remove('dark-theme');
    nissan.setAttribute("src", "assets/nissan.png");
    thomson.setAttribute("src", "assets/Thomson_Reuters_logo.png");
  }
}

// Alterna o estado do checkbox ao clicar na imagem
document.getElementById("checkbox-img1").addEventListener("click", function() {
  const checkbox = document.getElementById("dark-mode-toggle1");
  const img = document.getElementById('checkbox-img1');

  checkbox.checked = !checkbox.checked;

  if (checkbox.checked) {
    img.setAttribute("src", "assets/dark-theme.png");
    img.style.width = '25px';
    img.style.height = '25px';
  } else {
    img.setAttribute("src", "assets/theme.png");
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