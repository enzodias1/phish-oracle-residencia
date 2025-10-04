
  document.addEventListener('DOMContentLoaded', () => {
    const langAttribute = document.documentElement.getAttribute('lang');
    updateLanguageLinks(langAttribute);

    const observer = new MutationObserver((mutationsList) => {
      for(const mutation of mutationsList) {
        if(mutation.attributeName === 'lang') {
          updateLanguageLinks(mutation.target.lang);
        }
      }
    });
    observer.observe(document.documentElement, { attributes: true });

    function updateLanguageLinks(langCode) {
      const languages = ['en', 'zh-hans', /*... other language codes */];
      languages.forEach((code) => {
        const url = code === 'en' ? '/' : `/${code}/`;
        const languageItem = document.querySelector(`.lf-language-${code}`);
        if(languageItem) {
          languageItem.dataset.url = url;
          languageItem.addEventListener('click', () => {
            window.location.href = url;
          });

          if(langCode === code) {
            languageItem.classList.add('current');
          } else {
            languageItem.classList.remove('current');
          }
        }
      });
    }
  });

