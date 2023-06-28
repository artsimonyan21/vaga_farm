import { useParams } from 'react-router-dom';

const ItemView = () => {
  const params = useParams();
  console.log('params', params);
  return <div>item</div>;
};

export default ItemView;
