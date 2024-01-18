import mongoose from 'mongoose';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import React from 'react';


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
//backticks template literal exercises
const name = 'Hammad';
const greetings = `Hello, $(name)!`;
console.log(greetings); // output is Hello, Hammad!

const a = '10';
const b = '20';
console.log(`The sum of $(a) and $(b) is $(a+b)`); // Output: The sum of 5 and 10 is 15.


//--------------------------------------------------------------------------------------//
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