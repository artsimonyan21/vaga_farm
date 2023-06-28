import { Route, Routes } from 'react-router-dom';
import './product.scss';
import Category from './Category';
import ItemView from './ItemView';

const SubRouter = () => {
  return (
    <div className="product_subpage_wrapper">
      <Routes>
        <Route element={<Category />} path="/:category" />
        <Route element={<ItemView />} path="/:category/:id" />
      </Routes>
    </div>
  );
};

export default SubRouter;
