import React, {FC} from 'react';
import styled from "styled-components";
import { useSwiper } from 'swiper/react';

interface ControlSliderProps {
    currentSlide:number
}

const ControlSlider: FC<ControlSliderProps> = (props) => {
    const swiper = useSwiper();
    const arr = [{number: 1},{number:2},{number: 3}]

    const scrollTo = (index:number) => {
        swiper.slideToLoop(index,1500)
    }

    return (
        <SliderControls  id={'notCursor'}>
            {arr.map((slide,index)=>(
                <ControlContainer key={index} onClick={()=>scrollTo(index)}>
                    <Control active={swiper.activeIndex!==index}/>
                </ControlContainer>
            ))}
        </SliderControls>
    );
};

export default ControlSlider;


const SliderControls = styled.span`
  position: absolute;
  top: 50%;
  right: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  z-index: 10;
`

const ControlContainer = styled.div`
  padding: 7px 0;
`

const Control = styled.div<{active?: boolean}>`
  width: ${({ active }) => active ? '20px' : '30px'};
  height: 2px;
  background:${({ active }) => active ? '#6c757d' : '#fff'}; ;
  transition: 0.3s;
  cursor: pointer;
  ${ControlContainer}:hover & {
    background: #fff;
  }
`
