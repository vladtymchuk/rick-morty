import React, {FC, useRef} from 'react';
import styled from "styled-components";
import SliderItem from "./SliderItem";


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
    const slider = useRef<any>(null);

    let position = 0

    const prevHandler = () => {
        if (position !== 0) {
            position+=470
            slider.current.childNodes.forEach((elem:any)=> {
                elem.style = `transform: translateX(${position}px)`
            })
        }
    }
    const nextHandler = () => {
        if (position > -((episode.length - 4) * 470)){
            position-=470

            slider.current?.childNodes.forEach((elem:any)=> {
                elem.style = `transform: translateX(${position}px)`
            })
        } else {
            position = 0
            slider.current?.childNodes
                .forEach((elem:any)=> {
                    elem.style = `transform: translateX(${position}px)`
                })
        }
    }
    return (
        <SliderContainer>
            <SliderTrack ref={slider}>
                {episode.map((elem, index)=>{
                    return <SliderItem key={index} episode={elem} />
                })}
            </SliderTrack>
            <SliderPrevBtn onClick={prevHandler}>{`<`}</SliderPrevBtn>
            <SliderNextBtn onClick={nextHandler}>{`>`}</SliderNextBtn>
        </SliderContainer>
    );
};

export default Slider;
