import React, { useContext } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";

import PropTypes from "prop-types";
import numberWithCommas from "../utils/numberWithCommas";
import { CartContext } from "../context/cartContext/CartContext";

const CartItem = (props) => {
  const { increase, decrease, removeProduct } = useContext(CartContext);

  return (
    <div className='cart__item'>
      <div className='cart__item__image'>
        <img src={props.product.image_link} alt='' />
      </div>
      <div className='cart__item__wrapper'>
        <div className='cart__item__wrapper__info'>
          <div className='cart__item__wrapper__info__name'>
            <h3>{props.product.title}</h3>
          </div>
          <div className='cart__item__wrapper__info__price'>
            {numberWithCommas(Number(props.product.price))} đ
          </div>
          <div className='cart__item__wrapper__info__color'>
            {`M / ${props.product.colors[0]}`}
          </div>
          <div className='cart__item__wrapper__info__quantity'>
            <div className='cart__item__wrapper__info__quantity__btn'>
              {props.product.quantity >= 1 && (
                <div className='cart__item__wrapper__info__quantity__btn__item'>
                  <AiOutlineMinus onClick={() => decrease(props.product)} />
                </div>
              )}

              <div className='cart__item__wrapper__info__quantity__btn__input'>
                {props.product.quantity}
              </div>
              <div
                className='cart__item__wrapper__info__quantity__btn__item'
                __item
              >
                <AiOutlinePlus onClick={() => increase(props.product)} />
              </div>
            </div>
            <div className='cart__item__wrapper__info__quantity__price'>
              {numberWithCommas(Number(props.product.price))} đ
            </div>
          </div>
        </div>
        <div className='cart__item__wrapper__del'>
          <BsFillTrashFill onClick={() => removeProduct(props.product)} />
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  product: PropTypes.object,
};

export default CartItem;
