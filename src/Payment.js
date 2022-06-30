import { Link, useHistory } from 'react-router-dom';
import React from 'react';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './stateProvider';
import { db } from './firebase';

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();

    const handleSubmit = () => {
        //db.collection('users').doc(user?.id).collection('orders').doc(payment)

        dispatch({
            type: 'EMPTY_BASKET'
        })
        history.replace('/orders');
    };

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout (<Link to="/checkout">{basket?.length} items</Link>)
                </h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.price}
                                price={item.price}
                                range={item.range}
                            />
                        ))}
                    </div>
                </div>

                <div className="payment__section">
                    <button onClick={handleSubmit}>Make Payment</button>
                </div>
            </div>
        </div>
    )
}

export default Payment;
