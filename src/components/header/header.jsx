import { Link } from 'react-router-dom';

import Logo from "../../assets/logo.svg";

const Header = ({ children }) => {
  return (
    <header className="header">
      <div className="header__wrapper container center">
        <Link className="header__link" to="/">
          <img src={Logo} width="44" height="44" alt="" />
          Котокафе
        </Link>
        { children }
      </div>
    </header>
  );
};

export { Header };
