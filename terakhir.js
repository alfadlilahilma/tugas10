document.addEventListener("DOMContentLoaded", function () {
    const productList = document.getElementById("product-list");

    const API_URL = "https://fakestoreapi.com/products";

    // Fungsi untuk mengambil data produk dari API
    async function fetchProducts() {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();

            // Proses data dan tampilkan di dalam product-list
            data.forEach((product) => {
                const productDiv = document.createElement("div");
                productDiv.classList.add("product");
                productDiv.innerHTML = `
                    <img src="${product.image}" alt="${product.title}">
                    <h2>${product.title}</h2>
                    <p>Harga: $${product.price.toFixed(2)}</p>
                `;
                productList.appendChild(productDiv);
            });
        } catch (error) {
            console.error("Error:", error);
        }
    }

    // Panggil fungsi fetchProducts untuk mengambil dan menampilkan produk dari API
    fetchProducts();
});
