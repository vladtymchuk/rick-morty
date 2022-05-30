import React, {FC} from 'react';
import {IEpisode} from "../models/IEpisode";
import styled from "styled-components";

interface EpisodeCardProps {
    episode: IEpisode,
}

const CardBox = styled.div`
  width: 80%;
  height: 200px;
  border: 1px solid black;
  
  color: aliceblue;
  
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`
const Button = styled.button`
  background-color: black;
  color: aliceblue;
  border: 1px solid wheat;
  font-size: 24px;
  padding: 10px;
  transition: .7s;
  
  &:hover{
    transition: .7s;
    background-color: wheat;
    color: black;
  }
`

const EpisodeCard: FC<EpisodeCardProps> = ({episode}) => {
    const {name, id, url} = episode;

    const saveEpisodeHandler = () => {
        if (localStorage.getItem("seeLater") === null) {
            localStorage.setItem('seeLater', JSON.stringify([url]))
        } else {
            let seeLaterList = JSON.parse(localStorage.seeLater)
            seeLaterList.push(url)
            // let unique = new Set(seeLaterList)
            localStorage
                .setItem("seeLater",
                    JSON.stringify(seeLaterList)
                )
        }
    }

    return (
        <CardBox>
            {id}. {name}
            <Button
                onClick={saveEpisodeHandler}
            >See Later!</Button>
        </CardBox>
    );
};

export default EpisodeCard;