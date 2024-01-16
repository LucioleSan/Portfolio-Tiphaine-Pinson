document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        let aura = card.querySelector('.aura');
        if (!aura) {
            aura = document.createElement('div');
            aura.classList.add('aura');
            card.appendChild(aura);
        }
        aura.style.left = e.clientX - card.getBoundingClientRect().left + 'px';
        aura.style.top = e.clientY - card.getBoundingClientRect().top + 'px';
        aura.style.opacity = 1;
    });

    card.addEventListener('mouseleave', () => {
        let aura = card.querySelector('.aura');
        if (aura) {
            aura.style.opacity = 0;
        }
    });
});

document.querySelectorAll('.skill-category').forEach(skill => {
    skill.addEventListener('mousemove', (e) => {
        const rect = skill.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
       
const centerX = rect.width / 2;
const centerY = rect.height / 2;
const deltaX = x - centerX;
const deltaY = y - centerY;
    

 // Facteur déterminant l'intensité de la rotation
 const factor = 0.1; // Ajustez ce facteur pour augmenter ou diminuer l'effet
    
 const rotateY = deltaX * factor;
 const rotateX = -deltaY * factor;

 skill.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
});