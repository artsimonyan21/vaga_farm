import './card.scss';
import ElipseIcon from '@assets/elipse.svg';

const Card = ({ text, img, isReverce }) => {
  return (
    <div className="about_card_wrapper">
      {isReverce ? (
        <>
          <div className="about_first_img_content">
            <img src={img} alt="" />
            <ElipseIcon className="about_first_icon" />
          </div>
          <div className="about_text_wrapper">
            <p>{text}</p>
          </div>
        </>
      ) : (
        <>
          <div>
            <p>{text}</p>
          </div>
          <div className="about_second_img_content">
            <img src={img} alt="" />
            <ElipseIcon className="about_second_icon" />
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
