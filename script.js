function scrollSlider(direction) {
    const container = document.getElementById("sliderContainer");
    const scrollAmount = 200;

    if (direction === "left") {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
}

function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("show");
}

/*Menu and Cart Functions*/

/* This is for the menu, adds a menu card with its info*/
let itemListHTML = document.querySelector('.itemProduct');
let itemCartHTML = document.querySelector('.listCart');
let itemProduct = [];
let carts = [];

const initApp = () => {
    fetch('items.json')
        .then(response => response.json())
        .then(data => {
            itemProduct = data;
            if (itemListHTML) {
                addItem();
                addtoCartHandle();
            }
            if (itemCartHTML) {
                addtoCartHTML();
            }
        });
};
initApp();

const addItem = () => {
    itemListHTML.innerHTML = '';
    if (itemProduct.length > 0) {
        itemProduct.forEach(product => {
            let newItem = document.createElement('div');
            newItem.classList.add('item');
            newItem.dataset.id = product.id;
            newItem.innerHTML = `
                <div class="menu-card" data-id="${product.id}">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="menu-info">
                        <h3>${product.name}</h3>
                        <p>Our Classic Signature Burger</p> 
                        <span class="price">$${product.price.toFixed(2)}</span>
                        <button class="add-to-cart">Add to Cart</button>
                    </div>
                </div>
                    `;
            itemListHTML.appendChild(newItem);
        })
    }
}

const addtoCartHandle = () => {
    itemListHTML.addEventListener('click', (event) => {
        let itemClick = event.target;
        if (itemClick.classList.contains('add-to-cart')) {
            let item_id = itemClick.closest('.menu-card')?.dataset.id;
            addtoCart(item_id);
        }
    })
}

const showNotification = (message) => {
    const notif = document.getElementById('notification');
    notif.textContent = message;
    notif.classList.add('show');
    setTimeout(() => {
        notif.classList.remove('show');
    }, 2000);
}

const addtoCart = (item_id) => {
    let cart = JSON.parse(localStorage.getItem('carts')) || [];
    let positionOfItem = cart.findIndex((value) => value.product_id == item_id);
    if (positionOfItem >= 0) {
        cart[positionOfItem].quantity += 1;
    } else {
        cart.push({ product_id: item_id, quantity: 1 });
    }
    localStorage.setItem('carts', JSON.stringify(cart));
    showNotification("Added to Cart 🐈!");
}


const addtoCartHTML = () => {
    itemCartHTML.innerHTML = '';
    let carts = JSON.parse(localStorage.getItem('carts')) || [];
    let total = 0;
    if (carts.length > 0) {
        carts.forEach(cart => {
            let product = itemProduct.find(p => p.id === cart.product_id);
            if (!product) return;
            total += product.price * cart.quantity;
            let newCart = document.createElement('div');
            newCart.classList.add('item');
            newCart.dataset.id = cart.product_id;
            newCart.innerHTML = `
                    <div class="item">
                        <div class="name">
                            ${product.name}
                        </div>
                        <div class="total-price">
                            $${(product.price * cart.quantity).toFixed(2)}
                        </div>
                        <div class="quantity">
                            <span class="minus"><</span>
                                    <span>${cart.quantity}</span>
                                    <span class="plus">></span>
                        </div>
                    </div>`;
            itemCartHTML.appendChild(newCart);
        });
    } else {
        itemCartHTML.innerHTML = `
  <div class="cart-message">
    <h2>Your cart is empty 😿</h2>
    <a href="menu.html" class="order-button" style="align-items=center"> Order Now 😺</a>
  </div>`;
    }

    const totalPrice = document.getElementById('cart-total');
    if (totalPrice) {
        totalPrice.innerText = total.toFixed(2);
    }
}

if (itemCartHTML) {
    itemCartHTML.addEventListener('click', (event) => {
        let positionClick = event.target;
        if (positionClick.classList.contains('plus') || positionClick.classList.contains('minus')) {
            let product_id = positionClick.closest('[data-id]')?.dataset.id;
            let type = 'minus';
            if (positionClick.classList.contains('plus')) {
                type = 'plus';
            }
            changeQuantity(product_id, type);
        }
    })
}

const changeQuantity = (product_id, type) => {
    let carts = JSON.parse(localStorage.getItem('carts')) || [];
    let positionOfItem = carts.findIndex((value) => value.product_id == product_id);
    if (positionOfItem >= 0) {
        switch (type) {
            case 'plus':
                carts[positionOfItem].quantity += 1;
                break;
            default:
                let value = carts[positionOfItem].quantity - 1;
                if (value > 0) {
                    carts[positionOfItem].quantity = value;
                } else {
                    carts.splice(positionOfItem, 1);
                }
                break;
        }
    }
    localStorage.setItem('carts', JSON.stringify(carts));
    addtoCartHTML();
}


const clearCart = document.getElementById('clear-btn');

if (clearCart) {
    clearCart.addEventListener('click', () => {
        localStorage.removeItem('carts');
        carts = [];
        addtoCartHTML();
        document.getElementById('cart-total').textContent = '0.00';
    });
}
