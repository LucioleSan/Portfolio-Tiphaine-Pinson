document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    emailjs.sendForm('tiphaine.san.pinson@gmail.com', 'service_f5alzd2', this)
      .then(function() {
        console.log('SUCCESS!');
        alert('Message envoyé avec succès!');
      }, function(error) {
        console.log('FAILED...', error);
        alert('Erreur lors de l\'envoi du message');
      });
  });