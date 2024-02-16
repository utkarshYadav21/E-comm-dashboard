# E-commerce Dashboard

Welcome to our E-commerce Dashboard repository! This dashboard allows users to manage products including viewing, editing, adding, and deleting products. It also features user authentication using JWT tokens.

## Features

- **User Authentication:** Users can register and login securely. Authentication is done using JWT tokens stored in local storage.

- **Product Management:**
  - View Products: Users can see a list of products.
  - Edit Products: Users can edit existing products.
  - Add Products: Users can add new products.
  - Delete Products: Users can delete products.
  - Search Products: Users can search for products by name or category.

## Technologies Used

- **Frontend:** React
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** JWT tokens

## Demo

https://github.com/utkarshYadav21/E-comm-dashboard/assets/145287711/5ab88e07-b62b-41e2-b892-574a89f953c1

## Installation

1. Clone this repository to your local machine.

2. Install dependencies for the frontend and backend:

    ```bash
    # Navigate to the frontend directory
    cd frontend
    npm install

    # Navigate to the backend directory
    cd ../backend
    npm install
    ```

### Backend Configuration

1. Navigate to the `backend/db/config.js`.

2. Replace the placeholder values with your actual configuration details:
    
    - `MONGODB_URI`: MongoDB connection URI.

### Running the application

5. Run the frontend and backend:

    ```bash
    # Start the frontend server
    cd ../frontend
    npm start

    # Start the backend server
    cd ../backend
    npm start
    ```


