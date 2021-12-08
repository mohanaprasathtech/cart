  import React from 'react';
  import "./Cart.css";
  import{ Link } from 'react-router-dom';

function Cart({ cartitems,handleproduct,handleremoveproduct,handleclearcart }) {
    const totalprice = cartitems.reduce((price,item) => price + item.quantity * item.price, 0);
    return (
        <div>
            <div className="cart-items">
                <div className="cart-items-header">
               <Link to="/"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
</svg></Link>
                    <h3>Cart Items</h3>
                    <div>
                        { cartitems.length >=1 && <button id="clear" className="btn btn-outline-danger" onClick={ ()=>handleclearcart() }>Clear Cart</button> }
                        
                    </div>
                </div>
                { cartitems.length === 0 && <div className="cart-empty">Cart is empty</div> }
               <div>
                   { cartitems.map((item) =>(
                       <div key={ item.id } className="cart-list">
                        <img className="cart-image" src={ item.image } alt="" srcset="" />
                       <div className="cart-name">
                           { item.name }
                       </div>
                       <div className="cart-function">
                           <button className="cart-add" onClick={ ()=>handleproduct(item) }>+</button>
                           <button className="cart-remove" onClick={ ()=> handleremoveproduct(item) }>-</button>
                       </div>
                       <div className="cart-price">
                           {item.quantity} * { item.price }
                       </div>
                       <button id="delete" className="btn btn-danger" onClick={ ()=>handleremoveproduct(item) }>Remove</button>
                       </div>
                   ) ) }
                     <div className="cart-total-name">
                   Total price:<div className="cart-total-price">${ totalprice }</div>
                   { cartitems.length >=1 && <a target="_blank" href="https://pmny.in/mrK6uzXu2IMu"><button className="btn btn-success">Checkout</button></a> }
                  
               </div>
               </div>
             
            </div>
        </div>
    )
}

export default Cart
