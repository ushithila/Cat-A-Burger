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
let itemProduct = [];

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

/*For when the user clicks the "Add to Cart" Button*/
itemListHTML.addEventListener('click', (event) => {
    let itemClick = event.target;
    if (itemClick.classList.contains('add-to-cart')) {
        let item_id = itemClick.closest('.menu-card')?.dataset.id;
        addtoCart(item_id);
    }
})

const addtoCart = (item_id) => {
    let cart = JSON.parse(localStorage.getItem('carts')) || [];
    let positionOfItem = carts.findIndex((value) => value.product_id == item_id);
    if (positionOfItem >= 0) {
        cart[positionOfItem].quantity += 1;
    } else {
        cart.push({ product_id: item_id, quantity: 1 });
    }
    localStorage.setItem('carts', JSON.stringify(cart));
    console.log(cart);
}

let itemCartHTML = document.querySelector('.listCart');
let carts = [];

addCarttoHTML = () => {

    itemCartHTML.innerHTML = '';
    let carts = JSON.parse(localStorage.getItem('carts')) || [];

    if (carts.length > 0) {
        carts.forEach(cart => {
            let newCart = document.createElement('div');
            newCart.classList.add('item');
            newCart.innerHTML = `
                    <div class="item">
                        <div class="name">
                            ${product.name}
                        </div>
                        <div class="total-price">
                            $${product.price.toFixed(2)}
                        </div>
                        <div class="quantity">
                            <span class="minus"><</span>
                                    <span>1</span>
                                    <span class="plus">></span>
                        </div>
                    </div>`;
            itemCartHTML.appendChild(newCart);
        })
    }
}

const initApp = () => {
    fetch('items.json')
        .then(response => response.json())
        .then(data => {
            itemProduct = data;
            addItem();
        });
};
initApp();
