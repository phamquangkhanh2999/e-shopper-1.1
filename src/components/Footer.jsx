import { Link } from 'react-router-dom';
import Grid from './Grid';
const footerAboutLinks = [
  {
    display: 'Giới Thiệu',
    path: '/about',
  },
  {
    display: 'Liên Hệ',
    path: '/about',
  },
  {
    display: 'Tuyển Dụng',
    path: '/about',
  },
  {
    display: 'Tin Tức',
    path: '/about',
  },
  {
    display: 'Hệ Thống Cửa Hàng',
    path: '/about',
  },
];
const footerCustomerLinks = [
  {
    display: 'Chính sách đổi trả',
    path: '/about',
  },
  {
    display: 'Chính sách bảo hành',
    path: '/about',
  },
  {
    display: 'Chính sách hoàn tiền',
    path: '/about',
  },
];
const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <Grid col={4} mdcol={2} smcol={1} gap={10}>
          <div>
            <div className='footer__title'>Tổng đài hỗ trợ</div>
            <div className='footer__content'>
              <p>
                Liên hệ đặt hàng <strong>0926 744 032</strong>
              </p>
              <p>
                Thăc mắc đơn hàng <strong>0926 744 032</strong>
              </p>
              <p>
                Góp ý, khuyến nại <strong>0926 744 032</strong>
              </p>
            </div>
          </div>

          <div>
            <div className='footer__title'>Về E-SHOPPER</div>
            <div className='footer__content'>
              {footerAboutLinks.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>

          <div>
            <div className='footer__title'>Chăm sóc khách hàng</div>
            <div className='footer__content'>
              {footerCustomerLinks.map((item, index) => (
                <p key={index}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>
          <div className='footer__about'>
            <p>
              <Link to='/'>
                <img
                  src='https://ucarecdn.com/4a00d2a7-f6a0-4086-9d46-5f5ccf712769/logo.png'
                  className='footer__logo'
                  alt=''
                />
              </Link>
            </p>
            <p>
              Hướng đến mục tiêu mang lại niềm vui ăn mặc mới mỗi ngày cho hàng
              triệu người tiêu dùng Việt. Hãy cùng Yolo hướng đến một cuộc sống
              năng động, tích cực hơn.
            </p>
          </div>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
