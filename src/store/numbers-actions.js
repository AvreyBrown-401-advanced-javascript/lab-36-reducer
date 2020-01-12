
const actions = {};

actions.changeNum = payload => {
  return {
    type: 'CHANGE',
    payload: payload,
  };
}

actions.resetNum = payload => {
  return {
    type: 'RESET',
    payload: payload,
  };
}

export {actions};