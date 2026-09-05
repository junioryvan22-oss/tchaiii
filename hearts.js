// Coeurs flottants en arrière-plan (utilisé sur toutes les pages)
document.addEventListener('DOMContentLoaded', () => {
  const heartsBg = document.getElementById('heartsBg');
  if (!heartsBg) return;

  function spawnHeart() {
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    heart.textContent = ['💗', '💕', '💓', '💖', '❤️'][Math.floor(Math.random() * 5)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (1 + Math.random() * 1.5) + 'rem';
    const duration = 6 + Math.random() * 6;
    heart.style.animationDuration = duration + 's';
    heartsBg.appendChild(heart);
    setTimeout(() => heart.remove(), duration * 1000);
  }
  setInterval(spawnHeart, 500);
});
