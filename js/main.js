// Menú para celular: abre y cierra la lista de enlaces
const boton = document.querySelector('.nav-toggle');
const menu = document.getElementById('menu');

boton.addEventListener('click', () => {
  const abierto = menu.classList.toggle('abierto');
  boton.setAttribute('aria-expanded', abierto);
});

menu.querySelectorAll('a').forEach((enlace) => {
  enlace.addEventListener('click', () => menu.classList.remove('abierto'));
});
