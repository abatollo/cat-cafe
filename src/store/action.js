const ActionType = {
  SET_DURATION: `SET_DURATION`,
  SET_TICKET_TYPE: `SET_TICKET_TYPE`
};

const ActionCreator = {
  setDuration: (payload) => ({
    type: ActionType.SET_DURATION,
    payload
  }),
  setTicketType: (payload) => ({
    type: ActionType.SET_TICKET_TYPE,
    payload
  })
};

export { ActionType, ActionCreator };
