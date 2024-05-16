
## Features

- Create orders by specifying a list of component codes.
- Validate orders to ensure they contain exactly one part from each category.
- Calculate the total price of the order.
- Return order details including order ID, total price, and selected parts.

## Installation

1. **Install Node.js**: If you haven't already, download and install Node.js from [nodejs.org](https://nodejs.org/).
2. **Clone the Repository**: Clone this repository to your local machine using Git:

    ```
    git clone https://github.com/your-username/mobile-factory.git
    ```

3. **Navigate to the Directory**: Change your current directory to the project directory:

  
4. **Install Dependencies**: Install project dependencies using npm:

    ```
    npm install
    ```

## Usage

1. **Run the Server**: Start the server by running the following command:

    ```
    node data.js
    ```

    The server will start and listen for incoming HTTP requests on port 3000.

2. **Create an Order**: Make a POST request to `http://localhost:3000/orders` with a JSON payload containing the list of component codes. For example:

    ```
    curl -X POST -H "Content-Type: application/json" -d '{ "components": ["I","A","D","F","K"] }' http://localhost:3000/orders
    ```

    Replace `["I","A","D","F","K"]` with your desired list of component codes.

3. **Stop the Server**: To stop the server, press `Ctrl + C` in the terminal where the server is running.

## Testing

This project includes basic unit tests to ensure the functionality of the API endpoints. To run the tests, use the following command:

```
npm test
```

