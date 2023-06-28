import { NavLink } from 'react-router-dom';
import PhoneIcon from '@assets/phone.svg';
import MessageIcon from '@assets/message.svg';
import LocationIcon from '@assets/location.svg';
import InstagramIcon from '@assets/instagram.svg';
import TvitterIcon from '@assets/tvitter.svg';
import FaceboockIcon from '@assets/faceboock.svg';
import './footer.scss';
import Logo from '@assets/logo.svg';
import FooterCard from './FooterCard';

const Footer = () => {
  return (
    <div className="footer_wrapper">
      <div className="footer_content">
        <div>
          <Logo className="logo" />
        </div>
        <FooterCard title="ԱՐՏԱԴՐԱՆՔ">
          <ul className="product_wrapper">
            <NavLink className="aaa">
              <li>ՀԵՂՈՒԿՆԵՐ</li>
            </NavLink>
            <NavLink>
              <li> ՔՍՈՒՔՆԵՐ</li>
            </NavLink>
            <NavLink>
              <li> ՅՈՒՂԵՐ</li>
            </NavLink>
            <NavLink>
              <li> ՈԳԵԹՈՒՐՄԵՐ</li>
            </NavLink>
            <NavLink>
              <li>ՓՈՇԻՆԵՐ</li>
            </NavLink>
            <NavLink>
              <li> ՄԱՇԿԻ ԽՆԱՄՔԻ ՄԻՋՈՑՆԵՐ</li>
            </NavLink>
          </ul>
        </FooterCard>
        <FooterCard title="ԿԱՊ ՄԵԶ ՀԵՏ">
          <div className="footer_contact_us_wrapper">
            <a href="tel:+374 98 960197">
              <PhoneIcon /> <p>Զանգահարեք մեզ: +374 90 000 000</p>
            </a>
            <a href="mailto:vaga@gmail.com">
              <MessageIcon />
              <p>Էլ հասցե: @mail.ru</p>
            </a>
            <a>
              <LocationIcon />
              <p>Երևան</p>
            </a>
          </div>
        </FooterCard>
        <FooterCard title="ՓՆՏՐԵՔ ՄԵԶ։">
          <div className="social_link_wrapper">
            <InstagramIcon />
            <TvitterIcon />
            <FaceboockIcon />
          </div>
        </FooterCard>
      </div>
      <p className="footer_copy_right">By ArmCoding - © 2022 Բոլոր իրավունքները պաշտպանված են</p>
    </div>
  );
};

export default Footer;
