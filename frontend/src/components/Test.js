import mongoose from 'mongoose';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import React, { useEffect } from 'react';
import { isAdmin, isAuth } from '../../../backend/utils';
import orderRouter from '../../../backend/routes/orderRoutes';

//-----------------------------------------------------------------------------------//
/////Structure of models (backend -> models - > xyzModel.js)
const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema);
export default Product;

//-----------------------------------------------------------------------------------//
/////Structure of Routes (backend -> routes - > xyzRoute.js)
import express from 'express';
import expressAsyncHandler from 'express-async-handler';
const xyzRouter = express.Router();
xyzRouter.get(
  '/:id',
  anydepedencyifany,
  expressAsyncHandler(async(req,res) =>{
    const product = await Product.findById(req.params.id);
    const order = await Order.findById(req.params.id);
    res.send({message: 'product is available'});
  })
)
export default xyzRouter;

//-----------------------------------------------------------------------------------//
//backticks template literal exerc  ises
Note:
const name = 'Hammad';
const greetings = `Hello, $(name)!`;
console.log(greetings); // output is Hello, Hammad!

const a = '10';
const b = '20';
console.log(`The sum of $(a) and $(b) is $(a+b)`); // Output: The sum of 5 and 10 is 15.


//-----------------------------------------------------------------------------------//
//Checkout steps from 24 create shipping screen.

export default function CheckoutSteps(props){
  return
  <Row className='"checkout-steps'>
    <Col> className= {props.step1 ? 'active': ''}> Sign-In </Col>
    <Col> className= {props.step2 ? 'active': ''}> Shipping </Col>
    <Col> className= {props.step3 ? 'active': ''}> Payment </Col>
    <Col> className= {props.step4 ? 'active': ''}> Place-Order </Col>
    
    </Row>

}


React Hooks:
We can't use React hooks in class components, We can only use them in functional components.
We define the Hooks right after defining the functional component.
We cannot put a hook in a conditional operations, They should be in top level of functional and always called in
exact same order.


1.useState();
2 useEffect()
3 useMemo()
4 useRef()
5 useContext
6 useReducer()


1. useEffect():
is a hook for handling the sideeffects in functional components.
It takes two arguments. a function that contains the code to run and a dependency Array.

function DataFetch(){
  const [data, setData] = useState(null);
  useEffect(() =>{
    fetch (`https://localHost:5000`)
  }, []); //the hook is going to run whenever the 2nd papameter is changed, In this case we passed an [] array.
}

2. useState():
here is the template for useState()
function App(){
  const [arr] = useState()
}

exercise1 useState:
function App(){
  const [count, setCount] = useState(5)

  function decrementCound(){
    SetCount(prevCount => prevCount - 1);

  }
  function incrementCound(){
    SetCount(prevCount => prevCount + 1);
    
  }
}

exercise2 useState:
function countInitial(){
  console.log('run function')
  return 4

}

function App(){
  const [count, setCount] = useState((countInitial))

  function decrementCound(){
    SetCount(prevCount => prevCount - 1);

  }
  function incrementCound(){
    SetCount(prevCount => prevCount + 1);
    
  }
}

OrderRouter for delete order:
orderRouter.delete(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res =>{
    const order = await Order.findById(req.params.id);
    if(order) {
      await order.deleteOne();
      res.send({message: 'Order Deleted'});
    }
    else{
      res.status(404).send({ message: 'Order not found'});

    }
  }))
)

OrderRouter for deliver order:
orderRouter.put(
  '/:id/deliver',
  isAuth,
  expressAsyncHandler(async(req, res =>{
    const order = await Order.findById(req.params.id);
    if(order){
      order.isDelivered = true;
      order.deliveredAt = Date.now();
      await order.save();
      res.send({message: 'order Delivered'});
    }
    else{res.status(404}.send({ message: 'Not found'});
  }))
)

OrderRouter for list orders:
orderRouter.get(
  '/',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res =>{
    const orders = await Order.find().populate('user', 'name');
    res.send(orders);
  }))

)
ProductRouter for delete Products:
productRouter.delete(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler( async (req, res =>{
    const product = await Product.findById(req.params.id);
    if(product){
      await product.deleteOne();
      res.send({message: 'product is deleted'});
    }
    else{
      res.status(404).send({message: 'Product Not Found'});
    }
  }))

)
userRouter for list all users in Users
userRouter.get(
  '/',
  isAdmin,
  isAuth,
  expressAsyncHandler(async(req, res) =>{
    const users = await User.find({});
    res.send(users);
  })
}
userRouter.get(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
      res.send(user);
    } else {
      res.send(404).send({ message: 'User Not Found' });
    }
  })
);
userRouter.put(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      user.isAdmin = Boolean(req.body.isAdmin);
      const updatedUser = await user.save();
      res.send({ message: 'User Updated', user: updatedUser });
    } else {
      res.status(404).send({ message: 'User Not Found' });
    }
  })
);

userRouter.delete(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
      if (user.email === 'admin@example.com') {
        res.status(404).send({ message: 'Cannot delete this Admin user' });
        return;
      }
      await user.deleteOne();
      res.send({ message: 'User has been deleted' });
    } else {
      res
        .status(404)
        .send({ message: 'User Not Found, Please check credentials' });
    }
  })
);

How can you use express-async-handler with multiple asynchronous operations in a route handler?

userRouter.get(
  '/multiple',
  expressAsyncHandler(asynce(req,res) =>{
    const result1 = await function1();
    const result2 = await function2();
    res.send({result1, result2});
  })
);

//-----------------------------------------------------------------------------------//
/////npm install underscore --save

import _ from 'underscore';
const numbers = [1, 2, 4, 4, 6, 7, 5, 7, 8, 8, 7, 5];

// Unique: Removes duplicate values from an array
const uniqueNumbers = _.uniq(numbers);
console.log(uniqueNumbers);

//-----------------------------------------------------------------------------------//
/////AXIOS
npm install axios in Frontend folder
AXIOS is used for making HTTP requests from your Application
AXIOS is used to fetch data from the backend
AXIOS and FETCH are mostly the same Axios and fetch serve similar purposes, 
but Axios offers a more user-friendly API, better error handling, and supports request/response transformation out of the box. 
The choice between Axios and fetch often depends on personal preference and project requirements.
used mostly in src -> Screens -> ScreenXyz.js
Async operations and simplifies error handling
Certainly! In JavaScript, the term "fetch" commonly refers to making HTTP requests to fetch data from a server. 
The fetch function is a built-in feature in modern JavaScript
 
Execise:

 function HomeScreen(){
  const [products, setProducts] = useState([]);
  useEffect(() =>{
    const fetchData = async() =>{
      const result = await axios.get('/api/products');
      setProducts(result.data);
    }
    fetchData()
  },[]);
 }

//-----------------------------------------------------------------------------------//
/////Mongoose
Here are the methods of mongoose
 aggregate
 count
 countDocuments
 deleteOne
 deleteMany
 estimatedDocumentCount
 find
 findOne
 findOneAndDelete
 findOneAndReplace
 findOneAndUpdate
 init
 insertMany
 remove
 replaceOne
 save
 update
 updateOne
 updateMany
 validate
 