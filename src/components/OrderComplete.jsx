import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { CartContext } from "../context/cartContext/CartContext";
import numberWithCommas from "../utils/numberWithCommas";

const OrderComplete = () => {
  const { total, cartItems } = useContext(CartContext);
  const currDate = new Date().toLocaleDateString();
  const ramdom = Math.floor(Math.random() * 10000);

  const [vat, setVat] = useState(0);
  const [totalMoney, setTotalMoney] = useState(0);

  useEffect(() => {
    const totalVat = Math.round(total / 10);
    setVat(totalVat);
  }, [total]);
  useEffect(() => {
    const tempTotalMoney = Math.round(total) + vat + 23000;
    setTotalMoney(tempTotalMoney);
  }, [total, vat]);

  return (
    <div className='order'>
      <div className='order__title'>
        <h1>ĐẶT HÀNG THÀNH CÔNG!</h1>
        <p>Cảm ơn quý khách đã lựa chọn E-Shopper</p>
        <div className='order__title__date'>
          <p>Mã đơn: </p>
          <p>{ramdom}</p>
        </div>
        <div className='order__title__date'>
          <p>Ngày nhận đơn: </p>
          <p>{currDate}</p>
        </div>
      </div>

      <div className='order__details'>
        <h2>THÔNG TIN ĐƠN HÀNG</h2>
        <div className='order__details__list'>
          <div className='order__details__list__item'>
            <div className='order__details__list__item__left'>SẢN PHẨM</div>
            <div className='order__details__list__item__right'>THÀNH TIỀN</div>
          </div>

          {cartItems.map((product) => (
            <>
              <div className='order__details__list__item'>
                <div className='order__details__list__item__left'>
                  {product.title}
                </div>
                <div className='order__details__list__item__right'>
                  {numberWithCommas(Number(product.price))} -đ
                </div>
              </div>
            </>
          ))}

          <div className='order__details__list__item borde-item'>
            <div className='order__details__list__item__left'>Tạm tính</div>
            <div className='order__details__list__item__right'>
              {numberWithCommas(Number(total))} -đ
            </div>
          </div>
          <div className='order__details__list__item'>
            <div className='order__details__list__item__left'>VAT (10%)</div>
            <div className='order__details__list__item__right'>
              {numberWithCommas(Number(vat))} -đ
            </div>
          </div>
          <div className='order__details__list__item'>
            <div className='order__details__list__item__left'>
              Phí vận chuyển
            </div>
            <div className='order__details__list__item__right'>
              {numberWithCommas(Number(23000))} -đ
            </div>
          </div>
          <div className='order__details__list__item borde-item'>
            <div className='order__details__list__item__left'>
              Phương thức thanh toán
            </div>
            <div className='order__details__list__item__right'>
              Thanh toán tiền mặt khi nhận hàng (COD)
            </div>
          </div>
          <div className='order__details__list__item'>
            <div className='order__details__list__item__left'>
              Giao hàng dự kiến
            </div>
            <div className='order__details__list__item__right'>{currDate}</div>
          </div>
          <div className='order__details__list__item'>
            <div className='order__details__list__item__left'>
              Phương thức vận chuyển
            </div>
            <div className='order__details__list__item__right'>Tiêu chuẩn</div>
          </div>

          <div className='order__details__list__item borde-item'>
            <div className='order__details__list__item__left '>TỔNG TIỀN</div>
            <div className='order__details__list__item__right'>
              {numberWithCommas(Number(totalMoney))} -đ
            </div>
          </div>
        </div>
        <Link to='/'>
          <Button size='block'>Quay về trang chủ</Button>
        </Link>
      </div>
    </div>
  );
};

export default OrderComplete;
