// var isEnglish = true;
// function toggleLanguage() {
//     var elementsToTranslate = document.querySelectorAll('[data-translate]');
//     if (isEnglish) {
//         elementsToTranslate.forEach(function(element) {
//             var englishText = element.textContent;
//             var arabicText = element.getAttribute('data-translate');
//             element.textContent = arabicText;
//             element.setAttribute('data-translate', englishText);
//         });
//         isEnglish = false;
//     } else {
        
//         elementsToTranslate.forEach(function(element) {
//             var arabicText = element.textContent;
//             var englishText = element.getAttribute('data-translate');
//             element.textContent = englishText;
//             element.setAttribute('data-translate', arabicText);
//         });
//         isEnglish = true;
//     }
// }

  function toggleMenu() {
      var navMenu = document.querySelector('nav ul');
      navMenu.classList.toggle('active');
  }
