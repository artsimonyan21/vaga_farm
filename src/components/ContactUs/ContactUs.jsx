import PrimaryButton from '@components/PrimaryButton';
import './contact_us.scss';

const ContactUs = () => {
  return (
    <div className="contact_us_wrapper">
      <div className="location_wrapper">
        <p>
          It is a long established fact that a reader will be distracted by the readable content of
          a page when looking at its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters, as opposed to using Content here, content ,
          making it look like readable English. Many desktop publishing packages and web page
          editors now use Lorem Ipsum as their default model text, and a search for lorem will
          uncover many web sites still in their infancy. Various versions have evolved over the
          years, sometimes by accident, sometimes on purpose injected humour and the lik
        </p>
        <div>
          <iframe
            className="contact_map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.3732737371047!2d44.50011437675395!3d40.178505671478995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd7c77517cd7%3A0x7da95aa2613796c5!2sVaga%20Pharm!5e0!3m2!1sru!2sam!4v1688026314359!5m2!1sru!2sam"
            width="543"
            height="266"
            style={{ border: '0' }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <div className="contact_us_now">
        <h3>ԿԱՊՆՎԵՔ ՄԵԶ ՀԵՏ ՀԻՄԱ</h3>
        <input type="email" placeholder="Էլ․հասցե" />
        <input type="email" placeholder="Հեռախոսահամար" />
        <textarea name="" id="" cols="30" rows="10" placeholder="Հաղորդագրություն"></textarea>
        <PrimaryButton text="ՈՒՂԱՐԿԵԼ" className="contact_us_button" />
      </div>
    </div>
  );
};

export default ContactUs;
