import { useSelector } from 'react-redux';
import './ReservedRockets.css';

export default function ReservedRockets() {
  const { rockets } = useSelector((state) => state.rockets);
  const bookedRockets = rockets.filter((rocket) => rocket.reserved);
  if (bookedRockets.length !== 0) {
    return (
      <section className="reserved-container">
        <h2> My Rockets</h2>
        <ul className="ul-container">
          {bookedRockets.map((rocket) => (
            <li className="rocket-li" key={rocket.rocketId}>{rocket.rocketName}</li>
          ))}
        </ul>
      </section>
    );
  }
  return (
    <div>
      <h2> My Rockets</h2>
      <p>Your booked Rockets will appear here</p>
    </div>
  );
}
