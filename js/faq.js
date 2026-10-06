const faqItems = document.querySelectorAll('#accordion article');

faqItems.forEach((item) => {
    const button = item.querySelector('button');

    button.addEventListener('click', () => {
        const wasOpen = item.classList.contains('open');

        faqItems.forEach((otherItem) => {
            otherItem.classList.remove('open');

            const otherButton = otherItem.querySelector('button');
            otherButton?.setAttribute('aria-expanded', 'false');
        });

        if (!wasOpen) {
            item.classList.add('open');
            button.setAttribute('aria-expanded', 'true');
        }
    });
});
