import { Link } from 'react-router-dom';

import { Header } from '../header/header';
import { Hero } from '../hero/hero';
import { Features } from '../features/features';
import { Footer } from '../footer/footer';

const MainPage = () => {
  return (
    <>
      <Header>
        <Link className="header__button button" to="/order">
          Купить билет
        </Link>
      </Header>
      <Hero />
      <Features />
      <Footer />
    </>
  );
};

export { MainPage };
