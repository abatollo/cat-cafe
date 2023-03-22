import { Link } from 'react-router-dom';

import { Slider } from '../slider/slider';
// import { Shop } from '../shop/shop';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';

const OrderPage = () => {
  return (
    <>
      <Header>
        <Link className="header__home" to="/">
          Главная
        </Link>
      </Header>
      <Slider />
      {/* <Shop /> */}
      <Footer />
    </>
  );
};

export { OrderPage };
