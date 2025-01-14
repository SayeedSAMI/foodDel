import 'react'
import './PlaceOrder.css'
const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext)
  return (
    <form action="" className='Place-order'>
      <div className="place-order-left">
        <p className='title'>Delivery INformation</p>
        <div className="multi-field">
          <input type="text" placeholder='Frist name' />
          <input type="text" placeholder='Last name' />
        </div>
        <input type="email" placeholder='Email address' />
        <input type="text" placeholder='Street' />
      </div>
      <div className="multi-field">
        <input type="text" placeholder='City' />
        <input type="text" placeholder='State' />
      </div>
      <div className="multi-field">
        <input type="text" placeholder='Zip code' />
        <input type="text" placeholder='country' />
      </div>
      <input type="text" placeholder='Phone' />
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <div className="cart-total-details">
              <p>Total</p>
              <p>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</p>
            </div>
          </div>
          <button>PROCEED TO Payment</button>
        </div>
      </div>
    </form>
  )
}
import './PlaceOrder.css'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
export default PlaceOrder
