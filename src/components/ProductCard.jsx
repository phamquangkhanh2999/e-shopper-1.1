import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import numberWithCommas from "../utils/numberWithCommas";
import Button from "./Button";
import { CartContext } from "../context/cartContext/CartContext";

import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductCard = (props) => {
  const notify = () =>
    toast.success("Thêm Thành Công", {
      position: toast.POSITION.TOP_RIGHT,
    });
  const { addProduct, cartItems, increase } = useContext(CartContext);
  const isInCart = (product) => {
    return !!cartItems.find((item) => item.id === product.id);
  };

  return (
    <div className='product-card'>
      <Link to={`/catalog/${props.product.id}`}>
        <div className='product-card__image'>
          <img src={props.product.image_link} alt='' />
          <img src={props.product.image_list} alt='' />
        </div>
        <h3 className='product-card__name'>{props.product.title}</h3>
        <div className='product-card__price'>
          {numberWithCommas(Number(props.product.price))} đ
          <span className='product-card__price__old'>
            {/* <del>{numberWithCommas(399000)}</del> */}
          </span>
        </div>
      </Link>
      <div className='product-card__btn'>
        {isInCart(props.product) && (
          <div className='product-card__btn__item' onClick={notify}>
            <Button
              size='sm'
              onClick={() => increase(props.product)}
              className='btn btn-outline-primary btn-sm'
            >
              Bổ Sung Thêm
            </Button>
            <ToastContainer
              draggable={false}
              transition={Slide}
              autoClose={1000}
            />
          </div>
        )}

        {!isInCart(props.product) && (
          <div className='product-card__btn__item' onClick={notify}>
            <Button
              size='sm'
              onClick={() => addProduct(props.product)}
              className='btn btn-primary btn-sm'
              animate
              icon
            >
              Thêm vào giỏ hàng
            </Button>
            <ToastContainer
              draggable={false}
              transition={Slide}
              autoClose={1000}
            />
          </div>
        )}
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  image_link: PropTypes.string.isRequired,
  image_list: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  slug: PropTypes.string.isRequired,
};

export default ProductCard;
