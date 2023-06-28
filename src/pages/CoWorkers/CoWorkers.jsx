import './coWorkers.scss';

import CoWorkersCard from '@components/CoWorkersCard/CoWorkersCard';
import coWorkers from '@assets/img/coWorkers.png';

const CoWorkers = () => {
  return (
    <div className="co_workers_wrapper">
      <div className="co_workers_content_wrapper">
        <CoWorkersCard img={coWorkers} />
        <CoWorkersCard img={coWorkers} />
        <CoWorkersCard img={coWorkers} />
        <CoWorkersCard img={coWorkers} />
        <CoWorkersCard img={coWorkers} />
        <CoWorkersCard img={coWorkers} />
      </div>
    </div>
  );
};

export default CoWorkers;
