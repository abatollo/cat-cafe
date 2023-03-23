import React from "react";

const Shop = ({ ticketTypes }) => {
  return (
    <section className="shop">
      <div className="container center">
        <h2 className="shop__heading">Купить билет</h2>
        <div className="shop__wrapper">
          <h3 className="shop__subheading">Продолжительность (часов)</h3>
          <form>
          <ul className="shop__list list-reset">
            {[...Array(5)].map((_element, index) =>
              <li className="shop__item" key={index}>
                <input className="shop__input visually-hidden" type="radio" name="shop" id={`radio-${index}`} />
                <label className="shop__label" htmlFor={`radio-${index}`}>{index + 1}</label>
              </li>
            )}
          </ul>
          <h3 className="shop__subheading">Тип билета</h3>
          <ul>
            {ticketTypes.map((ticketType, index) =>
              <li className="shop__item" key={index}>
                <input className="visually-hidden" type="radio" name="shop" id={`radio-${index}`} />
                <label className="shop__label" htmlFor={`radio-${index}`}>
                  <details className="shop__details">
                    <summary className="shop__summary">{ ticketType.name }</summary>
                  </details>
                </label>
              </li>
            )}
          </ul>
          </form>
          <h4 className="shop__smallheading">Цена</h4>
          <div className="shop__price">300 руб.</div>
          <button className="shop__button button">Купить билет</button>
        </div>
      </div>
    </section>
  );
};

export { Shop };
