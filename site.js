const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-navigation');
const mobileLayout = matchMedia('(max-width: 760px)');

function setMenuOpen(open) {
  menu.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  menu.querySelector('use').setAttribute('href', open ? '#i-close' : '#i-menu');
  navigation.classList.toggle('is-open', open);
}

function updateMenuLayout() {
  setMenuOpen(false);
  menu.hidden = !mobileLayout.matches;
}

document.documentElement.classList.add('js');
updateMenuLayout();
mobileLayout.addEventListener('change', updateMenuLayout);

menu.addEventListener('click', () => setMenuOpen(menu.getAttribute('aria-expanded') !== 'true'));

navigation.addEventListener('click', (event) => {
  const link = event.target.closest('a');
  if (!link || !mobileLayout.matches) return;

  const section = document.querySelector(link.hash);
  section.setAttribute('tabindex', '-1');
  section.focus({ preventScroll: true });
  setMenuOpen(false);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
    setMenuOpen(false);
    menu.focus();
  }
});

const brief = document.querySelector('#sourcing-brief');
const message = brief.elements.namedItem('text');
const opening = message.value;

brief.hidden = false;
brief.addEventListener('submit', () => {
  const fields = [...brief.querySelectorAll('[data-brief]')]
    .map((field) => [field.dataset.brief, field.value.trim()])
    .filter(([, value]) => value)
    .map(([label, value]) => `${label}: ${value}`);

  message.value = fields.length ? [opening, '', ...fields].join('\n') : opening;
});
