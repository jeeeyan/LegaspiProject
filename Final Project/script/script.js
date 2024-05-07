window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var parallaxElement = document.getElementById('bg1');
    parallaxElement.style.transform = 'translateY(' + scrollPosition * 0.4 + 'px)';
});
