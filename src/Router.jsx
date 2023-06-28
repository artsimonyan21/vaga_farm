import { Route, Routes } from 'react-router-dom';
import Home from '@pages/Home';
import About from '@pages/About';
import Products from '@pages/Products';
import Services from '@pages/Services';
import Error from '@pages/Error';
import CoWorkers from './pages/CoWorkers';
import ContactUs from './pages/ContactUs';

const Router = () => {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<About />} path="/about" />
      <Route element={<Products />} path="/products/*" />
      <Route element={<Services />} path="/services" />
      <Route element={<CoWorkers />} path="/co-workers" />
      <Route element={<ContactUs />} path="/contact-us" />
      <Route element={<Error />} path="*" />
    </Routes>
  );
};

export default Router;
