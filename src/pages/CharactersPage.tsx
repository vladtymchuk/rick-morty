import React, {FC, useState} from 'react';
import {useFetchAllCharactersQuery, useGetNumberPagesQuery} from "../store/API/CharacterAPI";
import {ICharacter} from "../models/ICharacter";
import CharacterCard from "../components/CharacterCard";
import styled from "styled-components";

const FlexContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  background-color: #110e0e;
`

const PaginationContainer = styled.div`
  width: 100%;
  height: 100px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  background-color: #110e0e;
`

const PaginationButton = styled.button`
  border: none;
  background-color: black;
  color: #FFF;
  font-size: 18px;
  margin: 15px;
  padding: 15px;
  transition: .7s;

  &:hover {
    background-color: #262626;
    transition: .7s;
  }
`

const CharactersPage: FC = () => {
    const [page, setPage] = useState<number>(1)
    const {data: characters, error, isLoading} = useFetchAllCharactersQuery(page)
    const {data: pageNum} = useGetNumberPagesQuery(null)

    const nextHandler = () => {
        setPage(prevState => prevState + 1)
    }

    const prevHandler = () => {
        page > 1 && setPage(prevState => prevState - 1)
    }

    const openInfo = (id: number) => {
        return characters?.filter(character => character.id === id)
    }

    return (
        <>
            <FlexContainer>
                {
                    characters && characters.map((character: ICharacter) => {
                        return <CharacterCard key={character.id}
                                              id={character.id}
                                              name={character.name}
                                              status={character.status}
                                              species={character.species}
                                              imgUrl={character.image}
                                              openInfo={openInfo}
                        />
                    })
                }

                <PaginationContainer>
                    <PaginationButton onClick={prevHandler}>{"<"}</PaginationButton>
                    <PaginationButton onClick={nextHandler}>{">"}</PaginationButton>
                </PaginationContainer>
            </FlexContainer>
        </>
    );
};

export default CharactersPage;
