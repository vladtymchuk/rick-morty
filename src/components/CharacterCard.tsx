import React, {FC, useState} from 'react';
import styled from "styled-components";
import ModalCharacter from "./ModalCharacter";
import {ICharacter} from "../models/ICharacter";

interface PropsChCard {
    imgUrl: string
}

const ChCard = styled.div<PropsChCard>`
  height: 300px;
  width: 20%;
  border: 1px solid black;
  
  background-image: url(${props => props.imgUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  margin: 2rem;
  transition: .7s;

  &:hover{
    background-size: 120%;
    transition: .7s;
  }
`

const TextBackground = styled.div`
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.6);

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  //align-items: center;
`

const CardText = styled.div`
  color: rgb(240, 248, 255);
  font-size: 24px;
  font-family: OpenSymbol,serif;
`

interface CharacterProps {
    character: ICharacter,
    openInfo: (id: number) => any
}

const CharacterCard: FC<CharacterProps> = ({character, openInfo}) => {
    const [show, setShow] = useState<boolean>(false);
    const {name, id, status, species, image} = character
    const [fullInfo, setFullInfo] = useState({})


    function handleShow() {
        setFullInfo(openInfo(id))
        setShow(true);
    }

    return (
        <>
            <ChCard imgUrl={image}
                onClick={handleShow}
            >
                <TextBackground>
                    <CardText>Name: {name}</CardText>
                    <CardText>Species: {species}</CardText>
                    <CardText>Status: {status}</CardText>
                </TextBackground>
            </ChCard>

            {show && <ModalCharacter show={show} setShow={setShow} id={id} fullInfo={fullInfo}/>}
        </>
    );
};

export default CharacterCard;
