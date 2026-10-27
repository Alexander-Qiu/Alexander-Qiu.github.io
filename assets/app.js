(() => {
  const root = document.documentElement;
  const read = (key) => {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  };
  const save = (key, value) => {
    try {
      localStorage.setItem(key, value);
    } catch {
      /* Preferences are optional. */
    }
  };
  let language = read("aq-language") === "zh" ? "zh" : "en";
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  let theme = read("aq-theme") || (media.matches ? "dark" : "light");
  const languageButton = document.querySelector("#language");
  const themeButton = document.querySelector("#theme");
  const applyTheme = () => {
    root.dataset.theme = theme;
    themeButton.setAttribute(
      "aria-label",
      language === "zh"
        ? theme === "dark"
          ? "切换浅色模式"
          : "切换深色模式"
        : theme === "dark"
          ? "Switch to light mode"
          : "Switch to dark mode",
    );
    themeButton.setAttribute("aria-pressed", String(theme === "dark"));
    document.querySelector('meta[name="theme-color"]').content =
      theme === "dark" ? "#1b1c1e" : "#fafafa";
  };
  const applyLanguage = () => {
    root.lang = language === "zh" ? "zh-CN" : "en";
    document.querySelectorAll("[data-en][data-zh]").forEach((el) => {
      el.textContent = el.dataset[language];
    });
    languageButton.textContent = language === "zh" ? "EN" : "中文";
    languageButton.setAttribute(
      "aria-label",
      language === "zh" ? "Switch to English" : "切换到中文",
    );
    document.title =
      language === "zh" ? "邱睿智 · Alexander Qiu" : "Alexander Qiu";
    applyTheme();
  };
  languageButton.addEventListener("click", () => {
    language = language === "en" ? "zh" : "en";
    save("aq-language", language);
    applyLanguage();
  });
  themeButton.addEventListener("click", () => {
    theme = theme === "light" ? "dark" : "light";
    save("aq-theme", theme);
    applyTheme();
  });
  media.addEventListener("change", (event) => {
    if (!read("aq-theme")) {
      theme = event.matches ? "dark" : "light";
      applyTheme();
    }
  });
  document.querySelector("#year").textContent = new Date().getFullYear();
  applyLanguage();
})();
