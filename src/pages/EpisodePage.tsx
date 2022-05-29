import React, {FC, useEffect, useState} from 'react';
import styled from "styled-components";
import {useFetchAllEpisodesQuery} from "../store/API/EpisodeAPI";

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const InputStyled = styled.input`
  width: 80%;
  padding: 10px;

  font-size: 24px;
`

const EpisodePage: FC = () => {
    const [page, setPage] = useState<number>(1)
    const {data: episodes} = useFetchAllEpisodesQuery(page)

    function PostById({ id }: { id: number }) {
        // Will select the post with the given id, and will only rerender if the given posts data changes
        const { data: sEpisodes } = useFetchAllEpisodesQuery(undefined, {
            selectFromResult: ({ data }) => ({
                sEpisodes.results: data?.find((name) => data.name.includes === name),
            }),
        })

    return (
        <ContainerStyled>
            <InputStyled/>

        </ContainerStyled>
    );
};

export default EpisodePage;