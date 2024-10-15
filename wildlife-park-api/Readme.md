## Project File Structure

wildlife-park-api/
│
├── config/
│   └── db.js
├── controllers/
│   ├── tigerReserveController.js
│   └── userController.js
├── middlewares/
│   ├── auth.js
├── models/
│   ├── tigerReserve.js
│   └── userModel.js
├── routes/
│   ├── tigerReserveRoutes.js
│   └── userRoutes.js
├── .env
├── server.js
└── package.json

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

