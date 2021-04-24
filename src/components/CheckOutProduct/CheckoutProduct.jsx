import React from 'react';
import { useStateValue } from '../../StateProvider/StateProvider';

import './CheckoutProduct.css';

const CheckoutProduct = ({id, image, title, price, rating}) => {
    
    const [{ basket }, dispatch] = useStateValue();

    const RemoveFromBasket = () => {
        // remove item from basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        });
    }
    
    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} alt=""/>
            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className='checkoutProduct__price'>
                    <strong>₹</strong>
                    <small>{price}</small>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map(() => (
                        <p>⭐</p>
                    ))}
                </div>
                <button onClick={RemoveFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
