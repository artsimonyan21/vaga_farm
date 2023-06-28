import './coWorkersCard.scss';

const CoWorkersCard = ({ img }) => {
  return (
    <div className="co_worker_card_wrapper">
      <div className="co_woekers_img_wrapper">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default CoWorkersCard;
