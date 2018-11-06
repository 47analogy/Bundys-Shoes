const initialState = {
  shoes: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "DISPLAY_SHOES":
      return { ...state, shoes: action.payload };

    default:
      return state;
  }
};
