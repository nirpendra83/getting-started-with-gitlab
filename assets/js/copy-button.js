// assets/js/copy-button.js
// Injects a copy button into each MkDocs code block
document.addEventListener('DOMContentLoaded', () => {
  const codeBlocks = document.querySelectorAll('div.md-typeset pre');

  codeBlocks.forEach(pre => {
    // avoid duplicate buttons
    if (pre.querySelector('.copy-button')) return;

    const button = document.createElement('button');
    button.className = 'copy-button';
    button.type = 'button';
    button.ariaLabel = 'Copy code';
    button.title = 'Copy code';
    button.innerText = 'Copy';

    button.addEventListener('click', async () => {
      const codeEl = pre.querySelector('code');
      const text = codeEl ? codeEl.innerText : pre.innerText;

      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(text);
        } else {
          const textarea = document.createElement('textarea');
          textarea.value = text;
          textarea.style.position = 'fixed';
          textarea.style.left = '-9999px';
          document.body.appendChild(textarea);
          textarea.select();
          document.execCommand('copy');
          document.body.removeChild(textarea);
        }
        button.classList.add('copied');
        button.innerText = 'Copied';
        setTimeout(() => {
          button.classList.remove('copied');
          button.innerText = 'Copy';
        }, 1800);
      } catch (err) {
        console.error('Copy failed', err);
        button.innerText = 'Failed';
        setTimeout(() => button.innerText = 'Copy', 1800);
      }
    });

    pre.style.position = 'relative';
    pre.appendChild(button);
  });
});
