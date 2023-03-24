import { Link } from 'react-router-dom';

import { Header } from '../header/header';
import { Slider } from '../slider/slider';
import Shop from '../shop/shop';
import { Footer } from '../footer/footer';

import slides from '../../mocks/slides.json';
import ticketTypes from '../../mocks/ticket-types.json';

const OrderPage = () => {
  return (
    <>
      <Header>
        <Link className="header__home" to="/">
          Главная
        </Link>
      </Header>
      <Slider slides={ slides } />
      <Shop ticketTypes={ticketTypes} />
      <Footer />
    </>
  );
};

export { OrderPage };
