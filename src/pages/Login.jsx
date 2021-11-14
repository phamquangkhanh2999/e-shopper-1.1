import React from "react";
import { useForm } from "react-hook-form";
import Button from "../components/Button";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <div className='login'>
      <div className='login__left'>
        <h1>
          <span>E</span>
          -SHOPPER
        </h1>
        <p>
          Đặt sự hài lòng của khách hàng là ưu tiên số 1 trong mọi suy nghĩ và{" "}
          <br />
          Hành động của mình là sứ mệnh, là triết lý, chiến lược... luôn cùng{" "}
          <br />
          E-SHOPPER tiến bước!
        </p>
      </div>
      <div className='login__right'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor=''>Email của bạn</label>
          <input
            type='email'
            placeholder='Email của bạn'
            {...register("Email của bạn", {})}
          />
          <label htmlFor=''>Mật khẩu</label>
          <input
            type='password'
            placeholder='password:'
            {...register("password:", {})}
          />

          <Button>Đăng Nhập</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
