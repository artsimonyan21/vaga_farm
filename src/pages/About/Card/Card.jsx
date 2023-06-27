import './card.scss';

const Card = ({ text, img, isReverce }) => {
  return (
    <div className="about_card_wrapper">
      {isReverce ? (
        <>
          <div>
            <img src={img} alt="" />
          </div>
          <div>
            <p>{text}</p>
          </div>
        </>
      ) : (
        <>
          <div>
            <p>{text}</p>
          </div>
          <div>
            <img src={img} alt="" />
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
