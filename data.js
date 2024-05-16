const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

class Component {
    constructor(code, price, part) {
        this.code = code;
        this.price = price;
        this.part = part;
    }
}

const componentsData = {
    "A": new Component("A", 10.28, "LED Screen"),
    "B": new Component("B", 24.07, "OLED Screen"),
    "C": new Component("C", 33.30, "AMOLED Screen"),
    "D": new Component("D", 25.94, "Wide-Angle Camera"),
    "E": new Component("E", 32.39, "Ultra-Wide-Angle Camera"),
    "F": new Component("F", 18.77, "USB-C Port"),
    "G": new Component("G", 15.13, "Micro-USB Port"),
    "H": new Component("H", 20.00, "Lightning Port"),
    "I": new Component("I", 42.31, "Android OS"),
    "J": new Component("J", 45.00, "iOS OS"),
    "K": new Component("K", 45.00, "Metallic Body"),
    "L": new Component("L", 30.00, "Plastic Body"),
};

class Order {
    constructor(components) {
        this.components = components;
    }

    validate() {
        const categories = {
            "Screen": 0,
            "Camera": 0,
            "Port": 0,
            "OS": 0,
            "Body": 0,
        };
        for (const component of this.components) {
            const part = componentsData[component].part;
            const category = part.split(' ')[0];
            categories[category]++;
        }
        return Object.values(categories).every(count => count === 1);
    }

    calculateTotal() {
        return this.components.reduce((total, component) => {
            return total + componentsData[component].price;
        }, 0);
    }
}

app.post('/orders', (req, res) => {
    const components = req.body.components || [];
    const order = new Order(components);

    if (order.validate()) {
        const total = order.calculateTotal();
        const orderId = "some-id"; // Generate a unique order ID here
        const parts = components.map(component => componentsData[component].part);

        const response = {
            "order_id": orderId,
            "total": total,
            "parts": parts,
        };
        res.status(201).json(response);
    } else {
        res.status(400).send("Invalid order");
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
