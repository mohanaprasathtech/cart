import './App.css';
import Header from './Components/Header';
import Products from './Components/Products';
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cart from './Components/Cart';
import { useState } from 'react';
import data from './Data';


function App() {
  const { productItems } = data;
  const[cartitems,setcartitems]=useState([]);
  const handleproduct = (product) =>{
    const exists = cartitems.find((item) => item.id === product.id);
    if (exists) {
      setcartitems(
        cartitems.map((item) =>  item.id === product.id ? 
        {...exists, quantity: exists.quantity + 1 } : item)
      );
    }
    else{
      setcartitems([...cartitems, {...product, quantity: 1}]);
    }
  }

  const handleremoveproduct = (product) => {
    const exists = cartitems.find((item) => item.id === product.id);
    if (exists.quantity === 1) {
      setcartitems(cartitems.filter((item) => item.id !== product.id));
    }
    else{
      setcartitems(
        cartitems.map((item)=> item.id === product.id ? {...exists,quantity: exists.quantity - 1}: item)
      )
    }
  }

  const handleclearcart=()=>{
    setcartitems([]);
  } 

  return (
    <div className="App">
      <BrowserRouter>
      <Router>
        <Switch>
          <Route path="/" exact={true}>
          <Header cartitems={ cartitems }></Header>
           <div>
            <Products handleproduct={ handleproduct } productItems={ productItems }></Products>
           </div>
          </Route>
          <Route path="/cart"> <Cart handleclearcart={ handleclearcart } handleremoveproduct={ handleremoveproduct } handleproduct={ handleproduct } cartitems={ cartitems }></Cart> </Route>
        </Switch>
      </Router>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
