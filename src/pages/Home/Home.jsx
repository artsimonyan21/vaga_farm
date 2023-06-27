import Card from './Components/Card';
import ashxatakic from '@assets/img/ashxatakic.png';

const Home = () => {
  return (
    <div>
      <Card
        title="ԱՌԱՋԻՆԸ ՀԱՅԱՍՏԱՆՈՒՄ"
        desc="Բինտեր, թանզիֆե մանրէազերծված բժշկական անձեռոցիկներ, մանրէազերծված և ոչ մանրէազերծված բժշկական վիրակապեր արտադրող;"
        buttonTitle="ԿԱՐԴԱԼ ԱՎԵԼԻՆ"
        imgSrc={ashxatakic}
      />
      <img src="@assets/img/ashxatakic.png" alt="" />
    </div>
  );
};

export default Home;
