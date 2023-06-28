import PrimaryButton from '@components/PrimaryButton';
import ElipceIcon from '@assets/elipse.svg';
import './card.scss';

const Card = ({ title, desc, imgSrc, buttonTitle, isReverce }) => {
  return (
    <div className="services_card_content">
      {isReverce ? (
        <>
          <div className="first_card_wrapper">
            <div className="first_card_info_wrapper">
              <div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
              <PrimaryButton text={buttonTitle} />
            </div>
            <div className="first_card_img_wrapper">
              <div>
                <img src={imgSrc} alt="" />
                <ElipceIcon className="elipce_icon" />
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="second_card_wrapper">
            <div>
              <div className="card_img_wrapper">
                <img src={imgSrc} alt="" />
                <ElipceIcon className="elipce_icon" />
              </div>
            </div>
            <div className="card_info_wrapper">
              <div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
              <PrimaryButton text={buttonTitle} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
