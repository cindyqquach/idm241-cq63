const buttonContainer = document.getElementById('button-container');
    const openButton = document.getElementById('open-button');
    const closeButton = document.getElementById('close-button');
    const mobileMenu = document.getElementById('mobile-menu');
    buttonContainer.addEventListener("click", () => {

        if (Array.from(mobileMenu.classList).includes('mobile-nav__list--open')) {
            // When we're closing the menu
            mobileMenu.classList.remove('mobile-nav__list--open');
            mobileMenu.classList.add('mobile-nav__list--close');
            
            openButton.style.display = 'block';
            closeButton.style.display = 'none';
        } else {
            // When we're opening the menu
            mobileMenu.classList.remove('mobile-nav__list--close');
            mobileMenu.classList.add('mobile-nav__list--open');
            
            openButton.style.display = 'none';
            closeButton.style.display = 'block';
        }
    });