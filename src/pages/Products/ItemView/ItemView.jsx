import { useParams } from 'react-router-dom';
import products from '@const/product.json';
import itemImg from '@assets/img/item.png';
import HeightScaleIcon from '@assets/height_scale.svg';
import WidthScaleIcon from '@assets/width_scale.svg';
import LayerIcon from '@assets/layer.svg';
import CountIcon from '@assets/count.svg';

import './item_view.scss';

const ItemView = () => {
  const params = useParams();

  const item = products[params.category].find((el) => el.id === params.id);

  console.log('item', item);

  return (
    <div className="selected_item_wrapper">
      <div className="selected_item_img_wrapper">
        <img src={itemImg} alt="" />
      </div>
      <div className="selected_item_content_wrapper">
        <h4>{item.title}</h4>
        <div className="base_product_card_property_wrapper">
          <div className="dimission_wrapper">
            <HeightScaleIcon />
            <p>{item.height}սմ</p>
            <WidthScaleIcon />
            <p>{item.width}սմ</p>
          </div>
          <div className="layer_wrapper">
            <LayerIcon />
            <p>{item.layers} շերտ</p>
          </div>
          <div className="coun_wrapper">
            <CountIcon />
            <p>{item.count} հատ</p>
          </div>
        </div>
        <p>
          {` Բինտեր, թանզիֆե մանրէազերծված բժշկական անձեռոցիկներ, մանրէազերծված և ոչ մանրէազերծված
          բժշկական վիրակապեր արտադրող;Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
          the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
          release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is
          simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived not only five
          centuries, but also the leap into electronic typesetting,`}
        </p>
      </div>
    </div>
  );
};

export default ItemView;
