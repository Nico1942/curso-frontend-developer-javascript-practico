const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuMobileIcon = document.querySelector('.menu');
const menuIconCarrito = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuMobileIcon.addEventListener('click', toggleMobileMenu);
menuIconCarrito.addEventListener('click', toggleCarrito);

function toggleDesktopMenu() {
  const isAsideClosed = aside.classList.contains('inactive');

  if (!isAsideClosed) {
    aside.classList.add('inactive')
  }
  
  desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() {
  const isAsideClosed = aside.classList.contains('inactive');

  if (!isAsideClosed) {
    aside.classList.add('inactive')
  }

  mobileMenu.classList.toggle('inactive')
}

function toggleCarrito() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

  if(!isMobileMenuClosed) {
    mobileMenu.classList.add('inactive')
  }

  if(!isDesktopMenuClosed){
    desktopMenu.classList.add('inactive')
  }

  aside.classList.toggle('inactive')
}

const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

productList.push({
  name: 'TV',
  price: 200,
  image: 'https://images.pexels.com/photos/3151392/pexels-photo-3151392.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

productList.push({
  name: 'Computer',
  price: 620,
  image: 'https://images.pexels.com/photos/459653/pexels-photo-459653.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
})

function renderProducts (arr) {
  const cardsContainer = document.querySelector('.cards-container');
  let toRender = [];

  for (product of arr) {
  
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');

    const productName = document.createElement('p');
    productName.innerText = product.name;
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;

    productInfoDiv.append(productName, productPrice);
    productInfo.appendChild(productInfoDiv);

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCart);
    productInfo.appendChild(productInfoFigure);

    productCard.append(productImg, productInfo)

    toRender.push(productCard);
    
  }

  cardsContainer.append(...toRender);
}

renderProducts(productList);