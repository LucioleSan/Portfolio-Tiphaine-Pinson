document.querySelector('.menu-toggle').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('nav').style.display = this.classList.contains('active') ? 'flex' : 'none';
  });