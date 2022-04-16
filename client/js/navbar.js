var bars = document.getElementById('menuB')

bars.addEventListener('click', () => {
    var x = document.getElementById('mobile-nav');

    x.style.display = x.style.display == 'none' ? 'block' : 'none';
});