import PrimaryButton from '@components/PrimaryButton';
import data from '@const/product.json';
import './product.scss';
import ProductCard from '@components/ProductCard';

const Product = () => {
  const bandages = data.bandages.slice(0, 6);

  return (
    <div className="product_wrapper_card">
      <h4>ԱՐՏԱԴՐԱՆՔ</h4>
      <div className="product_content_wrapper">
        {bandages.map((props, index) => (
          <ProductCard {...{ ...props, category: 'bandages' }} key={index} />
        ))}
      </div>
      <PrimaryButton text="ՏԵՍՆԵԼ ԱՄԲՈՂՋԸ" />
    </div>
  );
};

export default Product;
