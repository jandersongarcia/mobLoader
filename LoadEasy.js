const loader = document.getElementById('loadeEasy');

// Execute a função para esconder o loader após um intervalo de tempo (por exemplo, 2000ms)
function loadStart() {
    loader.style.display = 'box';
}

// Função para realizar o fade-out
function fadeOut() {
    loader.classList.add('fadeOut');
    setInterval(function () {
        loader.style.display = 'none'
    }, 2000);
}