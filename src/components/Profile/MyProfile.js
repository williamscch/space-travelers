import ReservedMissions from './ReservedMissions';
import ReservedRockets from './ReservedRockets';

function MyProfile() {
  const profileStyle = {
    padding: '2rem 3rem',
    display: 'flex',
    gap: '2rem',
  };
  return (
    <div style={profileStyle}>
      <ReservedMissions />
      <ReservedRockets />
    </div>
  );
}

export default MyProfile;
