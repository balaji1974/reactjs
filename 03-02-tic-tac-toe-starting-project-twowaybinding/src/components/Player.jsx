import {useState} from 'react';

function Player({name, symbol}) {
    const [playerName, setPlayerName] = useState(name);
    const [isEditing, setIsEditing] = useState(false);
    function handleEditClick() {
        setIsEditing(isEditing => !isEditing);
    }
    function handleNameChange(event) {
        setPlayerName(event.target.value);
    }
    return (
        <li>
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