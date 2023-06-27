import './footer_card.scss';
const FooterCard = ({ title, children }) => {
  return (
    <div className="footer_card_wrapper">
      <h6 className="footer_card_title">{title}</h6>
      {children}
    </div>
  );
};

export default FooterCard;
