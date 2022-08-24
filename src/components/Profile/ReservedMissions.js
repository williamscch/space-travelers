import React from 'react';
import { useSelector } from 'react-redux';
import './ReservedMissions.css';

const ReservedMissions = () => {
  const missions = useSelector((state) => state.missions);
  return (
    <section className="missions">
      <h2>My Missions</h2>
      <table className="missions-table">
        <tbody>
          {missions
          && missions
            .filter((mission) => mission.reserved === true)
            .map((reserve) => (
              <tr className="row" key={reserve.missionId}>
                <td>{reserve.missionName}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
};

export default ReservedMissions;
