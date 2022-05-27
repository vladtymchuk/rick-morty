import React, {FC} from 'react';
import styled from "styled-components";
import {useFetchEpisodeQuery} from "../store/API/EpisodeAPI";


const SliderItemStyled = styled.div`
  min-width: 465px;
  /*height: auto;*/

  color: aliceblue;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  margin-right: 10px;

  font-size: 14px;
  padding: 5px;

  transition: 1s;

  background-image: url("https://wallpaperaccess.com/full/6798923.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

const EText = styled.p`
  font-size: 24px;
  font-family: Corbel, sans-serif;
  text-decoration: underline;
  background-color: rgba(0, 0, 0, 0.7);
`

interface SliderItemProps {
    episode: string
}

const SliderItem: FC<SliderItemProps> = ({episode}) => {
    const {data: episodeData} = useFetchEpisodeQuery(episode)


    return (
        <SliderItemStyled>
            <EText>{episodeData && episodeData.name}</EText>
            <EText>{episodeData && episodeData.episode}</EText>
            <EText>{episodeData && episodeData.air_date}</EText>
        </SliderItemStyled>
    );
};

export default SliderItem;