const productDetailsElem = document.querySelector('#productDetails');
const product = JSON.parse(window.localStorage.getItem('selectedProduct'));

if (product) {
    productDetailsElem.innerHTML = `
        <div class="card">
            <img src="${product.image}" alt="${product.title}" style="max-width: 200px;">
            <h2>${product.title}</h2>
            <p>${product.description}</p>
            <h3>Price: $${product.price}</h3>
            <p>Category: ${product.category}</p>
        </div>
    `;
} else {
    productDetailsElem.innerHTML = "<p>Producto no encontrado</p>";
}