# Wildlife Park API

The Wildlife Park API is a Node.js and Express-based application that allows for managing tiger reserves and user authentication. It supports CRUD operations for tiger reserves, with role-based access for admin users, and includes authentication features like user login, registration, and forgot password functionality.

## Project Structure

```bash
wildlife-park-api/
│
├── config/
│   └── db.js                  # Database connection setup
├── controllers/
│   ├── tigerReserveController.js  # Logic for managing Tiger Reserve data
│   └── userController.js          # Logic for user registration, login, and authentication
├── middlewares/
│   ├── auth.js                    # Authentication middleware for protecting routes
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
