(() => {
  const toggle = document.querySelector('.menu-toggle');
  const navigation = document.getElementById('menu-principal');
  if (!toggle || !navigation) return;

  const closeMenu = () => {
    navigation.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.textContent = 'Menu';
  };

  toggle.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.textContent = isOpen ? 'Fechar' : 'Menu';
  });

  navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
})();