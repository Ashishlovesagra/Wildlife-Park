# Wildlife Park API

This project is an API for managing tiger reserves, built with **Node.js**, **Express.js**, and **MongoDB**. It includes user authentication, role-based access control, and the ability for admins to upload, update, and delete tiger reserves.

## Table of Contents
1. [Project Setup](#project-setup)
2. [Folder Structure](#folder-structure)
3. [Environment Variables](#environment-variables)
4. [Installation](#installation)
5. [Running the Project](#running-the-project)
6. [API Endpoints](#api-endpoints)
    - [User APIs](#user-apis)
    - [Tiger Reserve APIs](#tiger-reserve-apis)
7. [Security Features](#security-features)

## Project Setup

This project follows the **MVC pattern** (Model-View-Controller) with Node.js and MongoDB. It includes authentication, role-based authorization, and API security measures using packages like **cors**.

## Project Structure

```bash
wildlife-park-api/
│
├── config/
│   └── db.js                       # Database connection setup
├── controllers/
│   ├── tigerReserveController.js   # Logic for managing Tiger Reserve data
│   └── userController.js           # Logic for user registration, login, and authentication
├── middlewares/
│   ├── auth.js                     # Authentication middleware for protecting routes
├── models/
│   ├── tigerReserve.js             # Tiger Reserve schema and model
│   └── userModel.js                # User schema and model
├── routes/
│   ├── tigerReserveRoutes.js       # Routes for managing Tiger Reserves
│   └── userRoutes.js               # Routes for user authentication and management
├── .env                            # Environment variables configuration (e.g., database URL, JWT secret)
├── server.js                       # Main server file to run the application
├── app.js                          # Express application configuration and middleware setup
└── package.json                    # Project dependencies and scripts
```


## Environment Variables

Make sure to create a `.env` file at the root of the project with the following variables:

```bash
MONGO_URI=<Your MongoDB connection string>
JWT_SECRET=<Your JWT Secret>
PORT=5000
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password  
```

## Installation

To install the project dependencies, clone the repository and run:

```bash
npm install
```

## Running the Project

To start the project in development mode, use:

```bash
node server.js
```

## User APIs End Points

1. **Register User**
   - **Method**: POST
   - **End Point**: `/api/users/register`
   - **Description**: Register a new user. Requires `username`, `email`, `password`, `phone number`, and `answer` (for forgot password).
   - **Admin Only**: No

2. **Login User**
   - **Method**: POST
   - **End Point**: `/api/users/login`
   - **Description**: Login a user with their `email` and `password`. Returns a token.
   - **Admin Only**: No

3. **Forgot Password**
   - **Method**: POST
   - **End Point**: `/api/users/forgot-password`
   - **Description**: Sends a password reset link to the user’s email.
   - **Admin Only**: No

4. **Reset Password**
   - **Method**: POST
   - **End Point**: `/api/users/reset-password`
   - **Description**: Resets the user password by validating the token sent via the forgot password process.
   - **Admin Only**: No

5. **Logout User**
   - **Method**: POST
   - **End Point**: `/api/users/logout`
   - **Description**: Logs the user out by invalidating the token.
   - **Admin Only**: No

6. **Get All Users**
   - **Method**: GET
   - **End Point**: `/api/users/all-users`
   - **Description**: Retrieves a list of all users (Admin access required).
   - **Admin Only**: Yes

## Reserve APIs End Points

1. **Create Reserve**
   - **Method**: POST
   - **End Point**: `/api/reserves`
   - **Description**: Creates a new tiger reserve. Only an admin can create a reserve. Requires fields like `reserveName`, `location`, `nearestRailwayStation`, `nearestAirport`, `safariMode`, `flora`, `fauna`, and a `photo` to be uploaded.
   - **Admin Only**: Yes

2. **Get All Reserves**
   - **Method**: GET
   - **End Point**: `/api/reserves`
   - **Description**: Retrieves a list of all tiger reserves.
   - **Admin Only**: No

3. **Get Reserve by ID**
   - **Method**: GET
   - **End Point**: `/api/reserves/:id`
   - **Description**: Retrieves details of a specific tiger reserve by its ID.
   - **Admin Only**: No

4. **Update Reserve**
   - **Method**: PUT
   - **End Point**: `/api/reserves/:id`
   - **Description**: Updates an existing reserve's information. Only admin users can perform this operation.
   - **Admin Only**: Yes

5. **Delete Reserve**
   - **Method**: DELETE
   - **End Point**: `/api/reserves/:id`
   - **Description**: Deletes a tiger reserve by its ID. Only admin users can perform this operation.
   - **Admin Only**: Yes

## Security Features

- **CORS**: Configures Cross-Origin Resource Sharing.
- **Rate Limiting**: Prevents brute-force attacks by limiting request rates.
- **JWT Authentication**: Secures API routes with tokens.

## Project Design and Implementation

This project was designed and implemented by **Ashish Singh**.
