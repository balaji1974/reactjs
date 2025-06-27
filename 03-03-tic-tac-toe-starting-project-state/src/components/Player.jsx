import {useState} from 'react';

function Player({name, symbol, isActive}) {
    const [playerName, setPlayerName] = useState(name);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        // must not use this in React as the change is scheduled and not immediate
        // setEditing(!isEditing); 

        // Instead use the functional form of setState
        // to ensure you are working with the latest state
        // This is important in case the state update is batched
        // or if the component re-renders before the state is updated
        // This way, you always get the most recent value of isEditing
        setIsEditing((editing) => !editing);
    }

    function handleNameChange(event) {
        setPlayerName(event.target.value);
    }

    return (
        <li className={isActive ? 'active' : undefined}>  
            <span className='player'>
              {!isEditing && <span className='player-name'>{playerName}</span>}
              {isEditing && <input type='text' defaultValue={playerName} onChange={handleNameChange} required/>}  
              <span className='player-symbol'>{symbol}</span>     
            </span>
            <button onClick={handleEditClick}>{isEditing? 'Save': 'Edit'}</button>
          </li>
    );
}

export default Player;