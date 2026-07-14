(() => {
    const supportedLanguages = ["en", "de"];
    const queryLanguage = new URLSearchParams(window.location.search).get("lang");
    const savedLanguage = localStorage.getItem("mindMatterLanguage");
    const browserLanguage = (navigator.languages?.[0] || navigator.language || "en").toLowerCase();
    const detectedLanguage = browserLanguage.startsWith("de") ? "de" : "en";
    let language = supportedLanguages.includes(queryLanguage)
        ? queryLanguage
        : supportedLanguages.includes(savedLanguage)
            ? savedLanguage
            : detectedLanguage;

    function applyLanguage(nextLanguage) {
        language = supportedLanguages.includes(nextLanguage) ? nextLanguage : "en";
        document.documentElement.lang = language;
        document.title = language === "de"
            ? "Datenschutz | Mind Matter Art"
            : "Privacy | Mind Matter Art";

        document.querySelectorAll("[data-legal-lang]").forEach((section) => {
            section.hidden = section.dataset.legalLang !== language;
        });

        document.querySelectorAll("[data-legal-lang-button]").forEach((button) => {
            const active = button.dataset.legalLangButton === language;
            button.classList.toggle("is-active", active);
            button.setAttribute("aria-pressed", String(active));
        });

        localStorage.setItem("mindMatterLanguage", language);
        const url = new URL(window.location.href);
        url.searchParams.set("lang", language);
        history.replaceState(null, "", url);
    }

    document.querySelectorAll("[data-legal-lang-button]").forEach((button) => {
        button.addEventListener("click", () => applyLanguage(button.dataset.legalLangButton));
    });

    applyLanguage(language);
})();
