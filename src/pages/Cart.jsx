import React, { useContext } from "react";
import { BsFillReplyFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

import Helmet from "../components/Helmet";
import Button from "../components/Button";
import CartItem from "../components/CartItem";

import numberWithCommas from "../utils/numberWithCommas";

import { CartContext } from "../context/cartContext/CartContext";

const Cart = () => {
  const { total, cartItems, itemCount, clearCart } = useContext(CartContext);

  return (
    <Helmet title='Giỏ Hàng'>
      <div className='cart-title'>
        <h1>Giỏ hàng của bạn</h1>
        <p>Bạn đang có {itemCount} sản phâm trong giỏ hàng </p>
        <div className='cart-title__boder'></div>
      </div>
      {itemCount > 0 ? (
        <div className='cart'>
          {/* cart-list */}
          <div className='cart__list'>
            {cartItems.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </div>
          {/* cart-info */}
          <div className='cart__info'>
            <div className='cart__info__txt'>
              <h1>Thông tin đơn hàng</h1>
              <div className='cart__info__txt__price'>
                <span>Thành Tiền:</span>
                <span>{numberWithCommas(Number(total))}</span>
              </div>
              <p>
                Phí vận chuyển sẽ được tính ở trang thanh toán. <br /> Bạn cũng
                có thể nhập mã giảm giá ở trang thanh toán.
              </p>
            </div>
            <div className='cart__info__btn'>
              <Link to='/payment'>
                <Button size='block'>Thanh Toán</Button>
                {/* <Payment /> */}
              </Link>
              <p onClick={clearCart}>
                <MdDelete />
                Xóa Toàn Bộ
              </p>
              <p>
                <Link to='/catalog'>
                  <BsFillReplyFill /> Tiếp tục mua hàng
                </Link>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className='empty-cart'>
          <img
            className='empty-cart__img'
            src='https://ucarecdn.com/f37347ea-43ab-4f62-8c5b-4fc35f4ab17f/emptycart__img2.jpg'
            alt=''
          />
          <p className='empty-cart__title'>
            Chưa có sản phẩm nào trong giỏ hàng!
          </p>
          <Link to='/catalog'>
            <Button size='sm'>Tiếp tục mua hàng</Button>
          </Link>
        </div>
      )}
    </Helmet>
  );
};

export default Cart;
