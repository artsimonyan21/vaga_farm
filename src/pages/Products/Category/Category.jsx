import { useParams } from 'react-router-dom';
import products from '@const/product.json';
import ProductCard from '@components/ProductCard';

import './category.scss';

const Category = () => {
  const params = useParams();
  const categoryProduct = products[params.category];

  return (
    <div className="product_category_wrapper">
      {categoryProduct.map((props, index) => (
        <ProductCard {...{ ...props, category: params.category }} key={index} />
      ))}
    </div>
  );
};

export default Category;
