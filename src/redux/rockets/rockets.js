/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const rocketsPath = 'https://api.spacexdata.com/v3/rockets';

export const getRockets = createAsyncThunk('rockets/getRockets', async () => {
  const response = await fetch(rocketsPath);
  const res = await response.json();
  return res;
});

export const rocketsSlice = createSlice({
  name: 'rockets',
  initialState: {
    rockets: [],
    status: null,
  },
  reducers: {
    rocketsReducer: (state, action) => {
      const newState = state.rockets.map((rocket) => {
        const { reserved } = rocket;
        if (rocket.rocketId !== action.payload) {
          return rocket;
        }
        return { ...rocket, reserved: !reserved };
      });
      return { ...state, rockets: newState };
    },
  },
  extraReducers: {
    [getRockets.pending]: (state) => {
      state.status = 'loading';
    },
    [getRockets.fulfilled]: (state, action) => {
      const rockets = action.payload.map((rocket) => {
        const {
          id: rocketId,
          rocket_name: rocketName,
          description: rocketDescription,
          flickr_images: rocketImage,
        } = rocket;
        return {
          rocketId,
          rocketName,
          rocketDescription,
          rocketImage,
          reserved: false,
        };
      });
      state.rockets = rockets;
      state.status = 'success';
    },
    [getRockets.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

export const { rocketsReducer } = rocketsSlice.actions;

export default rocketsSlice.reducer;
