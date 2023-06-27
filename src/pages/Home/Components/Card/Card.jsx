import PrimaryButton from '@components/PrimaryButton';
import './card.scss';

const Card = ({ title, desc, imgSrc, buttonTitle }) => {
  return (
    <div className="card_wrapper">
      <div className="card_info_wrapper">
        <h3>{title}</h3>
        <p>{desc}</p>
        <PrimaryButton text={buttonTitle} />
      </div>
      <div className="card_img_wrapper">
        <img src={imgSrc} alt="" />
      </div>
    </div>
  );
};

export default Card;
