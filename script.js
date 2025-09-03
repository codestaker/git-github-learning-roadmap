document.addEventListener('DOMContentLoaded', () => {
    const codeBlocks = document.querySelectorAll('pre');

    codeBlocks.forEach(block => {
        const code = block.querySelector('code');
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-btn';
        copyButton.textContent = 'Copy';

        copyButton.addEventListener('click', () => {
            const textToCopy = code.innerText;
            navigator.clipboard.writeText(textToCopy).then(() => {
                copyButton.textContent = 'Copied!';
                setTimeout(() => {
                    copyButton.textContent = 'Copy';
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        });

        block.appendChild(copyButton);
    });
});
