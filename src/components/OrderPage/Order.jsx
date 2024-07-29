import React from 'react';
import { FaTimes } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contextpage/CartContext.jsx';

const Order = () => {
  const navigate = useNavigate();
const { cart, removeFromCart, updateQuantity,clearCart } = useCart();

const handleContinueShopping = () => {
  navigate('/');
};

const handleQuantityChange = (id, delta) => {
  updateQuantity(id, delta);
};

const calculateSubtotal = () => {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
};

  return (
    <div className="cart-main-area pt-14 pb-14">
      <div className="container mx-auto">
        <h3 className="cart-page-title text-2xl font-semibold mb-6">Your cart items</h3>
        <div className="row text-gray-500">
          <div className="col-12">
            <div className="table-content table-responsive cart-table-content">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr className="border-b bg-gray-500 text-white">
                    <th className="px-4 py-2 text-left">Image</th>
                    <th className="px-4 py-2 text-left">Product Name</th>
                    <th className="px-4 py-2 text-left">Unit Price</th>
                    <th className="px-4 py-2 text-left">Qty</th>
                    <th className="px-4 py-2 text-left">Subtotal</th>
                    <th className="px-4 py-2 text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((product) => (
                    <tr key={product.id} className="border-b">
                      <td className="product-thumbnail px-4 py-6">
                        <a href="#"><img src={product.img} alt="product" className="img-fluid w-16 h-16 object-cover" /></a>
                      </td>
                      <td className="product-name px-4 py-2">{product.title}</td>
                      <td className="product-price-cart px-4 py-2"><span className="amount">{product.price}</span></td>
                      <td className="product-quantity px-4 py-2">
                        <div className="cart-plus-minus flex items-center">
                          <button className="dec qtybutton bg-gray-300 text-gray-700 px-2" onClick={() => handleQuantityChange(product.id, -1)}>-</button>
                          <input type="text" className="cart-plus-minus-box w-12 text-center border border-gray-300 mx-2" value={product.quantity} readOnly />
                          <button className="inc qtybutton bg-gray-300 text-gray-700 px-2" onClick={() => handleQuantityChange(product.id, 1)}>+</button>
                        </div>
                      </td>
                      <td className="product-subtotal px-4 py-2">{product.price * product.quantity}</td>
                      <td className="product-remove px-4 py-2">
                        <button className="text-red-500 hover:text-red-700" onClick={() => removeFromCart(product.id)}>
                          <FaTimes />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="row mt-6">
            <div className="col-lg-12">
              <div className="cart-shiping-update-wrapper flex justify-between">
                <div className="cart-shiping-update">
                  <button onClick={handleContinueShopping} className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white rounded px-4 py-2">Continue Shopping</button>
                </div>
                <div className="cart-clear">
                  <button onClick={clearCart} className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white rounded px-4 py-2">Clear Shopping Cart</button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/4 mt-6 lg:mt-0 lg:ml-auto pt-[55px] border-l-1">
            <div className="grand-totall p-6 rounded-lg shadow-xl bg-gray-500 text-white">
              <div className="title-wrap mb-4">
                <h4 className="cart-bottom-title section-bg-gray-cart font-bold text-2xl">Cart Total</h4>
              </div>
              <h5 className="text-base mb-2">SubTotal: <span>${calculateSubtotal()}</span></h5>
              <h5 className="text-base mb-2 border-y-2 py-4">Shipping Charges: <span>200</span></h5>
              <h4 className="grand-total-title mb-4 border-b-2 py-2">Total: <span>${calculateSubtotal() + 200}</span></h4>
              <a href="#" className="bg-gradient-to-r from-primary to-secondary text-white rounded px-4 py-2 transition-all duration-200 hover:from-blue-500 hover:to-green-500">Proceed Checkout</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;