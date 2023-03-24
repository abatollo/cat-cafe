import { useState } from "react";

import { connect } from 'react-redux';

import { ActionCreator } from "../../store/action";

const TicketType = ( { 
  ticketType, 
  selectedTicketType,
  setTicketType
} ) => {
  const [areBenefitsOpened, setAreBenefitsOpened] = useState( false );

  const handleShopTypeRadioChange = ( ticketTypeId ) => {
    setTicketType( ticketTypeId );
  };

  const handleShopTypeCheckboxChange = () => {
    setAreBenefitsOpened( ( prevState ) => !prevState );
  };

  return (
    <li className="shop__type-item">
      <div className="shop__type-wrapper">
        <input 
          className="shop__type-input visually-hidden" 
          type="radio" 
          name="shop-type" 
          id={ `radio-type-${ ticketType.id }` } 
          onChange={ () => { handleShopTypeRadioChange( ticketType.id ) } }
          checked={ selectedTicketType === ticketType.id }
        />
        <label 
          className="shop__type-label" 
          htmlFor={ `radio-type-${ ticketType.id }` }
        >
          { ticketType.name }
        </label>
        <input 
          className="shop__type-checkbox visually-hidden" 
          type="checkbox" 
          name={ `type-checkbox-${ ticketType.id }` } 
          id={ `type-checkbox-${ ticketType.id }` } 
          value={ `type-checkbox-${ ticketType.id }` } 
          onChange={ handleShopTypeCheckboxChange } 
        />
        <label 
          className="shop__type-checkbox-label" 
          htmlFor={ `type-checkbox-${ ticketType.id }` }
        >
          Выгоды
        </label>
      </div>
      { 
        areBenefitsOpened && <ul className="shop__type-sublist">
          { 
            ticketType.benefits.map(
              ( ticketTypeBenefit, ticketTypeBenefitIndex ) => 
                <li 
                  className="shop__type-sublist-item" 
                  key={ ticketTypeBenefitIndex }
                >
                  { ticketTypeBenefit }
                </li>
            )
          }
        </ul>
      }
    </li>
  );
};

const mapStateToProps = ( state ) => {
  return {
    selectedTicketType: state.selectedTicketType
  };
};

const mapDispatchToProps = ( dispatch ) => ({
  setTicketType( selectedTicketType ) {
    dispatch( ActionCreator.setTicketType( selectedTicketType ) );
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TicketType);
