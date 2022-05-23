import React, {FC, useState} from 'react';
import {useFetchAllCharactersQuery} from "../store/API/CharacterAPI";
import {ICharacter} from "../models/ICharacter";
import CharacterCard from "../components/CharacterCard";
import styled from "styled-components";

const FlexContainer = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  background-color: #110e0e;
`

const CharactersPage: FC = () => {
    const {data: characters, error, isLoading} = useFetchAllCharactersQuery(null)


    return (
        <FlexContainer>
            {
                characters && characters.results.map((character: ICharacter) => {
                    return <CharacterCard key={character.id}
                                          id={character.id}
                                          name={character.name}
                                          status={character.status}
                                          species={character.species}
                                          imgUrl={character.image}
                    />
                })
            }
        </FlexContainer>
    );
};

export default CharactersPage;
