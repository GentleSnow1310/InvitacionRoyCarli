// scripts.js

window.addEventListener('load', () => { const intro = document.getElementById('intro'); const pareja = document.getElementById('pareja'); const burbujas = document.getElementById('burbujas');

// Mostrar pareja después de intro setTimeout(() => { intro.style.display = 'none'; pareja.classList.remove('oculto'); }, 3000);

// Mostrar burbujas después de pareja setTimeout(() => { burbujas.classList.remove('oculto'); }, 6000); });

function confirmarAsistencia(asiste) {
  if (asiste) {
    alert("¡Gracias por confirmar tu asistencia! 💚");
  } else {
    alert("Lamentamos que no puedas venir. Te vamos a extrañar.");
  }
}
