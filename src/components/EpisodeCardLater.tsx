import React, {FC} from 'react';
import {useFetchEpisodeQuery} from "../store/API/EpisodeAPI";
import styled from "styled-components";

interface EpisodeProps {
    url: string
}

const CardBox = styled.div`
  width: 80%;
  height: 200px;
  border: 1px solid #ffffff;


  color: aliceblue;

  display: flex;
  flex-direction: column;
  justify-content: center;

  font-size: 36px;
`

const EpisodeCardLater: FC<EpisodeProps> = ({url}) => {
    const {data: episode} = useFetchEpisodeQuery(url)

    if(episode) {
        return(
            <CardBox>
                <p>{episode.id}: {episode.name}</p>
            </CardBox>
        )
    }

    return (
        <>
        </>
    );
};

export default EpisodeCardLater;