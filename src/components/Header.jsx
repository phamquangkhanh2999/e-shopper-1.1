import React, { useRef, useContext } from "react";
import {
  RiPhoneFill,
  RiFacebookFill,
  RiTwitterFill,
  RiLinkedinBoxFill,
  RiGoogleFill,
  RiShoppingCart2Fill,
} from "react-icons/ri";
import { MdOutlineMenu } from "react-icons/md";
import { AiOutlineArrowLeft, AiFillHome } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { Link } from "react-router-dom";
import mainNav from "../static/mainNav";
import { CartContext } from "../context/cartContext/CartContext";

const Header = () => {
  const menuLeft = useRef(null);
  const menuToggle = () => menuLeft.current.classList.toggle("active");
  const { itemCount } = useContext(CartContext);

  return (
    <>
      <div className='header'>
        <div className='header__info'>
          <div className='header__info__phone'>
            <span>
              <RiPhoneFill /> Hotline: +84 123 456
            </span>
          </div>
          <div className='header__info__social'>
            <span className='header__info__social__icon'>
              <RiFacebookFill />
            </span>
            <span className='header__info__social__icon'>
              <RiLinkedinBoxFill />
            </span>
            <span className='header__info__social__icon'>
              <RiTwitterFill />
            </span>
            <span className='header__info__social__icon'>
              <RiGoogleFill />
            </span>
          </div>
        </div>
        <div className='container'>
          <div className='header__logo'>
            <Link to='/'>
              <img
                src='https://ucarecdn.com/4a00d2a7-f6a0-4086-9d46-5f5ccf712769/logo.png'
                alt=''
              />
            </Link>
          </div>
          <div className='header__menu'>
            <div className='header__menu__mobile-toggle' onClick={menuToggle}>
              <MdOutlineMenu />
            </div>
            <div className='header__menu__left' ref={menuLeft}>
              <div className='header__menu__left__close' onClick={menuToggle}>
                <AiOutlineArrowLeft />
              </div>
              {mainNav.map((item, index) => (
                <div
                  key={index}
                  className='header__menu__item header__menu__left__item'
                >
                  <Link to={item.path}>
                    <span>{item.display}</span>
                  </Link>
                </div>
              ))}
            </div>
            <div className='header__menu__right'>
              <div className='header__menu__item header__menu__right__item'>
                <Link to='/login'>
                  <FaUserAlt />
                </Link>
              </div>
              <div className='header__menu__item header__menu__right__item'>
                <MdFavorite />
              </div>
              <div className='header__menu__item header__menu__right__item'>
                <div className='header__menu__item__total'>{itemCount}</div>
                <Link to='/cart'>
                  <RiShoppingCart2Fill />
                </Link>
              </div>
              <div className='header__menu__item header__menu__right__item'>
                <FiSearch />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className='menu'>
        <div className='menu__item menu__mobile__item'>
          <Link to='/'>
            <AiFillHome />
          </Link>
        </div>
        <div className='menu__item menu__mobile__item'>
          <MdFavorite />
        </div>
        <div className='menu__item menu__mobile__item'>
          <div className='menu__item__total'>{itemCount}</div>
          <Link to='/cart'>
            <RiShoppingCart2Fill />
          </Link>
        </div>
        <div className='menu__item menu__mobile__item'>
          <Link to='/login'>
            <FaUserAlt />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
