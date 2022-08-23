import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Rockets.css';
import { getRockets, rocketsReducer } from '../../redux/rockets/rockets';

const Rockets = () => {
  const dispatch = useDispatch();
  const { rockets } = useSelector((state) => state.rockets);

  useEffect(() => {
    if (!rockets.length) {
      dispatch(getRockets());
    }
  }, []);

  return (
    <section>
      {rockets.map((rocket) => (
        <div key={rocket.rocketId} className="rocket-card">
          <img alt={rocket.rocketName} src={rocket.rocketImage[0]} />
          <div className="rocket-info">
            <h2>
              {rocket.rocketName}
              <span className={rocket.reserved ? 'badge' : 'no-badge'}>
                Reserved
              </span>
            </h2>
            <p>{rocket.rocketDescription}</p>
            <button
              className={
                rocket.reserved
                  ? 'cancel-reservation-button'
                  : 'reserve-rocket-button'
              }
              onClick={() => {
                dispatch(rocketsReducer(rocket.rocketId));
              }}
              type="button"
            >
              {rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Rockets;
