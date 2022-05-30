import React, {FC, useEffect, useState} from 'react';
import EpisodeCardLater from "../components/EpisodeCardLater";
import styled from "styled-components";

const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: black;
`

const SeeLater: FC = () => {
    const [urls, setUrls] = useState<string[]>([])

    useEffect(() => {
        setUrls(JSON.parse(localStorage.seeLater))
    }, [])

    return (
        <ContainerStyled>
            {urls && urls.map((url, index) => {
                return <EpisodeCardLater key={index} url={url}/>
            })}
        </ContainerStyled>
    );
};

export default SeeLater;