const btnCart = document.querySelector('.conteiner-cart-icon')
const conteinerCartProducts = document.querySelector('.conteiner-cart-products')

btnCart.addEventListener('click', () => {
    conteinerCartProducts.classList.toggle('hidden-cart')
})

