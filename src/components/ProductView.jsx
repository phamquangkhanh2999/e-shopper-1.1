import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import numberWithCommas from "../utils/numberWithCommas";
import { CartContext } from "../context/cartContext/CartContext";
import { Link } from "react-router-dom";

import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductView = (props) => {
  const notify = () =>
    toast.success("Thêm Thành Công", {
      position: toast.POSITION.TOP_RIGHT,
    });

  const { addProduct, cartItems, increase } = useContext(CartContext);
  const isInCart = (product) => {
    return !!cartItems.find((item) => item.id === product.id);
  };

  const [previewImg, setPreviewImg] = useState("adas");

  const [descriptionExpand, setDescriptionExpand] = useState(
    props.product.image_link
  );

  const [color, setColor] = useState(undefined);

  const [size, setSize] = useState(undefined);

  const [quantity, setQuantity] = useState(1);

  const updateQuantity = (type) => {
    if (type === "plus") {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    }
  };

  useEffect(() => {
    setPreviewImg(props.product.image_link);
    setQuantity(1);
    setColor(undefined);
    setSize(undefined);
  }, [props.product]);

  return (
    <div className='product'>
      <div className='product__images'>
        <div className='product__images__list'>
          <div
            className='product__images__list__item'
            onClick={() => setPreviewImg(props.product.image_link)}
          >
            <img src={props.product.image_link} alt='' />
          </div>
          <div
            className='product__images__list__item'
            onClick={() => setPreviewImg(props.product.image_list)}
          >
            <img src={props.product.image_list} alt='' />
          </div>
        </div>
        <div className='product__images__main'>
          <img src={previewImg} alt='' />
        </div>
        <div
          className={`product-description ${descriptionExpand ? "expand" : ""}`}
        >
          <div className='product-description__title'>Chi tiết sản phẩm</div>
          <div
            className='product-description__content'
            dangerouslySetInnerHTML={{ __html: props.product.description }}
          ></div>
          <div className='product-description__toggle'>
            <Button
              size='sm'
              onClick={() => setDescriptionExpand(!descriptionExpand)}
            >
              {descriptionExpand ? "Thu gọn" : "Xem thêm"}
            </Button>
          </div>
        </div>
      </div>
      {/* end image */}
      {/*info */}
      <div className='product__info'>
        <h1 className='product__info__title'>{props.product.title}</h1>
        {/* price */}
        <div className='product__info__item'>
          <span className='product__info__item__price'>
            {numberWithCommas(Number(props.product.price))}
          </span>
        </div>
        {/* color */}
        <div className='product__info__item'>
          <div className='product__info__item__title'>Màu sắc</div>
          <div className='product__info__item__list'>
            {props.product.colors.map((item, index) => (
              <div
                key={index}
                className={`product__info__item__list__item ${
                  color === item ? "active" : ""
                }`}
                onClick={() => setColor(item)}
              >
                <div className={`circle bg-${item}`}></div>
              </div>
            ))}
          </div>
        </div>
        {/* size */}
        <div className='product__info__item'>
          <div className='product__info__item__title'>Kích cỡ</div>
          <div className='product__info__item__list'>
            {props.product.size.map((item, index) => (
              <div
                key={index}
                className={`product__info__item__list__item ${
                  size === item ? "active" : ""
                }`}
                onClick={() => setSize(item)}
              >
                <span className='product__info__item__list__item__size'>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* quantity */}
        <div className='product__info__item'>
          <div className='product__info__item__title'>Số lượng</div>
          <div className='product__info__item__quantity'>
            <div
              className='product__info__item__quantity__btn'
              onClick={() => updateQuantity("minus")}
            >
              <i>
                <AiOutlineMinus />
              </i>
            </div>
            <div className='product__info__item__quantity__input'>
              {quantity}
            </div>
            <div
              className='product__info__item__quantity__btn'
              onClick={() => updateQuantity("plus")}
            >
              <i>
                <AiOutlinePlus />
              </i>
            </div>
          </div>
        </div>
        {/* btn add cart*/}
        <div className='product__info__item'>
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
          <Link to='/cart'>
            <Button>mua ngay</Button>
          </Link>
        </div>
      </div>
      {/* end info */}
      <div
        className={`product-description mobile ${
          descriptionExpand ? "expand" : ""
        }`}
      >
        <div className='product-description__title'>Chi tiết sản phẩm</div>
        <div
          className='product-description__content'
          dangerouslySetInnerHTML={{ __html: props.product.description }}
        ></div>
        <div className='product-description__toggle'>
          <Button
            size='sm'
            onClick={() => setDescriptionExpand(!descriptionExpand)}
          >
            {descriptionExpand ? "Thu gọn" : "Xem thêm"}
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductView.propTypes = {
  product: PropTypes.object,
};

export default ProductView;
