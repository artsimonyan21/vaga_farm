import Footer from './Footer';
import Header from './Header';
import './style.scss';

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="content_wrapper">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
