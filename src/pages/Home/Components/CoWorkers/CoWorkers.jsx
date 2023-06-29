import CoWorkersCard from '@components/CoWorkersCard';

import coWorkers from '@assets/img/coWorkers.png';

import PrimaryButton from '@components/PrimaryButton';

import './coWorkers.scss';

const CoWorkers = () => {
  return (
    <div className="home_co_workers_section">
      <h3>ԳՈՐԾԸՆԿԵՐՆԵՐ</h3>
      <div className="home_co_workers_content_wrapper">
        <CoWorkersCard img={coWorkers} />
        <CoWorkersCard img={coWorkers} />
        <CoWorkersCard img={coWorkers} />
        <CoWorkersCard img={coWorkers} />
        <CoWorkersCard img={coWorkers} />
        <CoWorkersCard img={coWorkers} />
      </div>
      <PrimaryButton text="ՏԵՍՆԵԼ ԱՄԲՈՂՋԸ" className="home_page_workers_button" />
    </div>
  );
};

export default CoWorkers;
