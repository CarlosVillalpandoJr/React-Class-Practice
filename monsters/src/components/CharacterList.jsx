import React from 'react';
import CharacterCard from './CharacterCard';



const CharacterList = (props) => {
    return (
        <div>
            {props.characters.map(character => (
                <CharacterCard character={character}/>
            ))}
        </div>
    )
}

export default CharacterList;