let initialState = {
  fish: "Salmon",
  swishes: 0,
};

const SWISH = 'SWISH'
const reducer = (state = initialState, action) => {
    if (action.type === SWISH) {
        return {
            swishes: state.swishes + 1
        };
    }
    return state;
};

export default reducer;
