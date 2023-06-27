import { NavLink } from 'react-router-dom';
import PhoneIcon from '@assets/phone.svg';
import MessageIcon from '@assets/message.svg';
import LocationIcon from '@assets/location.svg';
import InstagramIcon from '@assets/instagram.svg';
import TvitterIcon from '@assets/tvitter.svg';
import FaceboockIcon from '@assets/faceboock.svg';
import './footer.scss';
import Logo from '@assets/logo.svg';

const Footer = () => {
  return (
    <div className="footer_wrapper">
      <div className="footer_content">
        <div>
          <Logo className="logo" />
        </div>
        <div className="footer_products">
          <h6 className="footer_titles">ԱՐՏԱԴՐԱՆՔ</h6>
          <ul>
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
        </div>
        <div className="footer_contact">
          <h6 className="footer_titles">ԿԱՊ ՄԵԶ ՀԵՏ</h6>
          <p>
            <PhoneIcon /> Զանգահարեք մեզ: +374 90 000 000
          </p>
          <p>
            <MessageIcon /> Էլ հասցե: @mail.ru
          </p>
          <p>
            <LocationIcon /> Երևան
          </p>
        </div>
        <div className="footer_find_us">
          <h6 className="footer_titles">ՓՆՏՐԵՔ ՄԵԶ։</h6>
          <div>
            <InstagramIcon />
            <TvitterIcon />
            <FaceboockIcon />
          </div>
        </div>
      </div>
      <p className="footer_copy_right">By ArmCoding - © 2022 Բոլոր իրավունքները պաշտպանված են</p>
    </div>
  );
};

export default Footer;
