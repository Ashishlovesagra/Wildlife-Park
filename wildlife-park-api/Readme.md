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
bash```


### User APIs End Points

1. Register User
-  Method: POST
-  End Point: /api/users/register.

2. Login User
-  Method: POST
-  End Point: /api/users/login.

3. Forgot Password
-  Method: POST
-  End Point: /api/users/forgot-password.

4. Reset Password
-  Method: POST
-  End Point: /api/users/reset-password.

5. Logout User
-  Method: POST
-  End Point: /api/users/logout.

6. Get All User
-  Method: GET
-  End Point: /api/users/all-users.

### Reserve APIs End Points  

6. Create Reserve
-  Method: POST
-  End Point: /api/reserves.

