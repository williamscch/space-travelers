import ReservedRockets from './ReservedRockets';
import './MyProfile.css';
import { useSelector } from 'react-redux';

function MyProfile() {
  const missions = useSelector((state) => state.missions);
  return (
    <div className="my-profile">
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
      <section> <ReservedRockets/></section>
     
    </div>
  );
}

export default MyProfile;
