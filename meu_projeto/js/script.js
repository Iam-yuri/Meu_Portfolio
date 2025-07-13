// Atualiza o ano no footer
document.getElementById('year').textContent = new Date().getFullYear();

// Suaviza a rolagem para todas as âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
