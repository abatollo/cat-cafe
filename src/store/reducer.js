import { ActionType } from './action';

const initialState = {
  duration: 1,
  selectedTicketType: 1,
  overallCost: 300
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_DURATION:
      return {
        ...state,
        duration: action.payload
      }
    case ActionType.SET_TICKET_TYPE:
      return {
        ...state,
        selectedTicketType: action.payload
      }
    default:
      return state;
  }
};

export { reducer };
