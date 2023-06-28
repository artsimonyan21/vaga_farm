import CoWorkersCard from '@components/CoWorkersCard';

import coWorkers from '@assets/img/coWorkers.png';

const CoWorkers = () => {
  return (
    <div>
      <h3>ԳՈՐԾԸՆԿԵՐՆԵՐ</h3>
      <CoWorkersCard img={coWorkers} />
      <CoWorkersCard img={coWorkers} />
      <CoWorkersCard img={coWorkers} />
      <CoWorkersCard img={coWorkers} />
      <CoWorkersCard img={coWorkers} />
      <CoWorkersCard img={coWorkers} />
    </div>
  );
};

export default CoWorkers;
