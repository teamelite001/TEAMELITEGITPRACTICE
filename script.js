
function toggleStep(element) {
    element.classList.toggle('active');
}

function copyCode(button) {
    const code = button.previousElementSibling.querySelector('code').textContent;
    navigator.clipboard.writeText(code).then(() => {
        button.textContent = 'Copied!';
        setTimeout(() => {
            button.textContent = 'Copy';
        }, 2000);
    });
}