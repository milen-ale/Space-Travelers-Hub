import React from 'react';
import Prototypes from 'prop-types';
 
const MissionComponent = ({name, discription, id}) => {

    <div className='mission-tabel'>
        <h2>{name}</h2>
    <p className='mission-discription'> {discription}
   </p>
<p className='mission-status'>
    Active member
</p>
<button type='button' id={id} className= 'mission-button'> Leave Mission</button>

    </div>
}

MissionComponent.prototypes = {
    name:Prototypes.string.isRequired,
    discription: Prototypes.string.isRequired,
    id:Prototypes.string.isRequired,
};

export default MissionComponent;