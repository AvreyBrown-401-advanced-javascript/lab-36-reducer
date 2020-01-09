
const appActions = {};

appActions.change = payload => {
  return {
    type: 'CHANGE',
    payload: payload,
  };
}

appActions.reset = payload => {
  return {
    type: 'RESET',
    payload: payload,
  };
}

export {appActions};