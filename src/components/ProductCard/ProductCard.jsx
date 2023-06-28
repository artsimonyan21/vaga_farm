import itemImg from '@assets/img/item.png';
import PrimaryButton from '@components/PrimaryButton';
import HeightScaleIcon from '@assets/height_scale.svg';
import WidthScaleIcon from '@assets/width_scale.svg';
import LayerIcon from '@assets/layer.svg';
import CountIcon from '@assets/count.svg';
import './product_card.scss';
import { Link } from 'react-router-dom';

const ProductCard = ({ category, id, title, individual, steril, width, height, count, layers }) => {
  return (
    <div className="base_product_card_wrapper">
      {steril && <div className="is_steril_wrapper">ՍՏԵՐԻԼ</div>}
      <div className="img_wrapper">
        <img src={itemImg} alt="" />
      </div>
      <div className="base_product_card_content">
        <h6>{title}</h6>
        {individual && <h6>(ինդիվիդուալ)</h6>}
      </div>
      <div className="base_product_card_property_wrapper">
        <div className="dimission_wrapper">
          <HeightScaleIcon />
          <p>{height}սմ</p>
          <WidthScaleIcon />
          <p>{width}սմ</p>
        </div>
        <div className="layer_wrapper">
          <LayerIcon />
          <p>{layers} շերտ</p>
        </div>
        <div className="coun_wrapper">
          <CountIcon />
          <p>{count} հատ</p>
        </div>
      </div>
      <Link to={`/products/${category}/${id}`}>
        <PrimaryButton text="ՏԵՍՆԵԼ Ավելին" />
      </Link>
    </div>
  );
};

export default ProductCard;
