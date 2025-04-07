window.addEventListener ('scroll', function () {
    const stickyElement = document.querySelector('.feature-button-index');
    const finishingElement = this.document.querySelector('.security');
    const maxScroll = finishingElement.getBoundingClientRect().y - 164;
    const currentScroll = this.window.scrollY;

    if (maxScroll < 0) {
        const rect = stickyElement.getBoundingClientRect();
        stickyElement.style.position = 'absolute';
        stickyElement.style.top = '7135px';
        stickyElement.style.left = '140px';
    } else {
        stickyElement.style.position = 'sticky';
        stickyElement.style.top = '100px';
    }
});