# Restaurant Management API

A robust RESTful API built with Node.js, Express, and MongoDB for managing a restaurant's core operations.

## Features

- **Menu Management**: Manage a collection of menu items.
- **Order Processing**: Handle customer orders and their statuses.
- **Database Integration**: Seamless integration with MongoDB using Mongoose.
- **Environment Configuration**: Uses dotenv for secure environment variable management.

## Project Structure

```
├── config/
│   └── db.js            # MongoDB connection setup
├── models/
│   ├── MenuItem.js      # Mongoose schema for Menu Items
│   └── Order.js         # Mongoose schema for Orders
├── routes/
│   ├── menuRoutes.js    # API endpoints for Menu operations
│   └── orderRoutes.js   # API endpoints for Order operations
├── server.js            # Express application entry point
└── package.json         # Project dependencies and scripts
```

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [MongoDB](https://www.mongodb.com/) (Local installation or MongoDB Atlas)

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/amankoli09/assignment-3-restaurant-management-api.git
   cd assignment-3-restaurant-management-api
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Setup:**
   Create a `.env` file in the root directory and add your MongoDB connection string and preferred port:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```

4. **Run the server:**
   ```bash
   npm start
   ```
   *For development with auto-restart, you can install nodemon and run `npm run dev` if configured in package.json.*

## API Endpoints (Planned)

### Menu
- `GET /api/menu` - Get all menu items
- `POST /api/menu` - Add a new menu item
- `PUT /api/menu/:id` - Update a menu item
- `DELETE /api/menu/:id` - Delete a menu item

### Orders
- `GET /api/orders` - Get all orders
- `POST /api/orders` - Create a new order
- `PUT /api/orders/:id` - Update an order's status
- `DELETE /api/orders/:id` - Delete an order

## Author

- [amankoli09](https://github.com/amankoli09)
