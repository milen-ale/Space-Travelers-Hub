const FETCH_ROCKET = 'FETCH_ROCKET';
const RESERVE_ROCKET = 'RESERVE_ROCKET';
const CANCEL_ROCKET = 'CANCEL_ROCKET';
const rocketApi = 'https://api.spacexdata.com/v3/rockets';

const fetchRockets = async (dispatch) => {
  try {
    const response = await fetch(rocketApi).then((res) => res.json());
    dispatch({ type: FETCH_ROCKET, payload: response });
  } catch (error) {
    console.log(error);
  }
};

const bookRocket = (id) => ({
  type: RESERVE_ROCKET,
  id,
});

const cancelBooking = (id) => ({
  type: CANCEL_ROCKET,
  id,
});

const rocketReducer = (state = [], action) => {
  let newState;
  switch (action.type) {
    case FETCH_ROCKET:
      return action.payload;
    case RESERVE_ROCKET:
      newState = state.map((rocket) => {
        if (rocket.id === action.id) {
          return { ...rocket, reserved: true };
        }
        return rocket;
      });
      return newState;
    case CANCEL_ROCKET:
      newState = state.map((rocket) => {
        if (rocket.id === action.id) {
          return { ...rocket, reserved: false };
        }
        return rocket;
      });
      return newState;
    default:
      return state;
  }
};

export {
  fetchRockets, rocketReducer, bookRocket, cancelBooking,
};
