import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './stateProvider';
import { useHistory } from 'react-router-dom';

function Subtotal() {
    const history = useHistory();
    const [{ basket }, dispatch] = useStateValue();

    const calculatePrice = () => {
        let price = 0;
        for (let item of basket) {
            price += item.price;
        }
        return price;
    }

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={() => (
                    <>
                        <p>
                            Subtotal ({basket?.length} items):
                            <strong> ${calculatePrice()}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />
                            This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={0}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <button onClick={e => history.push('/payment')}>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal;
