import { Link } from 'react-router-dom';
import cn from 'classnames';
import cats from '../../mocks/cats.json';

const Features = () => {
  return (
    <section className="features">
      <div className="container center">
        <h2 className="features__heading">Наши звезды</h2>
        <ul className="features__list list-reset">
          {cats.map((cat) => (
            <li className={cn(`features__item`, {'features__item--newcomer': cat.newcomer}, {'features__item--gentle': cat.gentle})} key={ cat.id }>
              <picture className="features__item-picture">
                <source srcSet={`img/${ cat.image }.avif 1x, img/${ cat.image }@2x.avif 2x, img/${ cat.image }@3x.avif 3x, img/${ cat.image }@4x.avif 4x`} type="image/avif" />
                <source srcSet={`img/${ cat.image }.webp 1x, img/${ cat.image }@2x.webp 2x, img/${ cat.image }@3x.webp 3x, img/${ cat.image }@4x.webp 4x`} type="image/webp" />
                <img className="features__item-image" src={ `img/${ cat.image }.jpg` } srcSet={`img/${ cat.image }.jpg 1x, img/${ cat.image }@2x.jpg 2x, img/${ cat.image }@3x.jpg 3x, img/${ cat.image }@4x.jpg 4x`} width="313" height="313" alt={ cat.imageDescription } />
              </picture>
              <h3 className="features__item-heading">{ cat.male ? `Кот` : `Кошка` } { cat.name }</h3>
              <p className="features__item-description">{ cat.description }</p>
            </li>
          ))}
        </ul>
        <Link className="features__button button center" to="/order">
          Купить билет
        </Link>
      </div>
    </section>
  );
};

export { Features };
