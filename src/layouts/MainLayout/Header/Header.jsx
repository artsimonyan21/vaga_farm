import Logo from '@assets/logo.svg';
import './header.scss';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header_wrapper">
      <Logo />
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
    </div>
  );
};

export default Header;
