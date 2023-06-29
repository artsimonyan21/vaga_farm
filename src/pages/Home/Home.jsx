import Card from './Components/Card';
import ashxatakic from '@assets/img/ashxatakic.png';
import Product from './Components/Product';
import CoWorkers from './Components/CoWorkers';
import ContactUs from '../../components/ContactUs';

const Home = () => {
  return (
    <div>
      <Card
        title="ԱՌԱՋԻՆԸ ՀԱՅԱՍՏԱՆՈՒՄ"
        desc="Բինտեր, թանզիֆե մանրէազերծված բժշկական անձեռոցիկներ, մանրէազերծված և ոչ մանրէազերծված բժշկական վիրակապեր արտադրող;"
        buttonTitle="ԿԱՐԴԱԼ ԱՎԵԼԻՆ"
        imgSrc={ashxatakic}
      />
      <Product />
      <Card
        title="ԲԺՇԿԱԿԱՆ ՊԱՐԱԳԱՆԵՐԻ ՍՏԵՐԻԼԻԶԱՑՈՒՄ"
        desc="Մենք առաջարկում ենք ԲԺՇԿԱԿԱՆ ՊԱՐԱԳԱՆԵՐԻ ՍՏԵՐԻԼԻԶԱՑՈՒՄ"
        buttonTitle="ԿԱՐԴԱԼ ԱՎԵԼԻՆ"
        imgSrc={ashxatakic}
      />
      <CoWorkers />
      <ContactUs />
    </div>
  );
};

export default Home;
