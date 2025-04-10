window.LanguageSwitcher = {
    switchLanguage: function(newLang) {
        const languageToggle = document.getElementById('languageToggle');
        if (!languageToggle) return;

        // Cambia la bandiera e il testo
        const flag = languageToggle.querySelector('.flag-icon');
        const text = languageToggle.querySelector('.lang-text');

        if(newLang === 'en') {
            flag.className = 'flag-icon flag-it';
            text.textContent = 'IT';
            // Mostra menu inglese e nascondi italiano
            document.querySelector('.lang-it').style.display = 'none';
            document.querySelector('.lang-en').style.display = 'flex';
            // Aggiorna anche i link se necessario

            // Se siamo nella pagina "Chi siamo", reindirizza alla versione EN
            if(window.location.pathname.includes('chiSiamo.html')) {
                window.location.href = window.location.pathname.replace('src/pages/menu/it/chiSiamo.html', 'src/pages/menu/en/chiSiamoEN.html');
            }else if(window.location.pathname.includes('contatti.html')) {
                window.location.href = window.location.pathname.replace('src/pages/menu/it/contatti.html', 'src/pages/menu/en/contattiEN.html');
            }else if(window.location.pathname.includes('index.html')) {
                window.location.href = window.location.pathname.replace('index.html', 'indexEN.html');
            }
        } else {
            flag.className = 'flag-icon flag-gb';
            text.textContent = 'EN';
            // Mostra menu italiano e nascondi inglese
            document.querySelector('.lang-it').style.display = 'flex';
            document.querySelector('.lang-en').style.display = 'none';
            // Se siamo nella pagina "Chi siamo EN", reindirizza alla versione IT
            if(window.location.pathname.includes('chiSiamoEN.html')) {
                window.location.href = window.location.pathname.replace('src/pages/menu/en/chiSiamoEN.html', 'src/pages/menu/it/chiSiamo.html');
            }else if(window.location.pathname.includes('contattiEN.html')) {
                window.location.href = window.location.pathname.replace('src/pages/menu/en/contattiEN.html', 'src/pages/menu/it/contatti.html');
            }else if(window.location.pathname.includes('indexEN.html')) {
                window.location.href = window.location.pathname.replace('indexEN.html', 'index.html');
            }

        }

        document.documentElement.lang = newLang;
        // Salva la preferenza
        localStorage.setItem('preferredLang', newLang);

    },

    initialize: function() {


        const languageToggle = document.getElementById('languageToggle');

        if (languageToggle) {

          //PER RICORDARSI L'ULTIMA LINGUA SELEZIONATA E NON RESETTARE L'IT
          const savedLang = localStorage.getItem('preferredLang') || 'it';
          this.switchLanguage(savedLang);



            languageToggle.addEventListener('click', function() {
                const currentLang = document.documentElement.lang;
                const newLang = currentLang === 'it' ? 'en' : 'it';
                window.LanguageSwitcher.switchLanguage(newLang);
            });

        }
    }
};
