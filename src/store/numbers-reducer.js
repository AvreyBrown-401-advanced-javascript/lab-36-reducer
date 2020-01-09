let initialState = { currentNumber: 69 };

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'CHANGE':
      return { currentNumber: payload || Math.random() };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};
