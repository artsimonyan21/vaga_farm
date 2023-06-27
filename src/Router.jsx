import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '@pages/Home';
import About from '@pages/About';
import Products from '@pages/Products';
import Services from '@pages/Services';
import Error from '@pages/Error';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<About />} path="/about" />
        <Route element={<Products />} path="/products" />
        <Route element={<Services />} path="/services" />
        <Route element={<Error />} path="*" />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
