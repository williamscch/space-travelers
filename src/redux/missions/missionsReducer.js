const GET_MISSIONS = 'space-travelers/missions/GET_MISSIONS';
const JOIN_MISSION = 'space-travelers/missions/JOIN_MISSION';
const LEAVE_MISSION = 'space-travelers/missions/LEAVE_MISSION';

export const initialState = [];

export const getMissions = (payload) => ({
  type: GET_MISSIONS,
  payload,
});

export const joinMission = (id) => ({
  type: JOIN_MISSION,
  payload: id,
});

export const leaveMission = (id) => ({
  type: LEAVE_MISSION,
  payload: id,
});

export const joinMissionAction = (missions, id) => {
  const newState = missions.map((mission) => {
    if (mission.missionId !== id) {
      return mission;
    }
    return { ...mission, reserved: true };
  });
  return newState;
};

export const leaveMissionAction = (missions, id) => {
  const newState = missions.map((mission) => {
    if (mission.missionId !== id) {
      return mission;
    }
    return { ...mission, reserved: false };
  });
  return newState;
};

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LEAVE_MISSION:
      return leaveMissionAction(state, action.payload);

    case GET_MISSIONS:
      return [...action.payload];

    case JOIN_MISSION:
      return joinMissionAction(state, action.payload);

    default:
      return state;
  }
};

export default missionsReducer;
