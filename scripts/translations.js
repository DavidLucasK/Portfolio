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
        'proj1-desc': `Developed for random movie recommendations to watch. <br>(Made to make evenings with my girlfriend easier lol) <br/><strong>Using the MovieDB API</strong>`,
        'proj2-desc': 'A web app I made for my girlfriend to have fun and make it something enjoyable between us. <br><strong>*Real-time validations and requests with an API made by me as well.</strong>',
        'proj3-desc': 'Login page with real-time validations and database integration.',
        'proj4-desc': 'Calendar with an intuitive and responsive design, allowing easy event management and navigation between dates on any device. It uses caching to store information.',
        'proj5-title': 'Currency exchange rates',
        'proj5-desc': 'Simple web system for real-time currency conversions.<br>*Using the ExchangeRate API',
        'proj6-desc': 'ToDoList made with HTML, CSS and Javascript',
        'proj7-title': 'YouTube Layout Clone',
        'proj7-desc': 'Clone Design of the YouTube layout.<br>*Developing mobile responsiveness',
        'proj8-title': 'Spotify Layout Clone',
        'proj8-desc': 'Recreation of the Spotify Layout.<br><strong>Developing responsiveness for mobile</strong>',
        'proj10-title': 'Drag & Notes',
        'proj10-desc': `A web site to create notes with Drag&Drop functionality. <br/>Uses cache to save information for future use. <br/><strong>Currently desktop only</strong>`,
        'proj11-title': 'Save a Child Institute',
        'proj11-desc': 'Page for a children\'s charity institute in Campinas.',
        'footer-title': 'Get in touch',
        'copyright': '© 2024 David Lucas. All rights reserved.',
        'cv': 'Resume',
        'proj-git': 'Access Git',
        'feedback1': `"I was looking for a developer to create the website for the Instituto Salve uma Criança.<br/>Someone with clear ideas, who would execute them with excellence and convey our affection for the project.<br/>The result exceeded all my expectations.<br/>I am very satisfied and highly recommend."`,
        'feedback2': `"I loved the site David created.The design is beautiful, functional, and full of personalized details that perfectly show who we are as a couple.
                        He has incredible talent and is very creative in creating these projects.
                        <br/>If you want a job well done, I highly recommend him!
                        <br/>(I’m waiting to more "games" to accumulate more LovePoints there!)"`
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
        'proj1-desc': `Desarrollado para recomendaciones de películas aleatorias para ver. <br>(Hecho para facilitar las noches con mi novia jaja) <br/><strong>Usando la API de MovieDB</strong>`,
        'proj2-desc': 'Una aplicación web que hice para que mi novia se divierta y sea algo agradable entre nosotros. <br><strong>*Validaciones y solicitudes en tiempo real con una API hecha por mí también.</strong>',
        'proj3-desc': 'Página de inicio de sesión con validaciones en tiempo real e integración con la base de datos.',
        'proj4-desc': 'Calendario con un diseño intuitivo y responsivo, permitiendo una fácil gestión de eventos y navegación entre fechas en cualquier dispositivo. Usa caché para almacenar información.',
        'proj5-title': 'Tasas de cambio de divisas',
        'proj5-desc': 'Un sistema web simple para conversiones de divisas en tiempo real. <br><strong>Usando la API de ExchangeRate</strong>',
        'proj6-desc': 'Lista de tareas hecha con HTML, CSS y JavaScript',
        'proj7-title': 'Clon del Diseño de YouTube',
        'proj7-desc': 'Diseño clonado del layout de YouTube.<br>*Desarrollando la responsividad móvil',
        'proj8-title': 'Clon del Diseño de Spotify',
        'proj8-desc': 'Recreación del diseño de Spotify. <br><strong>Desarrollando la responsividad para dispositivos móviles</strong>',
        'proj10-title': 'Drag & Notes',
        'proj10-desc': 'Un sitio web para crear notas con funcionalidad de arrastrar y soltar. <br/>Utiliza caché para guardar información para futuros usos. <br/><strong>Actualmente solo para escritorio</strong>',
        'proj11-title': 'Instituto Salve a un Niño',
        'proj11-desc': 'Página para un instituto de caridad infantil en Campinas.',
        'footer-title': 'Ponte en contacto',
        'copyright': '© 2024 David Lucas. Todos los derechos reservados.',
        'cv': 'Currículum',
        'proj-git': 'Acceder a Git',
        'feedback1': `"Estaba buscando un desarrollador para crear el sitio web del Instituto Salve una Criança.<br/>Alguien con ideas claras, que las ejecutara con excelencia y transmitiera nuestro cariño por el proyecto.<br/>El resultado superó todas mis expectativas.<br/>Estoy muy satisfecho y lo recomiendo encarecidamente."`,
        'feedback2': `"Me encantó el sitio web que David creó. El diseño es hermoso, funcional y lleno de detalles personalizados que muestran perfectamente quiénes somos como pareja.<br/>Tiene un talento increíble y es muy creativo para crear estos proyectos.<br/>Si quieres un trabajo bien hecho, ¡lo recomiendo muchísimo!<br/>(¡Estoy esperando más "juegos" para acumular más LovePoints allí!)"`
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
        'proj1-desc': `Développé pour des recommandations de films aléatoires à regarder. <br>(Fait pour faciliter les soirées avec ma copine lol) <br/><strong>Utilisation de l'API MovieDB</strong>`,
        'proj2-desc': `Application web que j'ai créée pour que ma copine puisse s'amuser et pour être quelque chose de divertissant entre nous. <br><strong>*Validation et requêtes en temps réel avec une API que j'ai également développée.</strong>`,
        'proj3-desc': 'Page de connexion avec validations en temps réel et intégration de base de données.',
        'proj4-desc': 'Calendrier avec un design intuitif et réactif, permettant une gestion facile des événements et une navigation entre les dates sur tout appareil. Utilise la mise en cache pour stocker les informations.',
        'proj5-title': 'Taux de Change des Devises',
        'proj5-desc': `Système web simple pour des conversions de devises en temps réel. <br><strong>Utilisation de l'API ExchangeRate</strong>`,
        'proj6-desc': 'Liste de tâches réalisée avec HTML, CSS et JavaScript',
        'proj7-title': 'Clon du Design YouTube',
        'proj7-desc': 'Design cloné du layout de YouTube.<br>*Développement de la réactivité mobile',
        'proj8-title': 'Clon du Design Spotify',
        'proj8-desc': `Recréation du design de Spotify. <br><strong>Développement de la réactivité pour les appareils mobiles</strong>`,
        'proj10-title': 'Drag & Notes',
        'proj10-desc': `Site web pour créer des notes avec fonction de glisser-déposer. <br/>Utilise la mise en cache pour sauvegarder les informations pour une utilisation future. <br/><strong>Pour l'instant uniquement pour les ordinateurs de bureau</strong>`,
        'proj11-title': 'Institut Sauvez un Enfant',
        'proj11-desc': 'Page pour un institut de charité pour enfants à Campinas.',
        'footer-title': 'Prenez contact',
        'copyright': '© 2024 David Lucas. Tous droits réservés.',
        'cv': 'CV',
        'proj-git': 'Accéder à Git',
        'feedback1': `"Je cherchais un développeur pour créer le site web de l'Institut Salve uma Criança.<br/>Quelqu'un avec des idées claires, qui les réaliserait avec excellence et transmettrait notre affection pour le projet.<br/>Le résultat a dépassé toutes mes attentes.<br/>Je suis très satisfait et je le recommande vivement."`,
        'feedback2': `"J'ai adoré le site que David a créé. Le design est magnifique, fonctionnel, et plein de détails personnalisés qui montrent parfaitement qui nous sommes en tant que couple.<br/>Il a un talent incroyable et est très créatif pour créer ces projets.<br/>Si vous voulez un travail bien fait, je le recommande vivement !<br/>(J'attends avec impatience d'autres "jeux" pour accumuler plus de LovePoints !)"`

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
        'proj1-desc': `ランダムな映画の推薦のために開発されました。 <br>(彼女との夜をもっと楽にするために作られました（笑）) <br/><strong>MovieDB APIを使用</strong>`,
        'proj1-api': 'MovieDB APIを使用',
        'proj2-desc': '彼女が楽しめるように作ったウェブアプリです。 <br><strong>*リアルタイムのバリデーションとリクエストは、自分で作ったAPIを使用しています。</strong>',
        'proj3-desc': 'リアルタイムの検証とデータベース統合を備えたログインページ。',
        'proj4-desc': '直感的でレスポンシブなデザインのカレンダーで、あらゆるデバイスでイベントの管理と日付間のナビゲーションが簡単にできます。情報を保存するためにキャッシングを使用します。',
        'proj5-title': '通貨換算レート',
        'proj5-desc': 'リアルタイムの通貨変換を行うシンプルなウェブシステムです。 <br><strong>ExchangeRate APIを使用</strong>',
        'proj6-desc': 'HTML、CSS、およびJavaScriptで作成されたToDoリスト',
        'proj7-title': 'YouTubeレイアウトクローン',
        'proj7-desc': 'YouTubeのレイアウトを再現',
        'proj8-title': 'Spotifyレイアウトクローン',
        'proj8-desc': 'Spotifyのレイアウトを再現しました。 <br><strong>モバイル向けのレスポンシブ対応を開発中</strong>',
        'proj10-title': 'ドラッグ＆ノート',
        'proj10-desc': 'ドラッグ＆ドロップ機能でメモを作成するウェブサイトです。 <br/>将来の使用のために情報をキャッシュします。 <br/><strong>現時点ではデスクトップ専用</strong>',
        'proj11-title': '子供を救う会',
        'proj11-desc': 'カンピーナスの子供たちのための慈善団体のページ。',
        'footer-title': '連絡先',
        'copyright': '© 2024 David Lucas. 全著作権所有。',
        'cv': '履歴書',
        'proj-git': 'Gitにアクセス',
        'feedback1': `"私はInstituto Salve uma Criançaのウェブサイトを作成するための開発者を探していました。<br/>明確なアイデアを持ち、それを卓越した形で実現し、プロジェクトに対する私たちの愛情を伝えることができる人。<br/>結果は私のすべての期待を超えました。<br/>私は非常に満足しており、強くお勧めします。"`,
        'feedback2': `"デビッドが作成したサイトをとても気に入っています。デザインは美しく、機能的で、私たちがカップルとしてどんな人間かを完璧に示すカスタマイズされた詳細が満載です。<br/>彼は信じられないほどの才能を持ち、これらのプロジェクトを作成するのに非常にクリエイティブです。<br/>もしよい仕事を求めているなら、彼を強くお勧めします！<br/>(もっと多くの"ゲーム"を楽しみにしていて、もっとLovePointsを貯めたいです！)"`

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

// Função para traduzir os textos da página para português
function translatePortuguese() {
    // Mapeamento de traduções
    const traducoesPortuguese = {
        'header-nav': `Início`,
        'about-nav': `Sobre`,
        'skills-nav': `Habilidades`,
        'frontend-nav': `Tecnologias`,
        'projects-nav': `Projetos`,
        'footer-nav': `Contato`,
        'hello': `Olá! Meu nome é David Lucas e sou Desenvolvedor`,
        'alem': 'Além do código: Quem sou eu?',
        'quetal': 'Que tal se conectar comigo nas redes sociais abaixo para saber mais sobre o meu trabalho?',
        'about1': 'Desenvolvedor curioso e apaixonado por tecnologia e soluções.',
        'about2': 'Meu nome é David Lucas e sou desenvolvedor. Sou apaixonado por tecnologia e tenho experiência em desenvolver aplicações intuitivas e soluções criativas. Gosto de resolver problemas de forma criativa, projetar interfaces visualmente atraentes e focar na experiência do usuário.',
        'about3': `Adoro desafios, desde melhorar algo que já exista ou até mesmo criar algo completamente novo e encontrar alguma maneira de deixar as coisas automáticas.`,
        'companys-title': 'Empresas em que já trabalhei e/ou estive em projetos relacionados.',
        'skills-title': 'Caixa de Ferramentas',
        'skills-desc': 'Aqui estão algumas habilidades e ferramentas que domino e que me permitem criar soluções criativas e funcionais.',
        'automations': 'Automações',
        'automations-title': 'Gosto de criar automações para simplificar minhas tarefas. Normalmente uso Python e IA para isso.',
        'webdev-title': 'Desenvolvedor Web',
        'webdev-desc': 'Experiência em desenvolvimento com foco em tecnologias modernas.',
        'webdes-title': 'Design Web',
        'webdes-desc': 'Habilidade em criar layouts modernos e responsivos com foco na experiência do usuário.',
        'uxui-title': 'Design UX/UI',
        'uxui-desc': 'Conhecimento em projetar interfaces e experiências de usuário visualmente atraentes e intuitivas.',
        'git-title': 'Controle de Versão',
        'git-desc': 'Experiência com ferramentas de controle de versão para gerenciamento de projetos.',
        'frontend-desc': 'Tecnologias e outras ferramentes que já utilizei e utilizo em meus projetos e nas empresas em que trabalhei.',
        'A': 'Avançado',
        'B': 'Básico',
        'I': 'Intermediário',
        'back-title': `Backend e outras ferramentas que já utilizei`,
        'projects-title': 'Projetos em Destaque',
        'projects-desc': 'Aqui estão alguns dos meus projetos mais recentes',
        'proj1-title': 'Escolhas de Filmes',
        'proj1-desc': `Desenvolvido para recomendações de filmes aleatórios para assistir.<br>(Feito para facilitar as noites com a namorada rs)<br/><strong>Usando API MovieDB</strong>`,
        'proj2-desc': 'App web que fiz para minha namorada poder brincar e ser algo divertido entre a gente.<br><strong>*Validações e requisições em tempo real com API feita por mim também.</strong>',
        'proj3-desc': 'Página de login com validações em tempo real e integração com banco de dados.',
        'proj4-desc': 'Calendário com design intuitivo e responsivo, permitindo fácil gerenciamento de eventos e navegação entre datas em qualquer dispositivo. Utiliza cache para guardar informações.',
        'proj5-title': 'Taxas de câmbio de moedas',
        'proj5-desc': 'Sistema web simples para fazer conversões de moedas em tempo real.<br><strong>Usando API ExchangeRate</strong>',
        'proj6-desc': 'Lista de tarefas feita com HTML, CSS e JavaScript',
        'proj7-title': 'Clone do Layout do YouTube',
        'proj7-desc': 'Recriação do Layout do Youtube.<br>*Desenvolvendo responsividade para mobile',
        'proj8-title': 'Clone do Layout do Spotify',
        'proj8-desc': 'Recriação do Layout do Spotify.<br><strong>Desenvolvendo responsividade para mobile</strong>',
        'proj10-title': 'Drag & Notes',
        'proj10-desc': 'Site Web para criar Notas para lembrar com Drag&Drop.<br/>Utiliza cache para salvar informações para futuros usos.<br/><strong>Somente para Desktop no momento</strong>',
        'proj11-title': 'Instituto Salve uma Criança',
        'proj11-desc': 'Página para instituto de caridade de crianças em Campinas.',
        'footer-title': 'Entre em contato',
        'copyright': '© 2024 David Lucas. Todos os direitos reservados.',
        'cv': 'Currículo',
        'proj-git': 'Acessar Git',
    };

    // Aplicar traduções aos elementos da página
    Object.keys(traducoesPortuguese).forEach(id => {
        if (id) { // Verifica se o id não está vazio
            const elementos = document.querySelectorAll(`#${id}`);
            elementos.forEach(elemento => {
                if (elemento) {
                    elemento.innerHTML = traducoesPortuguese[id];
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
}

let cancelTypeWriter = false; // Variável para controlar a execução do typeWriter
let timeoutIds = []; // Armazena todos os timeouts para que possam ser cancelados

function typeWriter(elemento, textos, index = 0) {
    if (cancelTypeWriter) return; // Se cancelTypeWriter for true, interrompe a função

    const originalFontSize = elemento.style.fontSize; // Armazena o tamanho original do texto

    const textoArray = textos[index].split('');
    elemento.innerHTML = '';

    textoArray.forEach((letra, i) => {
        const timeoutId = setTimeout(function() {
            if (!cancelTypeWriter) { // Verifica se a execução ainda deve continuar
                elemento.innerHTML += letra;
            }
        }, 100 * i);
        timeoutIds.push(timeoutId); // Armazena o ID do timeout
    });

    // Calcular o tempo total necessário para escrever o texto
    const tempoTotal = 100 * textoArray.length;

    // Chamar a função novamente após o tempo necessário para escrever o texto, mais um pequeno delay
    const nextTimeoutId = setTimeout(() => {
        if (!cancelTypeWriter) { // Verifica novamente antes de chamar a próxima iteração
            const proximoIndex = (index + 1) % textos.length;
            typeWriter(elemento, textos, proximoIndex);
        } else {
            elemento.style.fontSize = originalFontSize; // Restaura o tamanho original quando a função termina
        }
    }, tempoTotal + 1300); // 1300ms de delay antes de mudar para o próximo texto
    timeoutIds.push(nextTimeoutId); // Armazena o ID do timeout

    // Restaura o tamanho original após a última letra
    setTimeout(() => {
        if (!cancelTypeWriter) {
            elemento.style.fontSize = originalFontSize;
        }
    }, tempoTotal);
}

function cancelAllTypeWriters() {
    cancelTypeWriter = true; // Sinaliza para interromper a execução atual
    timeoutIds.forEach(timeoutId => clearTimeout(timeoutId)); // Cancela todos os timeouts
    timeoutIds = []; // Limpa a lista de IDs de timeouts
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

// Seleciona os elementos das bandeiras no menu desktop
const brazil = document.querySelector('.navbar .brazil');
const english = document.querySelector('.navbar .english');
const spanish = document.querySelector('.navbar .spanish');
const french = document.querySelector('.navbar .french');
const japanese = document.querySelector('.navbar .japanese');

// Seleciona os elementos das bandeiras no menu mobile
const brazilMobile = document.querySelector('.navbar__mobile .brazil');
const englishMobile = document.querySelector('.navbar__mobile .english');
const spanishMobile = document.querySelector('.navbar__mobile .spanish');
const frenchMobile = document.querySelector('.navbar__mobile .french');
const japaneseMobile = document.querySelector('.navbar__mobile .japanese');

// Função para verificar o tamanho da tela e ajustar o tamanho da fonte
function adjustFontSizeForLanguage(idioma, baseFontSize) {
    if (idioma === 'fr') {
        return window.innerWidth < 768 ? '36px' : baseFontSize;
    }
    else if (idioma === 'ja') {
        return window.innerWidth < 768 ? '30px' : baseFontSize;
    }
    return baseFontSize;
}

// Funções para os eventos de clique
function setupClickEvents(element, langFunc, textos, baseFontSize, idioma) {
    element.onclick = function() {
        cancelAllTypeWriters();
        titulo.innerHTML = ''; 
        langFunc();
        cancelTypeWriter = false; // Reseta o controle de cancelamento

        // Ajuste o tamanho da fonte apenas para os idiomas japonês e francês
        const adjustedFontSize = adjustFontSizeForLanguage(idioma, baseFontSize);

        // Aplica o tamanho da fonte ajustado para o título e para o texto
        titulo.style.fontSize = adjustedFontSize;
        hello.style.fontSize = adjustedFontSize;

        // Inicia a função de digitação com os textos e tamanho de fonte ajustados
        typeWriter(titulo, textos); 
        aplicarIdioma(idioma);
    };
}

// Configura os eventos de clique para os menus do desktop
setupClickEvents(brazil, translatePortuguese, textos, '64px', 'pt');
setupClickEvents(english, translateEnglish, textosEn, '64px', 'en');
setupClickEvents(spanish, translateSpanish, textosEs, '64px', 'es');
setupClickEvents(french, translateFrench, textosFr, '60px', 'fr'); // Ajustado para francês
setupClickEvents(japanese, translateJapanese, textosJa, '50px', 'ja'); // Ajustado para japonês

// Configura os eventos de clique para os menus do mobile
setupClickEvents(brazilMobile, translatePortuguese, textos, '39px', 'pt');
setupClickEvents(englishMobile, translateEnglish, textosEn, '39px', 'en');
setupClickEvents(spanishMobile, translateSpanish, textosEs, '36px', 'es');
setupClickEvents(frenchMobile, translateFrench, textosFr, '36px', 'fr'); // Ajustado para francês
setupClickEvents(japaneseMobile, translateJapanese, textosJa, '30px', 'ja'); // Ajustado para japonês


function aplicarIdioma(idioma) {
    // Define as classes para cada idioma
    const classesPorIdioma = {
        pt: 'pt',
        en: 'en',
        es: 'es',
        fr: 'fr',
        ja: 'ja'
    };

    // Seleciona todos os elementos com as classes 'techs', 'techs-big', e 'techs-bigxl'
    const techsElements = document.querySelectorAll('.techs');
    const techsbigElements = document.querySelectorAll('.techs-big');
    const techsbigxlElements = document.querySelectorAll('.techs-bigxl');

    // Remove todas as classes de idiomas previamente aplicadas
    Object.values(classesPorIdioma).forEach(classe => {
        techsElements.forEach(el => el.classList.remove(classe));
        techsbigElements.forEach(el => el.classList.remove(classe));
        techsbigxlElements.forEach(el => el.classList.remove(classe));
    });

    // Adiciona a classe correspondente ao idioma passado
    const classeParaAdicionar = classesPorIdioma[idioma] || classesPorIdioma['en'];
    techsElements.forEach(el => el.classList.add(classeParaAdicionar));
    techsbigElements.forEach(el => el.classList.add(classeParaAdicionar));
    techsbigxlElements.forEach(el => el.classList.add(classeParaAdicionar));
}

// Detecta o idioma do navegador e aplica o idioma correspondente
function detectarIdiomaNavegador() {
    const idiomaNavegador = navigator.language || navigator.userLanguage;
    const idiomaPrincipal = idiomaNavegador.split('-')[0]; // Extrai a parte principal do idioma (e.g., 'pt' de 'pt-BR')
    aplicarIdioma(idiomaPrincipal);
}

// Chama a função ao carregar a página
window.onload = detectarIdiomaNavegador;

//Função para escrever o cargo no header de acordo com o idioma
if (obterIdiomaNavegador().startsWith('pt')) {  
    typeWriter(titulo, textos);
}
else if (obterIdiomaNavegador().startsWith('es')) { 
    typeWriter(titulo, textosEs);
}
else if (obterIdiomaNavegador().startsWith('fr')) { 
    typeWriter(titulo, textosFr);
}
else if (obterIdiomaNavegador().startsWith('ja')) {
    typeWriter(titulo, textosJa);
    hello.style.fontSize = '45px';
    titulo.style.fontSize = "45px";
}
else {
    typeWriter(titulo, textosEn);
}