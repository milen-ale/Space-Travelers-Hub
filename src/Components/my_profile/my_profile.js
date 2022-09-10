import React from 'react';
import { useSelector } from 'react-redux';
import './my_profile.css';

function Myprofile() {
  const rockets = useSelector((state) => state.rocket);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);

  const displayReservedRockets = () => {
    if (reservedRockets.length) {
      return (
        <ul className="reservedCont">
          { rockets.map((rocket) => (rocket.reserved ? (
            <li className="reservedItem" key={rocket.id}>{rocket.rocket_name}</li>
          ) : null))}
        </ul>
      );
    }
    return (<p>No Rockets Reserved</p>);
  };

  return (
    <div className="myProfile">
      <section className="my-comp">
        <h2>My Rockets</h2>
        {displayReservedRockets()}
      </section>
    </div>
  );
}

export default Myprofile;
