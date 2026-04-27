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
            "pageTitle": "Vulpi Studio | Design de marca, UI/UX e front-end",
            "metaDescription": "Vulpi Studio cria marcas, interfaces e sites premium com estratÃ©gia, branding, UI/UX e front-end focados em clareza, performance e presenÃ§a digital.",
            "brand.aria": "InÃ­cio da Vulpi Studio",
            "nav.aria": "NavegaÃ§Ã£o principal",
            "nav.home": "InÃ­cio",
            "nav.about": "Sobre",
            "nav.works": "Cases",
            "nav.contact": "Contato",
            "lang.aria": "SeleÃ§Ã£o de idioma",
            "breadcrumb.aria": "Caminho de navegaÃ§Ã£o",
            "hero.title1": "Criamos com propÃ³sito, cada pixel",
            "hero.title2": "Ã© intencional.",
            "hero.description": "Aqui no Vulpi Studio, nÃ³s criamos marcas, interfaces e sites premium com estratÃ©gia, branding, UI/UX e front-end focados em clareza, performance e presenÃ§a digital.",
            "hero.cta": "ComeÃ§ar agora",
            "hero.imageAlt": "Visual editorial abstrato",
            "hero.creditAria": "Imagem de Evie S. no Unsplash",
            "about.label": "Sobre nÃ³s",
            "about.description": "Vulpi Studio Ã© uma parceira de design focada em marcas que precisam de estratÃ©gia, identidade e execuÃ§Ã£o digital sem fricÃ§Ã£o desnecessÃ¡ria ou repasses dispersos.",
            "about.cta": "Entre em contato",
            "about.imageAlt": "ComposiÃ§Ã£o abstrata inspirada em sistemas de branding e design de produto",
            "about.creditAria": "Imagem de Hennie Stander no Unsplash",
            "works.label": "Cases recentes",
            "works.trackAria": "Carrossel de cases recentes",
            "works.controlsAria": "NavegaÃ§Ã£o de cases",
            "works.prevAria": "Cases anteriores",
            "works.nextAria": "PrÃ³ximos cases",
            "works.card1.title": "Pega a Receita",
            "works.card1.category": "Site de receitas",
            "works.card1.alt": "Imagem de capa do case Pega a Receita",
            "works.card1.linkAria": "Abrir o case Pega a Receita",
            "works.card2.title": "Website Builder Macle",
            "works.card2.category": "Construtor de sites",
            "works.card2.alt": "Imagem de capa do case Website Builder Macle",
            "works.card2.linkAria": "Abrir o case Website Builder Macle",
            "works.card3.title": "Fashion Brand",
            "works.card3.category": "Branding",
            "works.card3.alt": "Conceito editorial de identidade Fashion Brand",
            "services.label": "Nossos serviÃ§os",
            "services.card1.title": "UI/UX Design",
            "services.card1.text": "NÃ³s estruturamos fluxos, interfaces e sistemas visuais que parecem calmos, claros e sofisticados desde a primeira tela.",
            "services.card2.title": "Desenvolvimento Web",
            "services.card2.text": "NÃ³s construÃ­mos sites responsivos com estrutura moderna, cÃ³digo eficiente e interaÃ§Ãµes confiÃ¡veis em todos os dispositivos.",
            "services.card3.title": "Desenvolvimento de Apps",
            "services.card3.text": "NÃ³s criamos aplicativos mÃ³veis e web intuitivos com foco em usabilidade, movimento e consistÃªncia entre plataformas.",
            "services.card4.title": "Consultoria de design",
            "services.card4.text": "NÃ³s apoiamos decisÃµes de posicionamento, identidade e produto com direÃ§Ã£o clara quando a marca precisa de um sistema visual mais afiado.",
            "services.card5.title": "GestÃ£o de Social Media",
            "services.card5.text": "NÃ³s planejamos conteÃºdo, consistÃªncia visual e direÃ§Ã£o criativa para manter a marca presente e coerente nas redes.",
            "services.card6.title": "Branding",
            "services.card6.text": "NÃ³s desenvolvemos posicionamento, identidade visual e sistemas de marca que sustentam clareza, diferenciaÃ§Ã£o e percepÃ§Ã£o premium.",
            "services.cta": "Entre em contato",
            "contact.label": "Contato",
            "contact.description": "Preencha o formulÃ¡rio e me conte o contexto do projeto, o prazo e o que vocÃª precisa resolver. Eu retorno com a prÃ³xima etapa.",
            "contact.nameLabel": "Nome e sobrenome",
            "contact.namePlaceholder": "Seu nome completo",
            "contact.phoneLabel": "Telefone",
            "contact.phonePlaceholder": "(00) 00000-0000",
            "contact.emailLabel": "Email",
            "contact.emailPlaceholder": "voce@exemplo.com",
            "contact.servicePlaceholder": "Selecione um serviÃ§o",
            "contact.serviceOther": "Outro",
            "contact.messagePlaceholder": "Conte sobre seu projeto, objetivos e prazo.",
            "contact.submit": "Enviar",
            "contact.note": "Sua mensagem serÃ¡ enviada para contato@vulpistudio.com e a confirmação ou o erro aparecem aqui na tela.",
            "contact.submitting": "Enviando...",
            "contact.success": "Mensagem enviada com sucesso. Vou responder em contato@vulpistudio.com.",
            "contact.error": "NÃ£o foi possÃ­vel enviar agora. Tente novamente ou escreva para contato@vulpistudio.com.",
            "contact.validation": "Confira os campos destacados e tente novamente.",
            "contact.mailSubject": "Contato pelo site - Vulpi Studio",
            "testimonials.label": "Depoimentos de clientes",
            "testimonials.trackAria": "Carrossel de depoimentos",
            "testimonials.controlsAria": "NavegaÃ§Ã£o de depoimentos",
            "testimonials.prevAria": "Depoimentos anteriores",
            "testimonials.nextAria": "PrÃ³ximos depoimentos",
            "testimonials.quote1": "Foi mais do que eu esperava! Colaborei com o VulpiStudio no desenvolvimento do meu MVP, infelizmente nÃ£o pude dizer que meu MVP era feio, a equipe se entregou muito durante os 8 meses de atuaÃ§Ã£o.",
            "testimonials.role1": "(GuiaMoto app)",
            "testimonials.quote2": "Nosso ERP. Contratamos o VulpiStudio para participar do desenvolvimento do nosso ERP, a equipe atuou de ponta a ponta executando pesquisas, criando DS e elaborando as telas, gostamos tanto do resultado que desenvolvemos nosso site apÃ³s o termino.",
            "testimonials.role2": "(EXTDS)",
            "testimonials.quote3": "QuerÃ­amos um site que fosse diferente do padrÃ£o dos sites de receitas. Falamos com o Felipe sobre a ideia e ele jÃ¡ nos trouxe uma proposta inicial. Gostamos do conceito de um site clean e minimalista. O resultado nos agradou bastante: um site completo, com o padrÃ£o que a gente queria.",
            "testimonials.role3": "(Pega a Receita)",
            "testimonials.quote4": "A ideia desse projeto era criar um site de receita que nÃ£o fosse comum e cheio de informaÃ§Ãµes como os atuais. O VulpiStudio conseguiu entregar um resultado alinhado com o que a gente imaginava: um site limpo e de alto padrÃ£o.",
            "testimonials.role4": "(Pega a Receita)",
            "testimonials.quote5": "Fechamos com o VulpiStudio para redesenhar nosso ERP, gostamos do resultado e combinamos de refazer o design do construtor de sites da nossa plataforma. O resultado foi extremamente agradÃ¡vel, o construtor ficou fÃ¡cil de utilizar e o feedback que recebemos dos nossos clientes foi sempre positivo.",
            "testimonials.role5": "(Macle Sistemas)",
            "footer.copy": "Copyright 2026 - VulpiStudio.",
            "footer.email": "Email",
            "footer.address": "EndereÃ§o",
            "footer.social": "Social",
            "footer.backToTop": "Voltar ao topo",
            "case.eyebrow": "Aplicativo mobile",
            "case.title": "Exploid Game",
            "case.lead": "Uma experiÃªncia mobile pensada para ritmo, clareza e sensaÃ§Ã£o constante de avanÃ§o.",
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
            "case.image3Alt": "VariaÃ§Ã£o editorial do Exploid Game",
            "case.image4Alt": "ComposiÃ§Ã£o abstrata complementar do case",
            "case.image5Alt": "ComposiÃ§Ã£o abstrata de apoio ao case",
            "case.image6Alt": "Conceito visual adicional do Exploid Game",
            "case.overviewLabel": "VISÃƒO GERAL",
            "case.overviewTitle": "Projeto pensado para velocidade, leitura rÃ¡pida e um fluxo visual que mantÃ©m o jogador em movimento.",
            "case.overviewText1": "A direÃ§Ã£o do Exploid Game combina contraste forte, blocos limpos e uma hierarquia simples para reduzir atrito entre interesse e aÃ§Ã£o. O objetivo foi criar uma sensaÃ§Ã£o imediata de energia sem perder clareza.",
            "case.overviewText2": "Cada tela prioriza leitura, progressÃ£o e foco no conteÃºdo. Assim, o usuÃ¡rio entende o que importa sem esforÃ§o e consegue avanÃ§ar com menos hesitaÃ§Ã£o.",
            "case.metricsAria": "InformaÃ§Ãµes do projeto",
            "case.metric1Label": "PÃºblico",
            "case.metric1Value": "Jogadores casuais e competitivos",
            "case.metric2Label": "Objetivo",
            "case.metric2Value": "Fazer a experiÃªncia parecer rÃ¡pida e premium",
            "case.metric3Label": "Foco",
            "case.metric3Value": "Clareza, progresso e retenÃ§Ã£o",
            "case.challengeLabel": "DESAFIO",
            "case.challengeTitle": "Construir uma interface que pareÃ§a viva, mas continue simples o suficiente para nÃ£o atrapalhar a experiÃªncia.",
            "case.challengeText1": "O maior risco em jogos mobile Ã© deixar a interface competir com a prÃ³pria aÃ§Ã£o. Por isso, a composiÃ§Ã£o visual foi pensada para reforÃ§ar movimento sem poluir a leitura.",
            "case.challengeText2": "O resultado Ã© um sistema que sustenta ritmo, melhora entendimento e mantÃ©m a sensaÃ§Ã£o de progresso em cada ponto de contato.",
        },
        "en-US": {
            "pageTitle": "Vulpi Studio | Brand design, UI/UX and front-end",
            "metaDescription": "Vulpi Studio designs premium brands, interfaces, and websites with strategy, branding, UI/UX, and front-end built for clarity, performance, and digital presence.",
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
            "hero.description": "Here at Vulpi Studio, we create premium brands, interfaces, and websites with strategy, branding, UI/UX, and front-end focused on clarity, performance, and digital presence.",
            "hero.cta": "Get Started Now",
            "hero.imageAlt": "Abstract editorial visual",
            "hero.creditAria": "Image by Evie S. on Unsplash",
            "about.label": "About us",
            "about.description": "Vulpi Studio is a focused design partner for brands that need strategy, identity, and digital execution without unnecessary friction or scattered handoffs.",
            "about.cta": "Contact us",
            "about.imageAlt": "Abstract composition inspired by branding systems and product design",
            "about.creditAria": "Image by Hennie Stander on Unsplash",
            "works.label": "Recent works",
            "works.trackAria": "Recent works carousel",
            "works.controlsAria": "Works navigation",
            "works.prevAria": "Previous works",
            "works.nextAria": "Next works",
            "works.card1.title": "Pega a Receita",
            "works.card1.category": "Recipe website",
            "works.card1.alt": "Pega a Receita case cover image",
            "works.card1.linkAria": "Open the Pega a Receita case",
            "works.card2.title": "Website Builder Macle",
            "works.card2.category": "Website builder",
            "works.card2.alt": "Website Builder Macle case cover image",
            "works.card2.linkAria": "Open the Website Builder Macle case",
            "works.card3.title": "Fashion Brand",
            "works.card3.category": "Branding",
            "works.card3.alt": "Fashion Brand editorial identity concept",
            "services.label": "Our services",
            "services.card1.title": "UI/UX Design",
            "services.card1.text": "We shape product flows, interfaces, and visual systems that feel calm, clear, and high-end from the first screen.",
            "services.card2.title": "Web Development",
            "services.card2.text": "We build responsive websites with modern structure, performance-friendly code, and dependable interactions across devices.",
            "services.card3.title": "App Development",
            "services.card3.text": "We create intuitive mobile and web applications with a strong focus on usability, motion, and cross-platform consistency.",
            "services.card4.title": "Design Consulting",
            "services.card4.text": "We support positioning, identity, and product decisions with clear direction when a brand needs a sharper visual system.",
            "services.card5.title": "Social Media Management",
            "services.card5.text": "We plan content, visual consistency, and creative direction to keep the brand present and coherent across social channels.",
            "services.card6.title": "Branding",
            "services.card6.text": "We develop positioning, visual identity, and brand systems that support clarity, differentiation, and premium perception.",
            "services.cta": "Contact us",
            "contact.label": "Contact",
            "contact.description": "Fill out the form and share the project context, timeline, and what needs to be solved. Iâ€™ll get back with the next step.",
            "contact.nameLabel": "First and last name",
            "contact.namePlaceholder": "Your full name",
            "contact.phoneLabel": "Phone",
            "contact.phonePlaceholder": "(00) 00000-0000",
            "contact.emailLabel": "Email",
            "contact.emailPlaceholder": "you@example.com",
            "contact.servicePlaceholder": "Select a service",
            "contact.serviceOther": "Other",
            "contact.messagePlaceholder": "Tell me about your project, goals, and timeline.",
            "contact.submit": "Send",
            "contact.note": "Your message will be sent to contato@vulpistudio.com and the confirmation or error will appear here.",
            "contact.submitting": "Sending...",
            "contact.success": "Message sent successfully. Iâ€™ll reply from contato@vulpistudio.com.",
            "contact.error": "We couldnâ€™t send it right now. Try again or write to contato@vulpistudio.com.",
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

    const bindCarousel = (track, prevButton, nextButton) => {
        if (!track || !prevButton || !nextButton) {
            return;
        }

        const scrollDistance = () => Math.max(320, Math.round(track.clientWidth * 0.82));
        const behavior = prefersReducedMotion ? "auto" : "smooth";

        prevButton.addEventListener("click", () => {
            track.scrollBy({ left: -scrollDistance(), behavior });
        });

        nextButton.addEventListener("click", () => {
            track.scrollBy({ left: scrollDistance(), behavior });
        });
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
    );const contactForm = document.querySelector("[data-contact-form]");
    const contactFrame = document.querySelector("[data-contact-frame]");
    const contactStatus = document.querySelector("[data-contact-status]");
    const contactSubmitButton = contactForm?.querySelector(".contact-submit");
    // Fallback for local previews; the live site uses the current page URL.
    const contactFallbackBaseUrl = "https://ofelipevedova.github.io/vulpistudio/";
    const contactPageUrl = window.location.protocol === "file:"
        ? contactFallbackBaseUrl
        : window.location.href.split("#")[0];
    const contactSuccessUrl = window.location.protocol === "file:"
        ? new URL("contact-success.html", contactFallbackBaseUrl).href
        : new URL("contact-success.html", window.location.href).href;
    let contactSubmissionTimeoutId = null;
    let contactSubmissionLabel = contactSubmitButton?.textContent || "Enviar";
    let contactMessageHandler = null;
    let contactSubmissionActive = false;

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

    const clearContactSubmissionState = () => {
        contactSubmissionActive = false;

        if (contactSubmissionTimeoutId) {
            window.clearTimeout(contactSubmissionTimeoutId);
            contactSubmissionTimeoutId = null;
        }

        if (contactMessageHandler) {
            window.removeEventListener("message", contactMessageHandler);
            contactMessageHandler = null;
        }

        if (contactSubmitButton) {
            contactSubmitButton.disabled = false;
            contactSubmitButton.textContent = contactSubmissionLabel;
        }
    };

    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const dictionary = translations[activeLocale] || translations["pt-BR"];

            if (!contactForm.reportValidity()) {
                setContactStatus("error", dictionary["contact.validation"] || "Confira os campos e tente novamente.");
                return;
            }

            const submitLabel = contactSubmitButton?.textContent || dictionary["contact.submit"] || "Enviar";
            const replyToInput = contactForm.querySelector('input[name="_replyto"]');
            const urlInput = contactForm.querySelector('input[name="_url"]');
            const nextInput = contactForm.querySelector('input[name="_next"]');
            const emailInput = contactForm.querySelector('input[name="email"]');
            const contactEmail = String(emailInput?.value || "").trim();

            setContactStatus("", dictionary["contact.submitting"] || "Enviando...");

            clearContactSubmissionState();
            contactSubmissionActive = true;
            contactSubmissionLabel = submitLabel;

            if (contactSubmitButton) {
                contactSubmitButton.disabled = true;
                contactSubmitButton.textContent = dictionary["contact.submitting"] || "Enviando...";
            }

            if (replyToInput) {
                replyToInput.value = contactEmail;
            }

            if (urlInput) {
                urlInput.value = contactPageUrl;
            }

            if (nextInput) {
                nextInput.value = contactSuccessUrl;
            }

            contactMessageHandler = (messageEvent) => {
                if (!contactSubmissionActive || !contactFrame) {
                    return;
                }

                if (messageEvent.source !== contactFrame.contentWindow) {
                    return;
                }

                if (!messageEvent.data || messageEvent.data.type !== "contact-form-success") {
                    return;
                }

                contactForm.reset();
                clearContactSubmissionState();
                setContactStatus("success", dictionary["contact.success"] || "Mensagem enviada com sucesso.");
            };

            window.addEventListener("message", contactMessageHandler);

            contactSubmissionTimeoutId = window.setTimeout(() => {
                if (!contactSubmissionActive) {
                    return;
                }

                clearContactSubmissionState();
                setContactStatus("error", dictionary["contact.error"] || "Não foi possível enviar agora.");
            }, 15000);

            try {
                contactForm.submit();
            } catch (error) {
                clearContactSubmissionState();
                setContactStatus("error", dictionary["contact.error"] || "Não foi possível enviar agora.");
            }
        });
    }

    document.documentElement.classList.add("js-ready");
});
