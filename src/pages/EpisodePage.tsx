import React, {ChangeEvent, FC, useState} from 'react';
import styled from "styled-components";
import {useFetchAllEpisodesQuery, useGetNumberPagesQuery} from "../store/API/EpisodeAPI";
import EpisodeCard from "../components/EpisodeCard";
import {IEpisode} from "../models/IEpisode";

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: black;
`

const InputStyled = styled.input`
  width: 80%;
  padding: 10px;

  font-size: 24px;
  
  background-color: black;
  color: aliceblue;
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

const EpisodePage: FC = () => {
    const [page, setPage] = useState<number>(1)
    let {data: episodes} = useFetchAllEpisodesQuery(page)
    const [name, setName] = useState<string>("")
    const {data: numPages} = useGetNumberPagesQuery(null)

    const nextHandler = () => {
        page < numPages && setPage(prevState => prevState + 1)
    }

    const prevHandler = () => {
        page > 1 && setPage(prevState => prevState - 1)
    }

    function changeHandler (e: ChangeEvent<HTMLInputElement>) {
        setName(e.target.value)
    }

    return (
        <ContainerStyled>
            <InputStyled
                placeholder={"Name of Episode"}
                value={name}
                onChange={changeHandler}
            />
            {
                episodes && episodes
                    .filter((episode: IEpisode) => {
                        if (name === "") {
                            return episode
                        } else if (episode.name.toLowerCase().includes(name.toLowerCase())){
                            return episode
                        }
                    })
                    .map((episode: IEpisode) => <EpisodeCard key={episode.id}
                                                             episode={episode}
                    />)
            }
            <PaginationContainer>
                <PaginationButton onClick={prevHandler}>{"<"}</PaginationButton>
                <PaginationButton onClick={nextHandler}>{">"}</PaginationButton>
            </PaginationContainer>
        </ContainerStyled>
    );
};

export default EpisodePage;