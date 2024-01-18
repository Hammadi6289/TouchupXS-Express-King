# MERN TouchupXS - Express King

# Sequence

1. Intro
2. Install Tools
3. Create React App
4. Create Git Repository
5. List Products
   1. create products array (Pictures)
   2. add product images
   3. render products
   4. style products
      /////////// Start from 49 mins. Less no. 6
6. Add page routing
   1. npm i react-router-dom
   2. create route for home screen
   3. create router for product screen
   4. Installation of React Router
   5. useParams() Hook
   6. Router Link
7. Create Node.JS Server
   1. run npm init in root folder
   2. Update package.json set type: module
   3. Add .js to imports
   4. npm install express
   5. create server.js
   6. add start command as node backend/server.js
   7. require express
   8. create route for / return backend is ready.
   9. move products.js from frontend to backend
   10. create route for /api/products
   11. return products
   12. run npm start
8. Fetch Products From Backend
   1. set proxy in package.json
   2. npm install axios
   3. use state hook
   4. use effect hook
   5. use reducer hook
9. Manage State By Reducer Hook
   1. define reducer
   2. update fetch data
   3. get state from usReducer
10. Add bootstrap UI Framework
    1. npm install react-bootstrap bootstrap
    2. npm install react-bootstrap bootstrap --force
    3. npm install react-router-bootstrap (For <LinkContainer> )
    4. update App.js
11. Create Product and Rating Component
    1. create Rating component
    2. Create Product component
    3. Use Rating component in Product component using font awesome (f as) ATTN Need to add a link in index.html for this.
    4. Make it look like Amazon
12. Create Product Details Screen
    1. fetch product from backend
    2. create 3 columns for image, info and action
13. Create Loading and Message Component (Components for QA)
    1. create loading component
    2. use spinner component
    3. craete message component
    4. create utils.js to define getError fuction
14. Create React Context For Add Item To Cart
    1. Create React Context
    2. define reducer
    3. create store provider
    4. implement add to cart button click handler
15. Enhance Add To Cart button
    1. When we were clicking add to the cart button multiple times it was duplicating the product instead of add up the qty(Same as Walmart issue WW)
    2. check exist item in the cart
    3. check count in stock in backend and if qty > Stoct then deal
16. Create Cart Screen (Starting UI Part)
    1. create 2 columns
    2. display items list
    3. create action column for add or delete item
17. Complete Cart Screen
    1. click handler for inc/dec item in cart screen
    2. click handler for remove item from cart screen
    3. click handler for checkout button
    4. Out of stock button light disabled.
    5. Saving cart settings to the Local storage incase of page refresh.
18. Create Signin Screen
    1. create sign in form
    2. add email and password
    3. add signin button
19. Connect To MongoDB Database
    1. create atlas monogodb database
    2. npm install mongoose & npm install dotenv
    3. connect to mongodb database
20. Seed Sample Products
    1. create Product model
    2. create seed route
    3. use route in server.js
    4. seed sample product
    5. Run this at http://localhost:5000/api/products
21. Seed Sample Users
    1. create user model
    2. seed sample users in data.js
    3. Run this at http://localhost:5000/api/seed
22. Create Signin Backend API
    1. create signin api
    2. npm install jsonwebtoken
    3. define generateToken
    4. Advanced REST client install to test POST Request.
23. Complete Signin Screen
    1. handle submit action
    2. save token in store and local storage
    3. show user name in header
    4. Install react-tostify --force for making alert message prettier
24. Create Shipping Screen screen and UI for Shipping address
    1. create form inputs
    2. handle save shipping address
    3. add checkout wizard bar (CheckoutSteps component)
25. Create Sign Up Screen
    1. create input forms
    2. handle submit
    3. create backend api for signup in the userRoutes
26. Implement Select Payment Method Screen
    1. create input forms
    2. handle submit
27. Create Place Order Screen
    1. Preview cart items and payment etc
28. Implement Place Order Action
    1. handle place order action
    2. create order create api
29. Create Order Screen
    1. create backend api for order/:id
    2. fetch order api in frontend
    3. show order information in 2 columns
30. Pay Order By PayPal (feature Implementation)
    1. generate paypal client id in Paypal deveoper.org
    2. create api to return client id
    3. install @paypal/react-paypal-js (Frontend)
    4. use PayPalScriptProvider in index.js
    5. use usePayPalScriptReducer in Order Screen
    6. implement loadPaypalScript function
    7. render paypal button
    8. implement onApprove payment function
    9. create pay order api in backend
31. Display Order History
    1. create order screen
    2. create order history api
    3. use api in the frontend
32. Create Profile Screen
    1. get user info from context
    2. show user information
    3. create user update api
    4. update user info
33. Publish To Heroku
    1. create and config node project
    2. serve build folder in frontend folder
    3. Create heroku account
    4. connect it to github
    5. Create mongodb atlas database
    6. Set database connection in heroku env variables
    7. Commit and push
34. Add Sidebar and Search Box
    1. add sidebar
    2. add search box
35. Create Search Screen
    1. show filters
    2. create api for searching products
    3. display results
36. Create Admin Menu
    1. define protected route component
    2. define admin route component
    3. add menu for admin in header
37. Create Dashboard Screen
    1. create dashboard ui
    2. implement backend api
    3. connect ui to backend
38. Manage Products
    1. create products list ui
    2. implement backend api
    3. fetch data
