// Этот JavaScript код обрабатывает навигацию между страницами
document.addEventListener('DOMContentLoaded', function () {
    // Слушатели событий для кнопок...
    document.getElementById('button-tl').addEventListener('click', 
function (e) {
        e.preventDefault();
        window.location.href = 'pages/geneva.html';
    });

    document.getElementById('button-tr').addEventListener('click', 
function (e) {
        e.preventDefault();
        window.location.href = 'pages/basel.html';
    });

    document.getElementById('button-bl').addEventListener('click', 
function (e) {
        e.preventDefault();
        window.location.href = 'pages/zurich.html';
    });

    document.getElementById('button-br').addEventListener('click', 
function (e) {
        e.preventDefault();
        window.location.href = 'pages/stmoritz.html';
    });
});

