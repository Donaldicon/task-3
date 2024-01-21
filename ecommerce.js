class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(product, quantity = 1) {
        this.items.push({ product, quantity });
    }

    calculateTotal() {
        return this.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
    }
}

class ECommerceApp {
    constructor() {
        this.products = [
            new Product(1, "Laptop", 1000),
            new Product(2, "Smartphone", 500),
            new Product(3, "Headphones", 50),
        ];
        this.cart = new ShoppingCart();
    }

    displayProducts() {
        console.log("Available Products:");
        this.products.forEach(product => {
            console.log(`${product.id}. ${product.name} - $${product.price}`);
        });
    }

    run() {
        while (true) {
            console.log("\n1. Display Products\n2. Add to Cart\n3. View Cart\n4. Checkout\n5. Exit");
            const choice = prompt("Enter your choice: ");

            switch (choice) {
                case "1":
                    this.displayProducts();
                    break;
                case "2":
                    const productId = parseInt(prompt("Enter the product ID to add to cart: "));
                    const quantity = parseInt(prompt("Enter the quantity: "));
                    const selectedProduct = this.products.find(product => product.id === productId);

                    if (selectedProduct) {
                        this.cart.addItem(selectedProduct, quantity);
                        console.log(`${quantity} ${selectedProduct.name}(s) added to cart.`);
                    } else {
                        console.log("Invalid product ID.");
                    }
                    break;
                case "3":
                    console.log("\nShopping Cart:");
                    this.cart.items.forEach(item => {
                        console.log(`${item.quantity} x ${item.product.name} - $${item.product.price}`);
                    });
                    console.log(`Total: $${this.cart.calculateTotal()}`);
                    break;
                case "4":
                    console.log(`\nTotal amount to pay: $${this.cart.calculateTotal()}`);
                    console.log("Thank you for shopping with us! Your order has been placed.");
                    return;
                case "5":
                    console.log("Exiting the application. Goodbye!");
                    return;
                default:
                    console.log("Invalid choice. Please try again.");
            }
        }
    }
}

const app = new ECommerceApp();
app.run();
