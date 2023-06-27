import Logo from '@assets/logo.svg';
import BurgerIcon from '@assets/burger_menu.svg';
import './header.scss';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import BurgerMenu from './BurgerMenu';

const Header = () => {
  const [isBurgerMenuOpened, setIsBurgerMenuOpened] = useState(false);
  const handleOpenClose = () => [setIsBurgerMenuOpened((prev) => !prev)];
  return (
    <div className="header_wrapper">
      <NavLink to="/">
        <Logo className="header_logo" />
      </NavLink>
      <div className="navlink_wrapper">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'navlink_active' : 'navlink')}>
          ԳԼԽԱՎՈՐ
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? 'navlink_active' : 'navlink')}>
          ՄԵՐ ՄԱՍԻՆ
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) => (isActive ? 'navlink_active' : 'navlink')}>
          ԱՐՏԱԴՐԱՆՔ
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) => (isActive ? 'navlink_active' : 'navlink')}>
          ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ
        </NavLink>
        <NavLink
          to="/co-workers"
          className={({ isActive }) => (isActive ? 'navlink_active' : 'navlink')}>
          ԳՈՐԾԸՆԿԵՐՆԵՐ
        </NavLink>
        <NavLink
          to="/contact-us"
          className={({ isActive }) => (isActive ? 'navlink_active' : 'navlink')}>
          ՀԵՏԱԴԱՐՁ ԿԱՊ
        </NavLink>
      </div>
      <button className="burger_button" onClick={handleOpenClose}>
        <BurgerIcon />
      </button>
      {isBurgerMenuOpened && <BurgerMenu handleClose={() => setIsBurgerMenuOpened(false)} />}
    </div>
  );
};

export default Header;
