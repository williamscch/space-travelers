import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import missionsFetch from '../../redux/missions/missionsFetch';
import Mission from './Mission';
import './Missions.css';

const Missions = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!missions.length) {
      dispatch(missionsFetch());
    }
  }, []);

  return (
    <div className="container">
      <table className="table">
        <tbody>
          <tr>
            <th className="head">Missions</th>
            <th className="head">Description</th>
            <th className="head">Status</th>
            <th className="head">Action</th>
          </tr>
          {missions.map(
            (mission) => (
              <Mission
                key={mission.missionId}
                missionName={mission.missionName}
                description={mission.description}
                missionId={mission.missionId}
                reserved={mission.reserved}
              />
            ),
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
