const customCursor = document.querySelector('.custom-cursor');

window.addEventListener('mousemove', handleCustomCursor);

function handleCustomCursor(e) {
  customCursor.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px
        - 50%))`;
}
