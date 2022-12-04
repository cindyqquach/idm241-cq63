const buttonContainer = document.getElementById('button-container-tablet');
    const openButton = document.getElementById('open-button-tablet');
    const closeButton = document.getElementById('close-button-tablet');
    const mobileMenu = document.getElementById('tablet-menu');
    buttonContainer.addEventListener("click", () => {

        if (Array.from(mobileMenu.classList).includes('tablet-nav__list--open')) {
            // When we're closing the menu
            tabletMenu.classList.remove('tablet-nav__list--open');
            tabletMenu.classList.add('tablet-nav__list--close');
            
            openButton.style.display = 'block';
            closeButton.style.display = 'none';
        } else {
            // When we're opening the menu
            tabletMenu.classList.remove('tablet-nav__list--close');
            tabletMenu.classList.add('tablet-nav__list--open');
            
            openButton.style.display = 'none';
            closeButton.style.display = 'block';
        }
    });