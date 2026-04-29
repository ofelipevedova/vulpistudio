document.addEventListener("DOMContentLoaded", () => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const breadcrumbTargets = Array.from(document.querySelectorAll("[data-case-breadcrumb]"));
    const headingTargets = Array.from(document.querySelectorAll("[data-case-title]"));
    const legacyCaseTargets = Array.from(document.querySelectorAll("[data-case-name]"));
    const descriptionMeta = document.querySelector('meta[name="description"]');
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    const ogTypeMeta = document.querySelector('meta[property="og:type"]');
    const ogTitleMeta = document.querySelector('meta[property="og:title"]');
    const ogDescriptionMeta = document.querySelector('meta[property="og:description"]');
    const ogUrlMeta = document.querySelector('meta[property="og:url"]');
    const twitterTitleMeta = document.querySelector('meta[name="twitter:title"]');
    const twitterDescriptionMeta = document.querySelector('meta[name="twitter:description"]');
    const loadableImages = Array.from(document.querySelectorAll("img.media-load"));
    const revealTargets = Array.from(document.querySelectorAll(".reveal"));
    const isTemplatePage = document.body.dataset.caseTemplate === "true";

    const acronyms = new Set([
        "ai",
        "api",
        "b2b",
        "b2c",
        "crm",
        "erp",
        "mvp",
        "seo",
        "ui",
        "ux",
    ]);

    const smallWords = new Set([
        "a",
        "as",
        "ao",
        "aos",
        "da",
        "das",
        "de",
        "do",
        "dos",
        "e",
        "em",
        "na",
        "nas",
        "no",
        "nos",
        "para",
        "por",
        "sem",
        "sob",
        "sobre",
        "com",
    ]);

    const resolveSlug = () => {
        const pathname = window.location.pathname.replace(/\/+$/, "");
        const segments = pathname.split("/").filter(Boolean);
        const lastSegment = segments.at(-1) || "";
        const slug = lastSegment.replace(/\.html?$/i, "");

        if (slug && slug !== "index") {
            return slug;
        }

        return segments.at(-2) || slug || "case";
    };

    const slugToTitle = (slug) =>
        slug
            .split("-")
            .filter(Boolean)
            .map((part, index, parts) => {
                const lower = part.toLowerCase();

                if (acronyms.has(lower)) {
                    return lower.toUpperCase();
                }

                if (smallWords.has(lower) && index > 0 && index < parts.length - 1) {
                    return lower;
                }

                return lower.charAt(0).toUpperCase() + lower.slice(1);
            })
            .join(" ");

    const currentUrl = new URL(window.location.href);
    currentUrl.hash = "";
    currentUrl.search = "";

    if (!isTemplatePage) {
        const slug = resolveSlug();
        const caseTitle = slugToTitle(slug);
        const caseBreadcrumb = document.body.dataset.caseName?.trim() || caseTitle;
        const caseHeading = document.body.dataset.caseHeading?.trim() || document.body.dataset.caseTitle?.trim() || caseTitle;
        const titleParts = caseBreadcrumb && caseHeading && caseBreadcrumb !== caseHeading
            ? [caseBreadcrumb, caseHeading, "Vulpi Studio"]
            : [caseHeading || caseBreadcrumb, "Vulpi Studio"];
        const finalTitle = titleParts.filter(Boolean).join(" | ");

        if (breadcrumbTargets.length || headingTargets.length) {
            breadcrumbTargets.forEach((element) => {
                element.textContent = caseBreadcrumb;
            });

            headingTargets.forEach((element) => {
                element.textContent = caseHeading;
            });
        } else {
            legacyCaseTargets.forEach((element) => {
                element.textContent = caseTitle;
            });
        }

        document.title = finalTitle;

        if (canonicalLink) {
            canonicalLink.href = currentUrl.href;
        }

        if (ogTypeMeta) {
            ogTypeMeta.content = "article";
        }

        if (ogTitleMeta) {
            ogTitleMeta.content = finalTitle;
        }

        if (twitterTitleMeta) {
            twitterTitleMeta.content = finalTitle;
        }

        if (ogUrlMeta) {
            ogUrlMeta.content = currentUrl.href;
        }

        if (descriptionMeta && ogDescriptionMeta) {
            ogDescriptionMeta.content = descriptionMeta.content;
        }

        if (descriptionMeta && twitterDescriptionMeta) {
            twitterDescriptionMeta.content = descriptionMeta.content;
        }
    }

    const markLoaded = (image) => {
        image.classList.add("is-loaded");
    };

    loadableImages.forEach((image) => {
        if (image.complete) {
            markLoaded(image);
            return;
        }

        image.addEventListener(
            "load",
            () => {
                markLoaded(image);
            },
            { once: true },
        );

        image.addEventListener(
            "error",
            () => {
                markLoaded(image);
            },
            { once: true },
        );
    });

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
        revealTargets.forEach((element) => {
            element.classList.add("is-visible");
        });
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
                threshold: 0.16,
                rootMargin: "0px 0px -8% 0px",
            },
        );

        revealTargets.forEach((element) => revealObserver.observe(element));
    }

    document.documentElement.classList.add("js-ready");
});
