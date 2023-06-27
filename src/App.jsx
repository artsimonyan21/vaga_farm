import { BrowserRouter } from 'react-router-dom';
import MainLayout from '@layouts/MainLayout';
import Router from './Router';
import './global.scss';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Router />
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
