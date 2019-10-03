import React from 'react';
import CharacterCard from './CharacterCard';
import styled from 'styled-components';

const List = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
`


const CharacterList = (props) => {
    return (
        <List>
            {props.characters.map(character => (
                <CharacterCard character={character}/>
            ))}
        </List>
    )
}

export default CharacterList;