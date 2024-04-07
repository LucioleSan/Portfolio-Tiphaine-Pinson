document.addEventListener('scroll', function() {
    // Obtenir la référence de la ligne de défilement et des éléments h2
    const scrollLine = document.getElementById('neonLight');
    const h2Elements = document.querySelectorAll('h2');
  
    // Calculer la position actuelle de défilement
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  
    // Réinitialiser le style des éléments h2 avant de vérifier leur intersection avec la ligne
    h2Elements.forEach(h2 => {
      h2.style.backgroundColor = ''; // Couleur de fond initiale
      h2.style.boxShadow = ''; // Ombre initiale
    });
  
    // Appliquer l'effet de surbrillance aux éléments h2 touchés par la ligne de défilement
    h2Elements.forEach(h2 => {
      const h2Top = h2.offsetTop;
      const h2Bottom = h2Top + h2.offsetHeight;
      
      // Vérifier si la ligne de défilement intersecte l'élément h2
      if (currentScroll + scrollLine.offsetHeight > h2Top && currentScroll < h2Bottom) {
        // Si oui, appliquer l'effet de néon
        h2.style.backgroundColor = 'rgba(255, 20, 147, 0.3)';
        h2.style.boxShadow = '0 0 10px rgba(255, 20, 147, 0.7), 0 0 20px rgba(255, 20, 147, 0.7)';
      }
    });
  
    // Ajuster la hauteur de la ligne de défilement en fonction du pourcentage de défilement
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (currentScroll / scrollHeight) * 100;
    scrollLine.style.height = `${scrollPercentage}vh`;
  
    // Ajuster l'opacité de la ligne de défilement
    scrollLine.style.opacity = currentScroll > 0 ? '1' : '0';
  });
