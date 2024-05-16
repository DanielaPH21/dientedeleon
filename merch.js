const btnCart = document.querySelector('.container-icon')
const containerCartProduct = document.querySelector('.container-cart-products')
btnCart.addEventListener('click', () => {
	containerCartProduct.classList.toggle('hidden-cart')
})