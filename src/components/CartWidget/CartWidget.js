import React from 'react';
import { BsCart4 } from 'react-icons/bs';
import './cartwidget.css';

const CartWidget = () => {
 
  return (
    <>
      <li id="icon_cart">
        <a href='#/' className="cart">
          <p>
            {' '}
            <BsCart4 className="item_cart" />
            2
          </p>
        </a>
      </li>
    </>
  );
};

export default CartWidget;
