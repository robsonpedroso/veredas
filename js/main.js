// Endereço base das ISOs no GitHub Releases. Troque aqui se o repositório ou a tag mudarem.
const RELEASE_BASE = 'https://github.com/robsonpedroso/veredas/releases/download/v1.00/';

document.querySelectorAll('a[data-iso]').forEach((a) => {
  a.href = RELEASE_BASE + a.dataset.iso;
});

// Menu mobile
const btn = document.querySelector('.menu-btn');
const nav = document.getElementById('menu');
btn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  btn.setAttribute('aria-expanded', String(open));
  btn.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
});
nav.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    nav.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-label', 'Abrir menu');
  }
});

// Copiar SHA256
document.querySelectorAll('.copy').forEach((b) => {
  b.addEventListener('click', async () => {
    const text = b.parentElement.querySelector('code').textContent.trim();
    try {
      await navigator.clipboard.writeText(text);
      b.textContent = 'Copiado!';
    } catch {
      const r = document.createRange();
      r.selectNodeContents(b.parentElement.querySelector('code'));
      const s = getSelection();
      s.removeAllRanges();
      s.addRange(r);
      b.textContent = 'Selecionado';
    }
    setTimeout(() => { b.textContent = 'Copiar'; }, 1800);
  });
});
