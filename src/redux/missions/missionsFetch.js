import { getMissions } from './missionsReducer';

const URL = 'https://api.spacexdata.com/v3/missions';

const missionsFetch = () => async (dispatch) => {
  const res = await fetch(URL);
  const missionsArray = await res.json();

  const missions = missionsArray.map((mission) => {
    const {
      mission_id: missionId,
      mission_name: missionName,
      description,
    } = mission;
    return {
      missionId,
      missionName,
      description,
      reserved: false,
    };
  });

  dispatch(getMissions(missions));
};

export default missionsFetch;
