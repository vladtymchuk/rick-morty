import React, {FC, useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {Text} from "./ModalCharacter"

const SliderContainer = styled.div`
  width: 100%;
  height: 350px;

  background-color: #1e1c1c;
  position: relative;
`
const SliderTrack = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  overflow: hidden;
`
const SliderItem = styled.div`
  min-width: 23%;
  /*height: auto;*/

  color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;

  font-size: 14px;
  padding: 5px;

  transition: 1s;

  background-color: #c61a1a;
`
const SliderPrevBtn = styled.button`
  width: 30px;
  height: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid #a2a2a2;
  border-radius: 15px;

  position: absolute;
  transition: .7s;

  left: 5px;
  top: 45%;
  
  &:hover{
    background-color: black;
    color: aliceblue;
    transition: .7s;
  }
`
const SliderNextBtn = styled.button`
  width: 30px;
  height: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid #a2a2a2;
  border-radius: 15px;

  position: absolute;
  transition: .7s;

  right: 5px;
  top: 45%;

  &:hover{
    background-color: black;
    color: aliceblue;
    transition: .7s;
  }
`

interface SliderProps {
    episode: string[];
}

const Slider: FC<SliderProps> = ({episode}) => {
    const slider = useRef<any>(null)

    let position = 0

    const prevHandler = () => {
        if (position !== 0) {
            position+=550
            slider.current.childNodes.forEach((elem:any)=> {
                elem.style = `transform: translateX(${position}px)`
            })
        }
    }
    const nextHandler = () => {
        console.log(slider.current?.childNodes)
        if (position > -((episode.length - 4) * 550)){
            position-=550

            slider.current?.childNodes.forEach((elem:any)=> {
                elem.style = `transform: translateX(${position}px)`
            })
        } else {
            position = 0
            slider.current?.childNodes
                .forEach((elem:any)=> {
                    // console.log(elem.childNodes)
                    elem.style = `transform: translateX(${position}px)`
                })
        }
    }

    useEffect(() => {
        console.log("123",episode)
    })

    return (
        <SliderContainer>
            <SliderTrack ref={slider}>
                {episode.map((elem, index)=>{
                    return <SliderItem>
                        <Text>{elem}</Text>
                    </SliderItem>
                })}
            </SliderTrack>
            <SliderPrevBtn onClick={prevHandler}>{`<`}</SliderPrevBtn>
            <SliderNextBtn onClick={nextHandler}>{`>`}</SliderNextBtn>
        </SliderContainer>
    );
};

export default Slider;
