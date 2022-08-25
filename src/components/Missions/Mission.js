import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../../redux/missions/missionsReducer';
import './Mission.css';

const Mission = (props) => {
  const {
    reserved, missionId, missionName, description,
  } = props;

  const dispatch = useDispatch();

  return (
    <tr>
      <th>{missionName}</th>
      <th>{description}</th>

      {reserved
        ? (
          <>
            <td>
              <span><span className="active-member">ACTIVE MEMBER</span></span>
            </td>
            <td>
              <button type="button" className="leave" onClick={() => dispatch(leaveMission(missionId))}>Leave Mission</button>
            </td>
          </>
        )
        : (
          <>
            <td>
              <span><span className="not-member">NOT A MEMBER</span></span>
            </td>
            <td>
              <button type="button" className="action" onClick={() => dispatch(joinMission(missionId))}>Join Mission</button>
            </td>
          </>
        )}
    </tr>
  );
};

Mission.propTypes = {
  missionId: PropTypes.string.isRequired,
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool,
};

Mission.defaultProps = {
  reserved: false,
};

export default Mission;
