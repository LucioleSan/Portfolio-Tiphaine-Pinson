document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    emailjs.sendForm('service_f5alzd2', 'template_91eqaac', this)
      .then(function() {
        console.log('SUCCESS!');
        alert('Message envoyé avec succès!');
        document.getElementById('contactForm').reset();
      }, function(error) {
        console.log('FAILED...', error);
        alert('Erreur lors de l\'envoi du message');
      });
  });