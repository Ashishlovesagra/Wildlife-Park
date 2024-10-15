# Wildlife Park API

The **Wildlife Park API** allows the management of Tiger Reserves and user operations. It provides authentication, CRUD functionality for reserves, and more.

## Project Structure

```bash
wildlife-park-api/
│
├── config/
│   └── db.js                   # Database configuration file (MongoDB connection setup)
│
├── controllers/
│   ├── tigerReserveController.js   # Controller for managing Tiger Reserve CRUD operations
│   └── userController.js           # Controller for managing user-related operations (login, registration, etc.)
│
├── middlewares/
│   └── auth.js                     # Middleware for authentication (protect routes and check admin permissions)
│
├── models/
│   ├── tigerReserve.js              # Mongoose schema/model for the Tiger Reserves
│   └── userModel.js                 # Mongoose schema/model for Users
│
├── routes/
│   ├── tigerReserveRoutes.js        # Routes for Tiger Reserve operations (CRUD)
│   └── userRoutes.js                # Routes for User operations (register, login, etc.)
│
├── .env                             # Environment variables (e.g., database URI, secret keys)
├── server.js                        # Main server file (Entry point of the application)
└── package.json                     # Project dependencies and scripts


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

