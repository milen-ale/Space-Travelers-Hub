import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './my_profile.css';
import { PopulateMissionProfile } from '../../redux/missions/missions';

function Myprofile() {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missionReducer);
  const rockets = useSelector((state) => state.rocket);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);
  const joinedMissions = missions.filter((mission) => mission.reserved === true);

  useEffect(() => {
    dispatch(PopulateMissionProfile());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
  const displayJoinedMissions = () => {
    if (joinedMissions.length) {
      return (
        <ul className="reservedCont">
          { missions.map((mission) => (mission.reserved === true ? (
            <li className="reservedItem" key={mission.mission_id}>
              {' '}
              {mission.mission_name}
              {' '}
            </li>
          ) : null))}
        </ul>
      );
    }
    return (<p>No Missions Joined</p>);
  };

  return (
    <div className="myProfile">
      <section className="my-comp">
        <h2>My Mission</h2>
        {displayJoinedMissions()}
      </section>
      <section className="my-comp">
        <h2>My Rockets</h2>
        {displayReservedRockets()}
      </section>
    </div>
  );
}

export default Myprofile;
