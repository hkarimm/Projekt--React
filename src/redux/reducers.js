const initialState = {
  projects: [],
};

// En reducer-funktion som hanterar olika actions för att uppdatera tillståndet i Redux Store
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PROJECTS':
      return { ...state, projects: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
