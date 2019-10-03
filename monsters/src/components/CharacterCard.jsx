import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
border: 3px solid gold;
background: black;
padding: 35px;
margin: 25px;
width: 200px;
color: gold;
border-radius: 30px;
`

const CharacterCard = (props) => {
    return (
        <CardContainer>
            <img alt='character' src={`https://robohash.org/${props.character.mass}?set=set2&size=140x140`} />
            <h2 className='Name'>{props.character.name}</h2>
            <div className='General'>
                <p>Birth Year: {props.character.birth_year}</p>
                <p>Hair Color: {props.character.hair_color}</p>
                <p>Eye Color: {props.character.eye_color}</p>
            </div>
        </CardContainer>
    )
}



export default CharacterCard;


