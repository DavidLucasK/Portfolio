function obterIdiomaNavegador() {
    return navigator.language || navigator.userLanguage;
}

// Função para traduzir os textos da página
function translateEnglish() {
    // Mapeamento de traduções
    const traducoes = {
        'header-nav': `Home`,
        'about-nav': `About`,
        'skills-nav': `Skills`,
        'frontend-nav': `Techs`,
        'projects-nav': `Projects`,
        'footer-nav': `Contact`,
        'hello': `Hey! My name is David Lucas and I`,
        'alem': 'Beyond the code: Who am I?',
        'quetal': 'How about connecting with me on the social media platforms below to learn more about my work?',
        'about1': 'Curious and passionate developer with a love for technology and solutions.',
        'about2': 'My name is David Lucas, and I am a developer. I am passionate about technology and have experience in developing intuitive applications and creative solutions. I enjoy solving problems in creative ways, designing visually appealing interfaces, and focusing on user experience.',
        'about3': `I love challenges, whether it's improving something that already exists or creating something completely new and finding ways to automate things.`,
        'companys-title': 'Companies I have worked for and/or been involved in related projects.',
        'skills-title': 'ToolBox',
        'skills-desc': 'Here are some skills and tools I master that allow me to create creative and functional solutions.',
        'automations': 'Automations',
        'automations-title': 'I enjoy creating automations to simplify my tasks. I usually use Python and AI for this.',
        'webdev-title': 'Web Developer',
        'webdev-desc': 'Experience in development with a focus on modern technologies.',
        'webdes-title': 'Web Design',
        'webdes-desc': 'Skill in creating modern and responsive layouts with a focus on user experience.',
        'uxui-title': 'UX/UI Design',
        'uxui-desc': 'Knowledge in designing visually appealing and intuitive user interfaces and experiences.',
        'git-title': 'Version Control',
        'git-desc': 'Experience with version control tools for project management.',
        'frontend-desc': 'Technologies and other tools that I have used and continue to use in my projects and at the companies I have worked for.',
        'A': 'Advanced',
        'B': 'Basic',
        'I': 'Intermediate',
        'back-title': `Backend and other tools that I have used`,
        'projects-title': 'Featured Projects',
        'projects-desc': 'Here are some of my most recent projects',
        'proj1-title': 'Movie Chooser',
        'proj1-desc': `Developed for random movie recommendations to watch.<br/>(Made to make date nights easier, haha)`,
        'proj1-api': 'Using MovieDB API',
        'proj2-desc': 'A web app I created for my girlfriend to play with and have fun.<br>*It performs real-time validations and requests with an API I also developed.',
        'proj3-desc': 'Login page with real-time validations and database integration.',
        'proj4-desc': 'Calendar with an intuitive and responsive design, allowing easy event management and navigation between dates on any device. It uses caching to store information.',
        'proj5-title': 'Currency exchange rates',
        'proj5-desc': 'Simple web system for real-time currency conversions.<br>*Using the ExchangeRate API',
        'proj6-desc': 'ToDoList made with HTML, CSS and Javascript',
        'proj7-title': 'YouTube Layout Clone',
        'proj7-desc': 'Clone Design of the YouTube layout created with React, Next.js, and TailwindCSS.<br>*Developing mobile responsiveness',
        'proj8-title': 'Spotify Layout Clone',
        'proj8-desc': 'Clone Design of the Spotify layout created with React, Next.js, and TailwindCSS.<br>*Developing mobile responsiveness',
        'footer-title': 'Get in touch',
        'copyright': '© 2024 David Lucas. All rights reserved.',
        'cv': 'Resume',
        'proj-git': 'Access Git',
    };

    // Aplicar traduções aos elementos da página
    Object.keys(traducoes).forEach(id => {
        if (id) { // Verifica se o id não está vazio
            const elementos = document.querySelectorAll(`#${id}`);
            elementos.forEach(elemento => {
                if (elemento) {
                    elemento.innerHTML = traducoes[id];
                }
            });
        }
    });
}

// Função para traduzir os textos da página
function translateSpanish() {
    // Mapeamento de traduções
    const traducoesSpanish = {
        'header-nav': `Inicio`,
        'about-nav': `Sobre mí`,
        'skills-nav': `Habilidades`,
        'frontend-nav': `Tecnologías`,
        'projects-nav': `Proyectos`,
        'footer-nav': `Contacto`,
        'hello': `¡Hola! Mi nombre es David Lucas y soy Desarrollador`,
        'alem': 'Más allá del código: ¿Quién soy?',
        'quetal': '¿Qué tal si te conectas conmigo en las redes sociales a continuación para conocer más sobre mi trabajo?',
        'about1': 'Desarrollador curioso y apasionado con amor por la tecnología y soluciones.',
        'about2': 'Mi nombre es David Lucas y soy desarrollador. Me apasiona la tecnología y tengo experiencia en el desarrollo de aplicaciones intuitivas y soluciones creativas. Disfruto resolver problemas de manera creativa, diseñar interfaces visualmente atractivas y enfocarme en la experiencia del usuario.',
        'about3': `Me encantan los desafíos, ya sea mejorar algo que ya existe o crear algo completamente nuevo y encontrar formas de automatizar las cosas.`,
        'companys-title': 'Empresas para las que he trabajado y/o proyectos relacionados.',
        'skills-title': 'Caja de herramientas',
        'skills-desc': 'Aquí están algunas habilidades y herramientas que domino y que me permiten crear soluciones creativas y funcionales.',
        'automations': 'Automatizaciones',
        'automations-title': 'Disfruto crear automatizaciones para simplificar mis tareas. Normalmente uso Python e IA para esto.',
        'webdev-title': 'Desarrollador Web',
        'webdev-desc': 'Experiencia en desarrollo con enfoque en tecnologías modernas.',
        'webdes-title': 'Diseño Web',
        'webdes-desc': 'Habilidad en la creación de diseños modernos y responsivos con enfoque en la experiencia del usuario.',
        'uxui-title': 'Diseño UX/UI',
        'uxui-desc': 'Conocimiento en el diseño de interfaces y experiencias de usuario visualmente atractivas e intuitivas.',
        'git-title': 'Control de Versiones',
        'git-desc': 'Experiencia con herramientas de control de versiones para la gestión de proyectos.',
        'frontend-desc': 'Tecnologías y otras herramientas que he usado y continúo usando en mis proyectos y en las empresas para las que he trabajado.',
        'A': 'Avanzado',
        'B': 'Básico',
        'I': 'Intermedio',
        'back-title': `Backend y otras herramientas que he usado`,
        'projects-title': 'Proyectos Destacados',
        'projects-desc': 'Aquí están algunos de mis proyectos más recientes',
        'proj1-title': 'Selector de Películas',
        'proj1-desc': `Desarrollado para recomendaciones de películas aleatorias para ver.<br/>(Hecho para facilitar las noches de cita, jaja)`,
        'proj1-api': 'Usando la API de MovieDB',
        'proj2-desc': 'Una aplicación web que creé para mi novia para que juegue y se divierta.<br>*Realiza validaciones y solicitudes en tiempo real con una API que también desarrollé.',
        'proj3-desc': 'Página de inicio de sesión con validaciones en tiempo real e integración con la base de datos.',
        'proj4-desc': 'Calendario con un diseño intuitivo y responsivo, permitiendo una fácil gestión de eventos y navegación entre fechas en cualquier dispositivo. Usa caché para almacenar información.',
        'proj5-title': 'Tasas de cambio de divisas',
        'proj5-desc': 'Sistema web simple para conversiones de divisas en tiempo real.<br>*Usando la API de ExchangeRate',
        'proj6-desc': 'Lista de tareas hecha con HTML, CSS y JavaScript',
        'proj7-title': 'Clon del Diseño de YouTube',
        'proj7-desc': 'Diseño clonado del layout de YouTube creado con React, Next.js y TailwindCSS.<br>*Desarrollando la responsividad móvil',
        'proj8-title': 'Clon del Diseño de Spotify',
        'proj8-desc': 'Diseño clonado del layout de Spotify creado con React, Next.js y TailwindCSS.<br>*Desarrollando la responsividad móvil',
        'footer-title': 'Ponte en contacto',
        'copyright': '© 2024 David Lucas. Todos los derechos reservados.',
        'cv': 'Currículum',
        'proj-git': 'Acceder a Git',
    };

    // Aplicar traduções aos elementos da página
    Object.keys(traducoesSpanish).forEach(id => {
        if (id) { // Verifica se o id não está vazio
            const elementos = document.querySelectorAll(`#${id}`);
            elementos.forEach(elemento => {
                if (elemento) {
                    elemento.innerHTML = traducoesSpanish[id];
                }
            });
        }
    });
}

// Função para traduzir os textos da página para francês
function translateFrench() {
    // Mapeamento de traduções
    const traducoesFrench = {
        'header-nav': `Accueil`,
        'about-nav': `À propos`,
        'skills-nav': `Compétences`,
        'frontend-nav': `Technologies`,
        'projects-nav': `Projets`,
        'footer-nav': `Contact`,
        'hello': `Ça va ? Je m'appelle David Lucas et je suis Développeur`,
        'alem': 'Au-delà du code : Qui suis-je ?',
        'quetal': 'Que diriez-vous de vous connecter avec moi sur les réseaux sociaux ci-dessous pour en savoir plus sur mon travail ?',
        'about1': 'Développeur curieux et passionné, avec un amour pour la technologie et les solutions.',
        'about2': 'Je m\'appelle David Lucas et je suis développeur. Je suis passionné par la technologie et j\'ai de l\'expérience dans le développement d\'applications intuitives et de solutions créatives. J\'aime résoudre des problèmes de manière créative, concevoir des interfaces visuellement attrayantes et me concentrer sur l\'expérience utilisateur.',
        'about3': `J'adore les défis, que ce soit pour améliorer quelque chose qui existe déjà ou créer quelque chose de complètement nouveau et trouver des moyens d'automatiser les choses.`,
        'companys-title': 'Entreprises pour lesquelles j\'ai travaillé et/ou projets associés.',
        'skills-title': 'Boîte à outils',
        'skills-desc': 'Voici quelques compétences et outils que je maîtrise et qui me permettent de créer des solutions créatives et fonctionnelles.',
        'automations': 'Automatisations',
        'automations-title': 'J\'aime créer des automatisations pour simplifier mes tâches. J\'utilise généralement Python et l\'IA pour cela.',
        'webdev-title': 'Développeur Web',
        'webdev-desc': 'Expérience en développement avec un accent sur les technologies modernes.',
        'webdes-title': 'Design Web',
        'webdes-desc': 'Compétence dans la création de mises en page modernes et réactives avec un accent sur l\'expérience utilisateur.',
        'uxui-title': 'Design UX/UI',
        'uxui-desc': 'Connaissance dans la conception d\'interfaces et d\'expériences utilisateur visuellement attrayantes et intuitives.',
        'git-title': 'Contrôle de Version',
        'git-desc': 'Expérience avec des outils de contrôle de version pour la gestion de projets.',
        'frontend-desc': 'Technologies et autres outils que j\'ai utilisés et continue d\'utiliser dans mes projets et dans les entreprises pour lesquelles j\'ai travaillé.',
        'A': 'Avancé',
        'B': 'De base',
        'I': 'Intermédiaire',
        'back-title': `Backend et autres outils que j'ai utilisés`,
        'projects-title': 'Projets en Vedette',
        'projects-desc': 'Voici quelques-uns de mes projets les plus récents',
        'proj1-title': 'Choix de Films',
        'proj1-desc': `Développé pour des recommandations de films aléatoires à regarder.<br/>(Fait pour faciliter les soirées en amoureux, haha)`,
        'proj1-api': 'Utilisation de l\'API MovieDB',
        'proj2-desc': 'Une application web que j\'ai créée pour ma petite amie pour qu\'elle puisse jouer et s\'amuser.<br>*Elle effectue des validations et des demandes en temps réel avec une API que j\'ai également développée.',
        'proj3-desc': 'Page de connexion avec validations en temps réel et intégration de base de données.',
        'proj4-desc': 'Calendrier avec un design intuitif et réactif, permettant une gestion facile des événements et une navigation entre les dates sur tout appareil. Utilise la mise en cache pour stocker les informations.',
        'proj5-title': 'Taux de Change des Devises',
        'proj5-desc': 'Système web simple pour des conversions de devises en temps réel.<br>*Utilisation de l\'API ExchangeRate',
        'proj6-desc': 'Liste de tâches réalisée avec HTML, CSS et JavaScript',
        'proj7-title': 'Clon du Design YouTube',
        'proj7-desc': 'Design cloné du layout de YouTube créé avec React, Next.js et TailwindCSS.<br>*Développement de la réactivité mobile',
        'proj8-title': 'Clon du Design Spotify',
        'proj8-desc': 'Design cloné du layout de Spotify créé avec React, Next.js et TailwindCSS.<br>*Développement de la réactivité mobile',
        'footer-title': 'Prenez contact',
        'copyright': '© 2024 David Lucas. Tous droits réservés.',
        'cv': 'CV',
        'proj-git': 'Accéder à Git',
    };

    // Aplicar traduções aos elementos da página
    Object.keys(traducoesFrench).forEach(id => {
        if (id) { // Verifica se o id não está vazio
            const elementos = document.querySelectorAll(`#${id}`);
            elementos.forEach(elemento => {
                if (elemento) {
                    elemento.innerHTML = traducoesFrench[id];
                }
            });
        }
    });
}

// Função para traduzir os textos da página para japonês
function translateJapanese() {
    // Mapeamento de traduções
    const traducoesJapanese = {
        'header-nav': `ホーム`,
        'about-nav': `私について`,
        'skills-nav': `スキル`,
        'frontend-nav': `技術`,
        'projects-nav': `プロジェクト`,
        'footer-nav': `連絡先`,
        'hello': `こんにちは！私の名前はデイヴィッド・ルーカスです、そして私は開発者です`,
        'alem': 'コードの先にあるもの: 私は誰ですか？',
        'quetal': '私の仕事についてもっと知りたい場合は、下記のソーシャルメディアプラットフォームで私とつながりませんか？',
        'about1': '技術とソリューションに対する愛を持つ好奇心旺盛で情熱的な開発者。',
        'about2': '私の名前はデイヴィッド・ルーカスです。私は開発者で、技術に情熱を持っています。直感的なアプリケーションや創造的なソリューションの開発に経験があります。創造的な方法で問題を解決し、視覚的に魅力的なインターフェースを設計し、ユーザー体験に焦点を当てることが好きです。',
        'about3': `既存のものを改善することも、新しいものを完全に作成して自動化する方法を見つけることも大好きです。`,
        'companys-title': '私が働いた企業や関わったプロジェクト。',
        'skills-title': 'ツールボックス',
        'skills-desc': 'ここに、私がマスターしているいくつかのスキルとツールがあります。それらは私が創造的で機能的なソリューションを作成するのに役立ちます。',
        'automations': '自動化',
        'automations-title': 'タスクを簡素化するために自動化を作成するのが好きです。通常、PythonとAIを使用しています。',
        'webdev-title': 'ウェブ開発者',
        'webdev-desc': '現代の技術に重点を置いた開発経験。',
        'webdes-title': 'ウェブデザイン',
        'webdes-desc': 'ユーザー体験に重点を置いた現代的でレスポンシブなレイアウトの作成スキル。',
        'uxui-title': 'UX/UIデザイン',
        'uxui-desc': '視覚的に魅力的で直感的なユーザーインターフェースと体験の設計に関する知識。',
        'git-title': 'バージョン管理',
        'git-desc': 'プロジェクト管理のためのバージョン管理ツールの経験。',
        'frontend-desc': '私がプロジェクトや働いていた企業で使用している技術やその他のツール。',
        'A': '上級',
        'B': '基本',
        'I': '中級',
        'back-title': `バックエンドとその他の使用したツール`,
        'projects-title': '注目のプロジェクト',
        'projects-desc': 'ここに私の最近のプロジェクトのいくつかがあります',
        'proj1-title': '映画選択ツール',
        'proj1-desc': `視聴する映画のランダムな推奨のために開発されました。<br/>(デートナイトを簡単にするために作られました、ハハ)`,
        'proj1-api': 'MovieDB APIを使用',
        'proj2-desc': '彼女が遊んで楽しむために作成したウェブアプリケーション。<br>*リアルタイムの検証とリクエストを行うAPIも開発しました。',
        'proj3-desc': 'リアルタイムの検証とデータベース統合を備えたログインページ。',
        'proj4-desc': '直感的でレスポンシブなデザインのカレンダーで、あらゆるデバイスでイベントの管理と日付間のナビゲーションが簡単にできます。情報を保存するためにキャッシングを使用します。',
        'proj5-title': '通貨換算レート',
        'proj5-desc': 'リアルタイムの通貨換算のためのシンプルなウェブシステム。<br>*ExchangeRate APIを使用',
        'proj6-desc': 'HTML、CSS、およびJavaScriptで作成されたToDoリスト',
        'proj7-title': 'YouTubeレイアウトクローン',
        'proj7-desc': 'React、Next.js、TailwindCSSを使用して作成されたYouTubeレイアウトのデザインクローン。<br>*モバイルレスポンシブを開発中',
        'proj8-title': 'Spotifyレイアウトクローン',
        'proj8-desc': 'React、Next.js、TailwindCSSを使用して作成されたSpotifyレイアウトのデザインクローン。<br>*モバイルレスポンシブを開発中',
        'footer-title': '連絡先',
        'copyright': '© 2024 David Lucas. 全著作権所有。',
        'cv': '履歴書',
        'proj-git': 'Gitにアクセス',
    };

    // Aplicar traduções aos elementos da página
    Object.keys(traducoesJapanese).forEach(id => {
        if (id) { // Verifica se o id não está vazio
            const elementos = document.querySelectorAll(`#${id}`);
            elementos.forEach(elemento => {
                if (elemento) {
                    elemento.innerHTML = traducoesJapanese[id];
                }
            });
        }
    });
}


// Verificar o idioma do navegador e traduzir se necessário
if (obterIdiomaNavegador().startsWith('en')) {
    translateEnglish();
}
else if (obterIdiomaNavegador().startsWith('es')) {
    translateSpanish();
}
else if (obterIdiomaNavegador().startsWith('fr')) {
    translateFrench();
}
else if (obterIdiomaNavegador().startsWith('ja')) {
    translateJapanese();
    const companystitle = document.getElementById('companys-title');
    companystitle.style.margin = '0 auto';
}

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
    }, tempoTotal + 1300); // 1000ms de delay antes de mudar para o próximo texto
  }

const hello = document.getElementById('hello');
const titulo = document.querySelector('.cargo');
const textos = [
    'Backend',
    'Frontend',
    'FullStack'
];
    const textosEn = [
    'am a Backend Developer',
    'am a Frontend Developer',
    'am a FullStack Developer'
];

const textosEs = [
    'Backend',
    'Frontend',
    'FullStack'
];

const textosFr = [
    'Backend',
    'Frontend',
    'FullStack'
];

const textosJa = [
    'バックエンド開発者',
    'フロントエンド開発者',
    'フルスタック開発者'
];

function aplicarIdioma() {
    const idioma = obterIdiomaNavegador();
    
    // Seleciona todos os elementos com as classes 'techs', 'techs-big', e 'techs-bigxl'
    const techsElements = document.querySelectorAll('.techs');
    const techsbigElements = document.querySelectorAll('.techs-big');
    const techsbigxlElements = document.querySelectorAll('.techs-bigxl');
    
    // Verifica se o idioma não começa com 'pt'
    const adicionarClasse = !idioma.startsWith('pt');
    
    // Adiciona ou remove a classe 'en' com base no idioma
    techsElements.forEach(el => el.classList.toggle('en', adicionarClasse));
    techsbigElements.forEach(el => el.classList.toggle('en', adicionarClasse));
    techsbigxlElements.forEach(el => el.classList.toggle('en', adicionarClasse));
}

// Chama a função para aplicar a classe com base no idioma do navegador
aplicarIdioma();


//Função para escrever o cargo no header de acordo com o idioma
if (obterIdiomaNavegador().startsWith('en')) {  
    typeWriter(titulo, textosEn);
}
else if (obterIdiomaNavegador().startsWith('es')) { 
    typeWriter(titulo, textosEs);
}
else if (obterIdiomaNavegador().startsWith('fr')) { 
    typeWriter(titulo, textosFr);
}
else if (obterIdiomaNavegador().startsWith('ja')) {
    typeWriter(titulo, textosJa);
    hello.style.fontSize = '50px';
    titulo.style.fontSize = "50px";
}
else {
    typeWriter(titulo, textos);
}