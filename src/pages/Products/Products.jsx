import { NavLink } from 'react-router-dom';
import SubRouter from './SubRouter';
import './product.scss';

const Products = () => {
  return (
    <div className="product_page_wrapper">
      <div className="navlink_wrapper">
        <NavLink
          to="bandages"
          className={({ isActive }) => (isActive ? 'navlink_active' : 'navlink')}>
          Բինտեր
        </NavLink>
        <NavLink
          to="tanziffs"
          className={({ isActive }) => (isActive ? 'navlink_active' : 'navlink')}>
          թանզիֆՆԵՐ
        </NavLink>
        <NavLink
          to="napkins"
          className={({ isActive }) => (isActive ? 'navlink_active' : 'navlink')}>
          անձեռոցիկներ
        </NavLink>
        <NavLink to="tops" className={({ isActive }) => (isActive ? 'navlink_active' : 'navlink')}>
          ԹՈՓԵՐ
        </NavLink>
      </div>
      <SubRouter />
    </div>
  );
};

export default Products;
