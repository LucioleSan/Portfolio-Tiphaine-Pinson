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

