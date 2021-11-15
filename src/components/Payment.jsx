import React, { useContext, useEffect, useState } from "react";
import Helmet from "./Helmet";
import numberWithCommas from "../utils/numberWithCommas";
import { CartContext } from "../context/cartContext/CartContext";
import user from "../static/inputUser";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "./Button";
import { Link } from "react-router-dom";

const schema = yup.object().shape({
  username: yup.string().required("Vui lòng nhập họ tên"),
  phone: yup.string().required("Vui lòng nhập số điện thoại"),
  city: yup.string().required("Vui lòng nhập tỉnh/thành phố"),
  District: yup.string().required("Vui lòng nhập quận/huyện"),
  Wards: yup.string().required("Vui lòng nhập phường/xã"),
  Address: yup.string().required("Vui lòng nhập địa chỉ"),
});

const Payment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  const { total, cartItems } = useContext(CartContext);
  const [vat, setVat] = useState(0);
  const [totalMoney, setTotalMoney] = useState(0);

  useEffect(() => {
    const totalVat = Math.round(total / 10);
    setVat(totalVat);
  }, [total]);

  useEffect(() => {
    const tempTotalMoney = Math.round(total) + vat;
    setTotalMoney(tempTotalMoney);
  }, [total, vat]);

  return (
    <Helmet title='Thanh Toán'>
      <div className='payment'>
        <div className='payment__form'>
          <h2>THÔNG TIN THANH TOÁN</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            {user.inputs.map((input, index) => (
              <>
                <input
                  key={index}
                  type={input.type}
                  placeholder={input.placeholder}
                  name={input.name}
                  {...register(`${input.name}`, { required: true })}
                />
                <div className='payment__form__message'>
                  <p>{errors[input.name]?.message}</p>
                </div>
              </>
            ))}
            <select {...register("transport", { required: true })}>
              <option disabled value='methods'>
                Phương Thức Vận Chuyển
              </option>
              <option value='Tiết kiệm'>Tiết kiệm</option>
              <option value='Tiêu chuẩn'>Tiêu chuẩn</option>
              <option value='Nhanh'>Nhanh</option>
              <option value='Hỏa tốc'>Hỏa tốc</option>
            </select>
            <textarea
              placeholder='Ghi chú '
              {...register("note", { required: true })}
            />
          </form>
        </div>
        {/* end from */}
        <div className='payment__details'>
          <h2>THÔNG TIN ĐƠN HÀNG</h2>
          <div className='payment__details__list'>
            <div className='payment__details__list__item'>
              <div className='payment__details__list__item__left'>SẢN PHẨM</div>
              <div className='payment__details__list__item__right'>
                THÀNH TIỀN
              </div>
            </div>

            {cartItems.map((product) => (
              <>
                <div className='payment__details__list__item'>
                  <div className='payment__details__list__item__left'>
                    {product.title}
                  </div>
                  <div className='payment__details__list__item__right'>
                    {numberWithCommas(Number(product.price))} -đ
                  </div>
                </div>
              </>
            ))}

            <div className='payment__details__list__item borde-item'>
              <div className='payment__details__list__item__left'>Tạm tính</div>
              <div className='payment__details__list__item__right'>
                {numberWithCommas(Number(total))} -đ
              </div>
            </div>
            <div className='payment__details__list__item'>
              <div className='payment__details__list__item__left'>
                VAT (10%)
              </div>
              <div className='payment__details__list__item__right'>
                {numberWithCommas(Number(vat))} -đ
              </div>
            </div>
            <div className='payment__details__list__item'>
              <div className='payment__details__list__item__left'>
                Phí vận chuyển
              </div>
              <div className='payment__details__list__item__right'>
                {numberWithCommas(Number(0))} -đ
              </div>
            </div>

            <div className='payment__details__list__item borde-item'>
              <div className='payment__details__list__item__left '>
                TỔNG TIỀN
              </div>
              <div className='payment__details__list__item__right'>
                {numberWithCommas(Number(totalMoney))} -đ
              </div>
            </div>
          </div>
          <div className='payment__order'>
            <h2>PHƯƠNG THỨC THANH TOÁN</h2>
            <div className='payment__order__list'>
              <div className='payment__order__list__item'>
                <input type='radio' />
                <label htmlFor=''>
                  Thanh toán trực tuyến bằng thẻ Visa/MasterCard
                </label>
              </div>
              <div className='payment__order__list__item'>
                <input type='radio' />
                <label htmlFor=''>Chuyển khoản ngân hàng</label>
              </div>
              <div className='payment__order__list__item'>
                <input type='radio' />
                <label htmlFor=''>
                  Thanh toán tiền mặt khi nhận hàng (COD)
                </label>
              </div>
              <Link to='/order-complete'>
                <Button onSubmit={handleSubmit(onSubmit)} size='block'>
                  Thanh Toán
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Helmet>
  );
};

export default Payment;
