const moon = document.getElementById('moon');
const stars = document.getElementById('stars');
const mountains_behind = document.getElementById('mountains_behind');
const mountains_front = document.getElementById('mountains_front');
const btn = document.getElementById('btn');
const text = document.getElementById('text');
const header = document.getElementById('nav-bar')

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    stars.style.left = value * 0.5 + 'px';
    moon.style.top = value * 1.1 + 'px';
    text.style.marginRight = value * 3 + 'px';
    text.style.marginTop = value * 1 + 'px';
    btn.style.marginTop = value * 1 + 'px';
    header.style.top = value * 1.1 + 'px';
})