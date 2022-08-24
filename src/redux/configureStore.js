import { configureStore } from '@reduxjs/toolkit';
import rocketsRedux from './rockets/rockets';

const store = configureStore({
  reducer: {
    rockets: rocketsRedux,
  },
});

export default store;
