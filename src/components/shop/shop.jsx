import { connect } from 'react-redux';

import TicketType from "../ticket-type/ticket-type";

import { ActionCreator } from '../../store/action';

import { formatPrice } from '../../utils/format-price';

const Shop = ({ 
  ticketTypes, 
  overallCost,
  duration,
  setDuration
}) => {
  const handleShopTypeRadioChange = (index) => {
    setDuration(index + 1);
  };

  return (
    <section className="shop">
      <div className="container center">
        <h2 className="shop__heading">
          Купить билет
        </h2>
        <div className="shop__wrapper">
          <form>
            <h3 className="shop__subheading">
              Продолжительность (часов)
            </h3>
            <ul className="shop__list list-reset">
              {
                [...Array(5)].map(
                  (_element, index) =>
                    <li className="shop__item" key={ index }>
                      <input 
                        className="shop__input visually-hidden" 
                        type="radio" 
                        name="shop" 
                        id={ `radio-${ index }` } 
                        onChange={ () => { handleShopTypeRadioChange(index) } }
                        checked = { index + 1 === duration }
                      />
                      <label 
                        className="shop__label" 
                        htmlFor={ `radio-${ index }` }
                      >
                        { index + 1 }
                      </label>
                    </li>
              )}
            </ul>
            <h3 className="shop__subheading">
              Тип билета
            </h3>
            <ul className="shop__type-list list-reset">
              {
                ticketTypes.map(
                  (ticketType, ticketTypeIndex) => 
                    <TicketType 
                      ticketType={ ticketType } 
                      key={ ticketTypeIndex } 
                    />
                )
              }
            </ul>
          </form>
          <h4 className="shop__smallheading">
            Цена
          </h4>
          <div className="shop__price">
            { 
              formatPrice( overallCost ) 
            }
          </div>
          <button className="shop__button button">
            Купить билет
          </button>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    overallCost: state.overallCost,
    duration: state.duration
  };
};

const mapDispatchToProps = (dispatch) => ({
  setDuration(item) {
    dispatch(ActionCreator.setDuration(item));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
