(() => {
    const button = document.querySelector('[data-copy-email]');
    if (!button) return;

    const label = button.querySelector('[data-copy-label]');
    const defaultLabel = label.textContent;
    const status = document.querySelector('[data-copy-status]');
    const fallback = document.querySelector('[data-copy-fallback]');
    const address = fallback.querySelector('input');
    let resetTimer;

    button.addEventListener('click', async () => {
        clearTimeout(resetTimer);
        status.textContent = '';
        button.disabled = true;
        try {
            await navigator.clipboard.writeText(button.dataset.copyEmail);
            fallback.hidden = true;
            label.textContent = 'Copied';
            status.textContent = 'Email address copied to clipboard.';
            resetTimer = setTimeout(() => { label.textContent = defaultLabel; }, 2500);
        } catch {
            label.textContent = defaultLabel;
            fallback.hidden = false;
            status.textContent = 'Automatic copying is unavailable. Select and copy the email address below.';
            address.focus();
            address.select();
        } finally {
            button.disabled = false;
        }
    });
})();
