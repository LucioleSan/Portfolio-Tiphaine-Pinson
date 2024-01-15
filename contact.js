document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    emailjs.sendForm('93mUeGiz8oYCWiw6RoF1N', 'template_91eqaac', this)
      .then(function() {
        console.log('SUCCESS!');
        alert('Message envoyé avec succès!');
      }, function(error) {
        console.log('FAILED...', error);
        alert('Erreur lors de l\'envoi du message');
      });
  });