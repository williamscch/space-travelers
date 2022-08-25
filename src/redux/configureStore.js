import { configureStore } from '@reduxjs/toolkit';
import rocketsRedux from './rockets/rockets';
import missionsReducer from './missions/missionsReducer';

const store = configureStore({
  reducer: {
    rockets: rocketsRedux,
    missions: missionsReducer,
  },
});

export default store;
