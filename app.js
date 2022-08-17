const customCursor = document.querySelector('.custom-cursor');
const title = document.querySelector('h1');
const subtitle = document.querySelector('.subtitle');
const heroPushLink = document.querySelector('.hero-push-link');
const text = 'Porsche, set free.';

window.addEventListener('mousemove', handleCustomCursor);

function handleCustomCursor(e) {
  customCursor.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px
        - 50%))`;
}

function typewriter(word, index) {
  if (index > 3) {
    subtitle.classList.add('active');
  }
  if (index > 6) {
    heroPushLink.classList.add('active');
  }
  if (index < text.length) {
    setTimeout(() => {
      title.innerHTML += `<span>${text[index]}</span>`;
      typewriter(text, index + 1);
    }, 200);
  }
}

setTimeout(() => {
  typewriter(text, 0);
}, 300);

// push down button

heroPushLink.addEventListener('click', slideDown);

function slideDown(e) {
  e.preventDefault();
  window.scrollTo({
    top: document.querySelector(`${e.target.getAttribute('href')}`).offsetTop,
    behavior: 'smooth',
  });
}
