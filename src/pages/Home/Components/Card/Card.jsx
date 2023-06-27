import PrimaryButton from '@components/PrimaryButton';
import ElipceIcon from '@assets/elipse.svg';
import './card.scss';

const Card = ({ title, desc, imgSrc, buttonTitle }) => {
  return (
    <div className="card_wrapper">
      <div className="card_info_wrapper">
        <div>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
        <PrimaryButton text={buttonTitle} />
      </div>
      <div className="card_img_wrapper">
        <img src={imgSrc} alt="" />
        <ElipceIcon className="elipce_icon" />
      </div>
    </div>
  );
};

export default Card;
