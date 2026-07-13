document.addEventListener("DOMContentLoaded", () => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const storageKey = "vulpi-locale";
    const pageMode = document.body.dataset.page || "home";
    const isHomePage = pageMode === "home";
    const siteName = "Vulpi Studio";
    const seoImagePath = "./images/02.jpg";
    const descriptionMeta = document.querySelector('meta[name="description"]');
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    const ogSiteNameMeta = document.querySelector('meta[property="og:site_name"]');
    const ogTypeMeta = document.querySelector('meta[property="og:type"]');
    const ogLocaleMeta = document.querySelector('meta[property="og:locale"]');
    const ogLocaleAlternateMeta = document.querySelector('meta[property="og:locale:alternate"]');
    const ogTitleMeta = document.querySelector('meta[property="og:title"]');
    const ogDescriptionMeta = document.querySelector('meta[property="og:description"]');
    const ogUrlMeta = document.querySelector('meta[property="og:url"]');
    const ogImageMeta = document.querySelector('meta[property="og:image"]');
    const ogImageAltMeta = document.querySelector('meta[property="og:image:alt"]');
    const twitterTitleMeta = document.querySelector('meta[name="twitter:title"]');
    const twitterDescriptionMeta = document.querySelector('meta[name="twitter:description"]');
    const twitterImageMeta = document.querySelector('meta[name="twitter:image"]');
    const twitterImageAltMeta = document.querySelector('meta[name="twitter:image:alt"]');
    const textTargets = Array.from(document.querySelectorAll("[data-i18n]"));
    const attributeTargets = Array.from(document.querySelectorAll("[data-i18n-key]"));
    const localeButtons = Array.from(document.querySelectorAll("[data-lang]"));

    const translations = {
        "pt-BR": {
            "pageTitle": "Vulpi Studio | UX/UI, produto e desenvolvimento",
            "metaDescription": "Vulpi Studio cria experiências digitais com foco em UX/UI, produto e desenvolvimento, unindo clareza, performance e execução técnica.",
            "brand.aria": "Início da Vulpi Studio",
            "nav.aria": "Navegação principal",
            "nav.home": "Início",
            "nav.about": "Sobre",
            "nav.works": "Cases",
            "nav.contact": "Contato",
            "lang.aria": "Seleção de idioma",
            "breadcrumb.aria": "Caminho de navegação",
            "hero.title1": "Criamos com propósito, cada pixel",
            "hero.title2": "é intencional.",
            "hero.description": "Somos especialistas em criar experiências digitais que unem UX/UI, produto e desenvolvimento, entregando soluções claras, estéticas e de alta performance.",
            "hero.cta": "Começar agora",
            "hero.imageAlt": "Visual editorial abstrato",
            "hero.creditAria": "Imagem de Evie S. no Unsplash",
            "about.label": "Sobre nós",
            "about.description": "Com anos de experiência em design de produto e desenvolvimento, ajudamos times a transformar ideias em experiências digitais claras, consistentes e eficientes. Criamos interfaces e produtos que equilibram usabilidade, estética e performance.",
            "about.cta": "Entre em contato",
            "about.imageAlt": "Composição abstrata inspirada em interfaces de produto e websites",
            "about.creditAria": "Imagem de Hennie Stander no Unsplash",
            "works.label": "Cases recentes",
            "works.trackAria": "Carrossel de cases recentes",
            "works.controlsAria": "Navegação de cases",
            "works.prevAria": "Cases anteriores",
            "works.nextAria": "Próximos cases",
            "works.card1.title": "MS Solutions",
            "works.card1.category": "Site institucional",
            "works.card1.alt": "Imagem de capa do case MS Solutions",
            "works.card1.linkAria": "Abrir o case MS Solutions",
            "works.card2.title": "Pega a Receita",
            "works.card2.category": "Site de receitas",
            "works.card2.alt": "Imagem de capa do case Pega a Receita",
            "works.card2.linkAria": "Abrir o case Pega a Receita",
            "works.card3.title": "Macle ERP",
            "works.card3.category": "ERP para lojas de calçados",
            "works.card3.alt": "Imagem de capa do case Macle ERP",
            "works.card3.linkAria": "Abrir o case Macle ERP",
            "works.card4.title": "Construtor de sites Macle",
            "works.card4.category": "Construtor de sites",
            "works.card4.alt": "Imagem de capa do case Construtor de sites Macle",
            "works.card4.linkAria": "Abrir o case Construtor de sites Macle",
            "services.label": "Nossos serviços",
            "services.card1.title": "UI/UX Design",
            "services.card1.text": "Nós criamos sites bonitos, claros e estratégicos, pensados para gerar valor para a marca e para o negócio.",
            "services.card2.title": "Desenvolvimento Web",
            "services.card2.text": "Nós construímos sites responsivos com estrutura moderna, código eficiente e interações confiáveis em todos os dispositivos.",
            "services.card3.title": "Desenvolvimento de Apps",
            "services.card3.text": "Nós criamos aplicativos móveis e web intuitivos com foco em usabilidade, movimento e consistência entre plataformas.",
            "services.card4.title": "Design de Produto",
            "services.card4.text": "Nós transformamos necessidades de negócio em fluxos, protótipos e interfaces prontas para validação e evolução.",
            "services.cta": "Entre em contato",
            "contact.label": "Contato",
            "contact.description": "Preencha o formulário e me conte o contexto do projeto, o prazo e o que você precisa resolver. Eu retorno com a próxima etapa.",
            "contact.nameLabel": "Nome e sobrenome",
            "contact.namePlaceholder": "Seu nome completo",
            "contact.phoneLabel": "Telefone",
            "contact.phonePlaceholder": "(00) 00000-0000",
            "contact.emailLabel": "Email",
            "contact.emailPlaceholder": "voce@exemplo.com",
            "contact.serviceLabel": "Qual serviço",
            "contact.servicePlaceholder": "Selecione um serviço",
            "contact.serviceOther": "Outro",
            "contact.messageLabel": "Mensagem",
            "contact.messagePlaceholder": "Conte sobre seu projeto, objetivos e prazo.",
            "contact.submit": "Enviar",
            "contact.submitting": "Enviando...",
            "contact.success": "Mensagem enviada com sucesso. Vou responder em contato@vulpistudio.com.",
            "contact.error": "Não foi possível enviar agora. Tente novamente ou escreva para contato@vulpistudio.com.",
            "contact.validation": "Confira os campos destacados e tente novamente.",
            "contact.mailSubject": "Contato pelo site - Vulpi Studio",
            "testimonials.label": "Depoimentos de clientes",
            "testimonials.trackAria": "Carrossel de depoimentos",
            "testimonials.controlsAria": "Navegação de depoimentos",
            "testimonials.prevAria": "Depoimentos anteriores",
            "testimonials.nextAria": "Próximos depoimentos",
            "testimonials.quote1": "Foi mais do que eu esperava! Colaborei com o VulpiStudio no desenvolvimento do meu MVP, infelizmente não pude dizer que meu MVP era feio, a equipe se entregou muito durante os 8 meses de atuação.",
            "testimonials.role1": "(GuiaMoto app)",
            "testimonials.quote2": "Nosso ERP. Contratamos o VulpiStudio para participar do desenvolvimento do nosso ERP, a equipe atuou de ponta a ponta executando pesquisas, criando DS e elaborando as telas, gostamos tanto do resultado que desenvolvemos nosso site após o termino.",
            "testimonials.role2": "(EXTDS)",
            "testimonials.quote3": "Queríamos um site que fosse diferente do padrão dos sites de receitas. Falamos com o Felipe sobre a ideia e ele já nos trouxe uma proposta inicial. Gostamos do conceito de um site clean e minimalista. O resultado nos agradou bastante: um site completo, com o padrão que a gente queria.",
            "testimonials.role3": "(Pega a Receita)",
            "testimonials.quote4": "A ideia desse projeto era criar um site de receita que não fosse comum e cheio de informações como os atuais. O VulpiStudio conseguiu entregar um resultado alinhado com o que a gente imaginava: um site limpo e de alto padrão.",
            "testimonials.role4": "(Pega a Receita)",
            "testimonials.quote5": "Fechamos com o VulpiStudio para redesenhar nosso ERP, gostamos do resultado e combinamos de refazer o design do construtor de sites da nossa plataforma. O resultado foi extremamente agradável, o construtor ficou fácil de utilizar e o feedback que recebemos dos nossos clientes foi sempre positivo.",
            "testimonials.role5": "(Macle Sistemas)",
            "testimonials.quote6": "O trabalho realizado pela Vulpi nos surpreendeu positivamente desde o início. Nosso site já não refletia mais o momento, a estratégia e o posicionamento da nossa empresa. A Vulpi não apenas compreendeu essa necessidade, como também conseguiu entender nosso DNA, nosso processo e a essência do nosso negócio, traduzindo tudo isso de forma extremamente eficaz em uma presença digital muito mais alinhada, profissional e estratégica. Isso, para nós, é valor real. Recomendo com muita segurança e reconhecimento. Parabéns à Vulpi pelo excelente trabalho.",
            "testimonials.role6": "(CEO, MS Solutions)",
            "footer.copy": "Copyright 2026 - VulpiStudio.",
            "footer.email": "Email",
            "footer.address": "Endereço",
            "footer.social": "Social",
            "footer.backToTop": "Voltar ao topo",
            "case.eyebrow": "Aplicativo mobile",
            "case.title": "Exploid Game",
            "case.lead": "Uma experiência mobile pensada para ritmo, clareza e sensação constante de avanço.",
            "case.meta.clientLabel": "Cliente",
            "case.meta.clientValue": "Favorito do cliente",
            "case.meta.scopeLabel": "Escopo",
            "case.meta.scopeValue": "Game",
            "case.meta.yearLabel": "Ano",
            "case.meta.yearValue": "2020",
            "case.cta": "Fale sobre este case",
            "case.galleryAria": "Galeria do case",
            "case.image1Alt": "Visual principal do Exploid Game",
            "case.image2Alt": "Detalhe do sistema visual do Exploid Game",
            "case.image3Alt": "Variação editorial do Exploid Game",
            "case.image4Alt": "Composição abstrata complementar do case",
            "case.image5Alt": "Composição abstrata de apoio ao case",
            "case.image6Alt": "Conceito visual adicional do Exploid Game",
            "case.overviewLabel": "VISÃO GERAL",
            "case.overviewTitle": "Projeto pensado para velocidade, leitura rápida e um fluxo visual que mantém o jogador em movimento.",
            "case.overviewText1": "A direção do Exploid Game combina contraste forte, blocos limpos e uma hierarquia simples para reduzir atrito entre interesse e ação. O objetivo foi criar uma sensação imediata de energia sem perder clareza.",
            "case.overviewText2": "Cada tela prioriza leitura, progressão e foco no conteúdo. Assim, o usuário entende o que importa sem esforço e consegue avançar com menos hesitação.",
            "case.metricsAria": "Informações do projeto",
            "case.metric1Label": "Público",
            "case.metric1Value": "Jogadores casuais e competitivos",
            "case.metric2Label": "Objetivo",
            "case.metric2Value": "Fazer a experiência parecer rápida e premium",
            "case.metric3Label": "Foco",
            "case.metric3Value": "Clareza, progresso e retenção",
            "case.challengeLabel": "DESAFIO",
            "case.challengeTitle": "Construir uma interface que pareça viva, mas continue simples o suficiente para não atrapalhar a experiência.",
            "case.challengeText1": "O maior risco em jogos mobile é deixar a interface competir com a própria ação. Por isso, a composição visual foi pensada para reforçar movimento sem poluir a leitura.",
            "case.challengeText2": "O resultado é um sistema que sustenta ritmo, melhora entendimento e mantém a sensação de progresso em cada ponto de contato.",
        },
        "en-US": {
            "pageTitle": "Vulpi Studio | UX/UI, product and development",
            "metaDescription": "Vulpi Studio creates digital experiences focused on UX/UI, product, and development, combining clarity, performance, and technical execution.",
            "brand.aria": "Vulpi Studio home",
            "nav.aria": "Main navigation",
            "nav.home": "Home",
            "nav.about": "About",
            "nav.works": "Works",
            "nav.contact": "Contact",
            "lang.aria": "Language selection",
            "breadcrumb.aria": "Breadcrumb navigation",
            "hero.title1": "We create with purpose, every pixel",
            "hero.title2": "is intentional.",
            "hero.description": "We specialize in digital experiences that combine UX/UI, product, and development, delivering solutions that are clear, refined, and performant.",
            "hero.cta": "Get Started Now",
            "hero.imageAlt": "Abstract editorial visual",
            "hero.creditAria": "Image by Evie S. on Unsplash",
            "about.label": "About us",
            "about.description": "With years of experience in product design and development, we help teams turn ideas into clear, consistent, and efficient digital experiences. We create interfaces and products that balance usability, aesthetics, and performance.",
            "about.cta": "Contact us",
            "about.imageAlt": "Abstract composition inspired by product interfaces and websites",
            "about.creditAria": "Image by Hennie Stander on Unsplash",
            "works.label": "Recent works",
            "works.trackAria": "Recent works carousel",
            "works.controlsAria": "Works navigation",
            "works.prevAria": "Previous works",
            "works.nextAria": "Next works",
            "works.card1.title": "MS Solutions",
            "works.card1.category": "Institutional website",
            "works.card1.alt": "MS Solutions case cover image",
            "works.card1.linkAria": "Open the MS Solutions case",
            "works.card2.title": "Pega a Receita",
            "works.card2.category": "Recipe website",
            "works.card2.alt": "Pega a Receita case cover image",
            "works.card2.linkAria": "Open the Pega a Receita case",
            "works.card3.title": "Macle ERP",
            "works.card3.category": "ERP for shoe stores",
            "works.card3.alt": "Macle ERP case cover image",
            "works.card3.linkAria": "Open the Macle ERP case",
            "works.card4.title": "Macle Website Builder",
            "works.card4.category": "Website builder",
            "works.card4.alt": "Macle website builder case cover image",
            "works.card4.linkAria": "Open the Macle website builder case",
            "services.label": "Our services",
            "services.card1.title": "UI/UX Design",
            "services.card1.text": "We create beautiful, clear, and strategic websites designed to create value for the brand and the business.",
            "services.card2.title": "Web Development",
            "services.card2.text": "We build responsive websites with modern structure, performance-friendly code, and dependable interactions across devices.",
            "services.card3.title": "App Development",
            "services.card3.text": "We create intuitive mobile and web applications with a strong focus on usability, motion, and cross-platform consistency.",
            "services.card4.title": "Product Design",
            "services.card4.text": "We turn business needs into flows, prototypes, and interfaces ready for validation and iteration.",
            "services.cta": "Contact us",
            "contact.label": "Contact",
            "contact.description": "Fill out the form and share the project context, timeline, and what needs to be solved. I’ll get back with the next step.",
            "contact.nameLabel": "First and last name",
            "contact.namePlaceholder": "Your full name",
            "contact.phoneLabel": "Phone",
            "contact.phonePlaceholder": "(00) 00000-0000",
            "contact.emailLabel": "Email",
            "contact.emailPlaceholder": "you@example.com",
            "contact.serviceLabel": "Which service",
            "contact.servicePlaceholder": "Select a service",
            "contact.serviceOther": "Other",
            "contact.messageLabel": "Message",
            "contact.messagePlaceholder": "Tell me about your project, goals, and timeline.",
            "contact.submit": "Send",
            "contact.submitting": "Sending...",
            "contact.success": "Message sent successfully. I’ll reply from contato@vulpistudio.com.",
            "contact.error": "We couldn’t send it right now. Try again or write to contato@vulpistudio.com.",
            "contact.validation": "Check the highlighted fields and try again.",
            "contact.mailSubject": "Website inquiry - Vulpi Studio",
            "testimonials.label": "Client testimonials",
            "testimonials.trackAria": "Testimonial carousel",
            "testimonials.controlsAria": "Testimonial navigation",
            "testimonials.prevAria": "Previous testimonials",
            "testimonials.nextAria": "Next testimonials",
            "testimonials.quote1": "It was more than I expected! I worked with VulpiStudio on developing my MVP, and the team gave it their all over the eight months of work.",
            "testimonials.role1": "(GuiaMoto app)",
            "testimonials.quote2": "Our ERP. We hired VulpiStudio to join the development of our ERP. The team worked end to end, running research, creating the design system, and building the screens. We liked the result so much that we developed our website after the project was finished.",
            "testimonials.role2": "(EXTDS)",
            "testimonials.quote3": "We wanted a website that felt different from the usual recipe sites. We spoke with Felipe about the idea and he already brought us an initial proposal. We liked the concept of a clean, minimal site. The result made us very happy: a complete website that matched the standard we wanted.",
            "testimonials.role3": "(Pega a Receita)",
            "testimonials.quote4": "The goal of this project was to create a recipe website that wasn't generic or overloaded with information like the usual ones. VulpiStudio delivered a result aligned with what we had in mind: a clean, high-end site.",
            "testimonials.role4": "(Pega a Receita)",
            "testimonials.quote5": "We hired VulpiStudio to redesign our ERP, liked the result, and then decided to redesign the website builder for our platform as well. The outcome was extremely pleasing, the builder became easy to use, and the feedback from our clients was consistently positive.",
            "testimonials.role5": "(Macle Sistemas)",
            "testimonials.quote6": "Vulpi's work positively surprised us from the very beginning. Our website no longer reflected our company's moment, strategy, or positioning. Vulpi not only understood that need, but also grasped our DNA, our process, and the essence of our business, translating it all very effectively into a digital presence that is far more aligned, professional, and strategic. To us, that is real value. I recommend them with great confidence and appreciation. Congratulations to Vulpi on the excellent work.",
            "testimonials.role6": "(CEO, MS Solutions)",
            "footer.copy": "Copyright 2026 - VulpiStudio.",
            "footer.email": "Email",
            "footer.address": "Office Address",
            "footer.social": "Social",
            "footer.backToTop": "Back to top",
            "case.eyebrow": "Mobile App",
            "case.title": "Exploid Game",
            "case.lead": "A mobile experience built for pace, clarity, and a constant feeling of progress.",
            "case.meta.clientLabel": "Client",
            "case.meta.clientValue": "Client favorite",
            "case.meta.scopeLabel": "Scope",
            "case.meta.scopeValue": "Game",
            "case.meta.yearLabel": "Year",
            "case.meta.yearValue": "2020",
            "case.cta": "Talk about this case",
            "case.galleryAria": "Case gallery",
            "case.image1Alt": "Main visual for Exploid Game",
            "case.image2Alt": "Visual system detail for Exploid Game",
            "case.image3Alt": "Editorial variation of Exploid Game",
            "case.image4Alt": "Complementary abstract composition for the case",
            "case.image5Alt": "Supporting abstract composition for the case",
            "case.image6Alt": "Additional visual concept for Exploid Game",
            "case.overviewLabel": "OVERVIEW",
            "case.overviewTitle": "A project designed for speed, fast reading, and a visual flow that keeps the player moving.",
            "case.overviewText1": "The Exploid Game direction combines strong contrast, clean blocks, and a simple hierarchy to reduce friction between interest and action. The goal was to create an immediate sense of energy without losing clarity.",
            "case.overviewText2": "Each screen prioritizes readability, progression, and content focus. That way, the user understands what matters without effort and can move forward with less hesitation.",
            "case.metricsAria": "Project information",
            "case.metric1Label": "Audience",
            "case.metric1Value": "Casual and competitive players",
            "case.metric2Label": "Goal",
            "case.metric2Value": "Make the experience feel fast and premium",
            "case.metric3Label": "Focus",
            "case.metric3Value": "Clarity, progression and retention",
            "case.challengeLabel": "CHALLENGE",
            "case.challengeTitle": "Build an interface that feels alive while staying simple enough not to get in the way of the experience.",
            "case.challengeText1": "The biggest risk in mobile games is making the interface compete with the action itself. For that reason, the visual composition was designed to reinforce motion without polluting readability.",
            "case.challengeText2": "The result is a system that sustains pace, improves understanding, and maintains a sense of progression at every touchpoint.",
        },
    };

    const brazilTimeZones = new Set([
        "America/Sao_Paulo",
        "America/Fortaleza",
        "America/Recife",
        "America/Belem",
        "America/Maceio",
        "America/Noronha",
        "America/Manaus",
        "America/Cuiaba",
        "America/Campo_Grande",
        "America/Boa_Vista",
        "America/Rio_Branco",
        "America/Porto_Velho",
    ]);

    const readStorage = (key) => {
        try {
            return window.localStorage.getItem(key);
        } catch {
            return null;
        }
    };

    const writeStorage = (key, value) => {
        try {
            window.localStorage.setItem(key, value);
        } catch {
            return;
        }
    };

    const currentPageUrl = () => {
        const url = new URL(window.location.href);
        url.hash = "";
        url.search = "";
        url.pathname = url.pathname.replace(/index\.html?$/i, "");
        return url.href;
    };

    const absoluteAssetUrl = (assetPath) => new URL(assetPath, currentPageUrl()).href;

    const applySeoMetadata = (dictionary, locale) => {
        if (!isHomePage) {
            return;
        }

        const pageUrl = currentPageUrl();
        const imageUrl = absoluteAssetUrl(seoImagePath);
        const localeCode = locale === "pt-BR" ? "pt_BR" : "en_US";
        const alternateLocale = locale === "pt-BR" ? "en_US" : "pt_BR";

        if (descriptionMeta) {
            descriptionMeta.content = dictionary.metaDescription;
        }

        if (canonicalLink) {
            canonicalLink.href = pageUrl;
        }

        if (ogSiteNameMeta) {
            ogSiteNameMeta.content = siteName;
        }

        if (ogTypeMeta) {
            ogTypeMeta.content = "website";
        }

        if (ogLocaleMeta) {
            ogLocaleMeta.content = localeCode;
        }

        if (ogLocaleAlternateMeta) {
            ogLocaleAlternateMeta.content = alternateLocale;
        }

        if (ogTitleMeta) {
            ogTitleMeta.content = dictionary.pageTitle;
        }

        if (ogDescriptionMeta) {
            ogDescriptionMeta.content = dictionary.metaDescription;
        }

        if (ogUrlMeta) {
            ogUrlMeta.content = pageUrl;
        }

        if (ogImageMeta) {
            ogImageMeta.content = imageUrl;
        }

        if (ogImageAltMeta) {
            ogImageAltMeta.content = dictionary["hero.imageAlt"] || siteName;
        }

        if (twitterTitleMeta) {
            twitterTitleMeta.content = dictionary.pageTitle;
        }

        if (twitterDescriptionMeta) {
            twitterDescriptionMeta.content = dictionary.metaDescription;
        }

        if (twitterImageMeta) {
            twitterImageMeta.content = imageUrl;
        }

        if (twitterImageAltMeta) {
            twitterImageAltMeta.content = dictionary["hero.imageAlt"] || siteName;
        }

        document.title = dictionary.pageTitle;
    };

    const detectLocale = () => {
        const saved = readStorage(storageKey);
        if (saved === "pt-BR" || saved === "en-US") {
            return saved;
        }

        const languages = [navigator.language, ...(navigator.languages || [])]
            .filter(Boolean)
            .map((language) => language.toLowerCase());

        if (languages.some((language) => language.startsWith("pt"))) {
            return "pt-BR";
        }

        try {
            const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
            if (timeZone && brazilTimeZones.has(timeZone)) {
                return "pt-BR";
            }
        } catch {
            return "en-US";
        }

        return "en-US";
    };

    const applyLocale = (locale) => {
        const resolvedLocale = translations[locale] ? locale : "en-US";
        const dictionary = translations[resolvedLocale];

        document.documentElement.lang = resolvedLocale;
        document.documentElement.dataset.locale = resolvedLocale;
        applySeoMetadata(dictionary, resolvedLocale);

        textTargets.forEach((element) => {
            const key = element.dataset.i18n;
            if (dictionary[key] != null) {
                element.textContent = dictionary[key];
            }
        });

        attributeTargets.forEach((element) => {
            const key = element.dataset.i18nKey;
            const attributeName = element.dataset.i18nAttr;
            if (key && attributeName && dictionary[key] != null) {
                element.setAttribute(attributeName, dictionary[key]);
            }
        });

        localeButtons.forEach((button) => {
            const active = button.dataset.lang === resolvedLocale;
            button.classList.toggle("is-active", active);
            button.setAttribute("aria-pressed", String(active));
        });

        return resolvedLocale;
    };

    let activeLocale = applyLocale(detectLocale());

    localeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const selectedLocale = button.dataset.lang;
            if (!selectedLocale || selectedLocale === activeLocale) {
                return;
            }

            activeLocale = applyLocale(selectedLocale);
            writeStorage(storageKey, selectedLocale);
        });
    });

    const revealTargets = Array.from(document.querySelectorAll("[data-reveal]"));

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
        revealTargets.forEach((element) => element.classList.add("is-visible"));
    } else {
        const revealObserver = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) {
                        return;
                    }

                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                });
            },
            {
                threshold: 0.15,
                rootMargin: "0px 0px -8% 0px",
            },
        );

        revealTargets.forEach((element) => revealObserver.observe(element));
    }

    const setupWorksCarousel = () => {
        const track = document.querySelector('[data-carousel-track="works"]');

        if (!track) {
            return;
        }

        const cards = Array.from(track.children).filter((child) => child.classList.contains("work-card"));
        track.dataset.carouselItemCount = String(cards.length);

        if (cards.length <= 4) {
            return;
        }

        const pages = [];

        cards.forEach((card, index) => {
            const pageIndex = Math.floor(index / 4);
            const page = pages[pageIndex] || document.createElement("div");

            if (!pages[pageIndex]) {
                page.className = "works-page";
                pages.push(page);
            }

            page.appendChild(card);
        });

        track.replaceChildren(...pages);
        track.classList.add("has-carousel");
    };

    setupWorksCarousel();

    const bindCarousel = (track, prevButton, nextButton) => {
        if (!track || !prevButton || !nextButton) {
            return;
        }

        const behavior = prefersReducedMotion ? "auto" : "smooth";
        const getItems = () => Array.from(track.children).filter((child) => child instanceof HTMLElement);
        const getMaxScrollLeft = () => Math.max(0, track.scrollWidth - track.clientWidth);
        const controls = prevButton.closest("[data-carousel-controls]");
        const showsOnlyWhenMoreThanFour = controls?.dataset.carouselControls === "more-than-four";

        const scrollToLeft = (left) => {
            const targetLeft = Math.max(0, Math.min(left, getMaxScrollLeft()));

            if (typeof track.scrollTo === "function") {
                track.scrollTo({ left: targetLeft, behavior });
            } else {
                track.scrollLeft = targetLeft;
            }
        };

        const updateButtonState = () => {
            const itemCount = Number(track.dataset.carouselItemCount) || getItems().length;
            const hasMoreThanFourItems = itemCount > 4;
            const maxScrollLeft = getMaxScrollLeft();
            const atStart = track.scrollLeft <= 1;
            const atEnd = track.scrollLeft >= maxScrollLeft - 1;
            const controlsAvailable = !showsOnlyWhenMoreThanFour || hasMoreThanFourItems;

            if (showsOnlyWhenMoreThanFour) {
                controls.hidden = !hasMoreThanFourItems;
            }

            prevButton.disabled = !controlsAvailable || atStart;
            nextButton.disabled = !controlsAvailable || atEnd;
            prevButton.setAttribute("aria-disabled", String(!controlsAvailable || atStart));
            nextButton.setAttribute("aria-disabled", String(!controlsAvailable || atEnd));
        };

        const goToAdjacentItem = (direction) => {
            const items = getItems();

            if (!items.length) {
                return;
            }

            const currentLeft = track.scrollLeft;

            if (direction < 0) {
                const previousItems = items.filter((item) => item.offsetLeft < currentLeft - 1);
                const previousItem = previousItems.at(-1);
                scrollToLeft(previousItem ? previousItem.offsetLeft : 0);
                return;
            }

            const nextItem = items.find((item) => item.offsetLeft > currentLeft + 1);
            scrollToLeft(nextItem ? nextItem.offsetLeft : getMaxScrollLeft());
        };

        prevButton.addEventListener("click", (event) => {
            event.preventDefault();
            goToAdjacentItem(-1);
        });

        nextButton.addEventListener("click", (event) => {
            event.preventDefault();
            goToAdjacentItem(1);
        });

        track.addEventListener("scroll", updateButtonState, { passive: true });
        window.addEventListener("resize", updateButtonState);
        updateButtonState();
    };

    bindCarousel(
        document.querySelector('[data-carousel-track="works"]'),
        document.querySelector("[data-works-prev]"),
        document.querySelector("[data-works-next]"),
    );

    bindCarousel(
        document.querySelector('[data-carousel-track="testimonials"]'),
        document.querySelector("[data-carousel-prev]"),
        document.querySelector("[data-carousel-next]"),
    );

    const contactForm = document.querySelector("[data-contact-form]");
    const contactStatus = document.querySelector("[data-contact-status]");
    const contactSubmitButton = contactForm?.querySelector(".contact-submit");
    const contactEndpoint = "https://formsubmit.co/ajax/contato@vulpistudio.com";

    const formatPhoneNumber = (value) => {
        const digits = value.replace(/\D/g, "").slice(0, 11);

        if (!digits) {
            return "";
        }

        if (digits.length <= 2) {
            return digits.length === 2 ? `(${digits})` : `(${digits}`;
        }

        const areaCode = digits.slice(0, 2);
        const subscriber = digits.slice(2);

        if (subscriber.length <= 4) {
            return `(${areaCode}) ${subscriber}`;
        }

        if (subscriber.length <= 8) {
            return `(${areaCode}) ${subscriber.slice(0, 4)}-${subscriber.slice(4)}`;
        }

        return `(${areaCode}) ${subscriber.slice(0, 5)}-${subscriber.slice(5)}`;
    };

    Array.from(document.querySelectorAll("[data-phone-mask]")).forEach((input) => {
        const syncValue = () => {
            input.value = formatPhoneNumber(input.value);
        };

        input.addEventListener("input", syncValue);
        input.addEventListener("blur", syncValue);
    });

    const setContactStatus = (variant, message) => {
        if (!contactStatus) {
            return;
        }

        contactStatus.classList.remove("is-success", "is-error");
        if (variant) {
            contactStatus.classList.add(`is-${variant}`);
        }

        contactStatus.textContent = message || "";
    };

    if (contactForm) {
        contactForm.addEventListener("submit", async (event) => {
            event.preventDefault();

            const dictionary = translations[activeLocale] || translations["pt-BR"];

            if (!contactForm.reportValidity()) {
                setContactStatus("error", dictionary["contact.validation"] || "Confira os campos destacados e tente novamente.");
                return;
            }

            const submitLabel = contactSubmitButton?.textContent || dictionary["contact.submit"] || "Enviar";
            const formData = new FormData(contactForm);
            const contactEmail = String(formData.get("email") || "").trim();
            const subject = dictionary["contact.mailSubject"] || "Contato pelo site - Vulpi Studio";

            formData.set("_replyto", contactEmail);
            formData.set("_subject", subject);
            formData.set("_template", "table");
            formData.set("_captcha", "false");
            formData.set("_url", window.location.href.split("#")[0]);

            setContactStatus("", dictionary["contact.submitting"] || "Enviando...");

            if (contactSubmitButton) {
                contactSubmitButton.disabled = true;
                contactSubmitButton.textContent = dictionary["contact.submitting"] || "Enviando...";
            }

            try {
                const response = await fetch(contactEndpoint, {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                    },
                    body: formData,
                });

                const payload = await response.json().catch(() => null);

                if (!response.ok || payload?.success === false) {
                    throw new Error(payload?.message || "Form submission failed.");
                }

                contactForm.reset();
                setContactStatus("success", dictionary["contact.success"] || "Mensagem enviada com sucesso.");
            } catch (error) {
                setContactStatus("error", dictionary["contact.error"] || "N�o foi poss�vel enviar agora.");
            } finally {
                if (contactSubmitButton) {
                    contactSubmitButton.disabled = false;
                    contactSubmitButton.textContent = submitLabel;
                }
            }
        });
    }

    document.documentElement.classList.add("js-ready");
});
