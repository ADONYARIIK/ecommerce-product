let imageIndex = 0;
let imageIndexOverlay = 0;

const selectedImage = document.getElementById('selected-image');
const thumbnailsContainer = document.querySelector('.thumbnails');
const thumbnailImages = thumbnailsContainer.getElementsByClassName('image-container');

for (let i = 0; i < thumbnailImages.length; i++) {
    thumbnailImages[i].style.backgroundImage = `url('images/image-product-${i + 1}-thumbnail.jpg')`;
}

thumbnailsContainer.addEventListener('click', (event) => {
    const clickedThumbnail = event.target.closest('.image-container');
    if (!clickedThumbnail) return;

    Array.from(thumbnailImages).forEach(thumbnail => thumbnail.classList.remove('selected'));

    clickedThumbnail.classList.add('selected');

    imageIndex = Array.from(thumbnailImages).indexOf(clickedThumbnail);
    selectedImage.src = `images/image-product-${imageIndex + 1}.jpg`;
});


const decreaseBtn = document.getElementById('decrease-btn');
const increaseBtn = document.getElementById('increase-btn');
const quantityInput = document.getElementById('quantity-input');

decreaseBtn.addEventListener('click', () => {
    const currentValue = parseInt(quantityInput.value);
    if (currentValue >= 1) {
        quantityInput.value = currentValue - 1;
    }
});

increaseBtn.addEventListener('click', () => {
    const currentValue = parseInt(quantityInput.value);
    quantityInput.value = currentValue + 1;
});

const cartImage = document.querySelector('.cart');
const cartMenu = document.querySelector('.final-cart');

cartImage.addEventListener('click', () => {
    if (cartMenu.style.display === 'block') {
        cartMenu.style.display = 'none';
    }
    else {
        cartMenu.style.display = 'block';
    }
});

const addToCartBtn = document.querySelector('.add-to-cart');
let cartItemCount = 0;
addToCartBtn.addEventListener('click', () => {
    const quantity = parseInt(quantityInput.value);
    if (quantity > 0) {
        cartItemCount += quantity;
        cartImage.querySelector('.cart>.cart-count').textContent = cartItemCount;
        cartImage.querySelector('.cart>.cart-count').style.display = 'block';
        cartMenu.querySelector('.content').innerHTML = `
            <div class="cart-item">
                <img src="images/image-product-1-thumbnail.jpg" alt="Product thumbnail">
                <div class="item-details">
                    <p class="item-name">Fall Limited Edition Sneakers</p>
                    <p class="item-price">$125.00 x ${cartItemCount} <strong class="item-total">$${(125 * cartItemCount).toFixed(2)}</strong></p>
                </div>
                <button class="delete-btn"><img src="images/icon-delete.svg" alt="Delete"></button>
            </div>
            <button class="checkout-btn">Checkout</button>
        `;

        const deleteBtn = cartMenu.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', () => {
            cartItemCount = 0;
            cartImage.querySelector('.cart>.cart-count').style.display = 'none';
            cartMenu.querySelector('.content').innerHTML = '<h2>Your cart is empty.</h2>';
        });
    }
});


const overlay = document.querySelector('.image-overlay');
const closeOverlayBtn = document.querySelector('.close-overlay');

function handleTabletChange(e) {
    return e.matches;
}

selectedImage.addEventListener('click', () => {
    if (!handleTabletChange(window.matchMedia('(max-width: 768px)'))) {
        overlay.style.display = 'flex';
        imageIndexOverlay = imageIndex;
        selectedImageOverlay.src = `images/image-product-${imageIndexOverlay + 1}.jpg`;
        Array.from(thumbnailImagesOverlay).forEach(thumbnail => thumbnail.classList.remove('selected'));
        thumbnailImagesOverlay[imageIndexOverlay].classList.add('selected');
    }
});

closeOverlayBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
});

const selectedImageOverlay = document.querySelector('.main-image');
const thumbnailsContainerOverlay = document.querySelector('.thumbnails-overlay');
const thumbnailImagesOverlay = thumbnailsContainerOverlay.getElementsByClassName('image-container');

for (let i = 0; i < thumbnailImagesOverlay.length; i++) {
    thumbnailImagesOverlay[i].style.backgroundImage = `url('images/image-product-${i + 1}-thumbnail.jpg')`;
}

const overlayPrevBtn = document.querySelector('.image-overlay>.arrow-left');
const overlayNextBtn = document.querySelector('.image-overlay>.arrow-right');

overlayPrevBtn.addEventListener('click', () => {
    imageIndexOverlay = (imageIndexOverlay - 1 + thumbnailImagesOverlay.length) % thumbnailImagesOverlay.length;
    selectedImageOverlay.src = `images/image-product-${imageIndexOverlay + 1}.jpg`;
    Array.from(thumbnailImagesOverlay).forEach(thumbnail => thumbnail.classList.remove('selected'));
    thumbnailImagesOverlay[imageIndexOverlay].classList.add('selected');
});

overlayNextBtn.addEventListener('click', () => {
    imageIndexOverlay = (imageIndexOverlay + 1) % thumbnailImagesOverlay.length;
    selectedImageOverlay.src = `images/image-product-${imageIndexOverlay + 1}.jpg`;
    Array.from(thumbnailImagesOverlay).forEach(thumbnail => thumbnail.classList.remove('selected'));
    thumbnailImagesOverlay[imageIndexOverlay].classList.add('selected');
});

thumbnailsContainerOverlay.addEventListener('click', (event) => {
    const clickedThumbnail = event.target.closest('.image-container');
    if (!clickedThumbnail) return;

    Array.from(thumbnailImagesOverlay).forEach(thumbnail => thumbnail.classList.remove('selected'));

    clickedThumbnail.classList.add('selected');

    imageIndexOverlay = Array.from(thumbnailImagesOverlay).indexOf(clickedThumbnail);
    selectedImageOverlay.src = `images/image-product-${imageIndexOverlay + 1}.jpg`;
});


const burgerIcon = document.querySelector('.burger');
const burgerMenu = document.querySelector('aside');
const closeBurgerMenu = document.querySelector('.close-menu');

burgerIcon.addEventListener('click', () => {
    burgerMenu.style.display = 'block';
});

closeBurgerMenu.addEventListener('click', () => {
    burgerMenu.style.display = 'none';
});

const prevBtn = document.querySelector('.arrow-left');
const nextBtn = document.querySelector('.arrow-right');

prevBtn.addEventListener('click', () => {
    imageIndex = (imageIndex - 1 + 4) % 4;
    selectedImage.src = `images/image-product-${imageIndex + 1}.jpg`;
});

nextBtn.addEventListener('click', () => {
    imageIndex = (imageIndex + 1) % 4;
    selectedImage.src = `images/image-product-${imageIndex + 1}.jpg`;
});
