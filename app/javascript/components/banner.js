import Typed from 'typed.js';

function loadDynamicBannerText() {
  new Typed('#banner-typed-text', {
    strings: ["un Mojito", "un Gin Tonic", "une Caipirhina", "un Daiquiri", "un Old Fashion", "une Margarita"],
    typeSpeed: 100,
    loop: true
  });
}

export { loadDynamicBannerText };
