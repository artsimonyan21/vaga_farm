import CloseIcon from '@assets/close.svg';
import './burger_menu.scss';
import { NavLink } from 'react-router-dom';

const BurgerMenu = ({ handleClose }) => {
  return (
    <div className="burger_menu_wrapper" onClick={handleClose}>
      <div className="menu_content" onClick={(e) => e.stopPropagation()}>
        <div className="burger_menu_header">
          <button onClick={handleClose}>
            <CloseIcon />
          </button>
        </div>
        <div className="burger_navlinks">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'navlink_active' : 'navlink')}
            onClick={handleClose}>
            ԳԼԽԱՎՈՐ
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'navlink_active' : 'navlink')}
            onClick={handleClose}>
            ՄԵՐ ՄԱՍԻՆ
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? 'navlink_active' : 'navlink')}
            onClick={handleClose}>
            ԱՐՏԱԴՐԱՆՔ
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) => (isActive ? 'navlink_active' : 'navlink')}
            onClick={handleClose}>
            ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ
          </NavLink>
          <NavLink
            to="/co-workers"
            className={({ isActive }) => (isActive ? 'navlink_active' : 'navlink')}
            onClick={handleClose}>
            ԳՈՐԾԸՆԿԵՐՆԵՐ
          </NavLink>
          <NavLink
            to="/contact-us"
            className={({ isActive }) => (isActive ? 'navlink_active' : 'navlink')}
            onClick={handleClose}>
            ՀԵՏԱԴԱՐՁ ԿԱՊ
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
