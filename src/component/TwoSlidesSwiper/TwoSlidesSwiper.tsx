import React, {FC} from 'react';
import {Parallax, Virtual} from "swiper";
import Cursor from "../Cursor/Cursor";
import { Swiper, SwiperSlide } from "swiper/react";
import test from "../BigSwiper/testIMG/1.jpg";
import styled from "styled-components";
import imdb from "../BigSwiper/Slide/imdb.svg";

interface TwoSlidesSwiperProps {

}

const TwoSlidesSwiper: FC<TwoSlidesSwiperProps> = (props) => {
    const swiperParams = {
        modules: [Virtual, Parallax],
        slidesPerView:2,
        touchStartPreventDefault:false,
        spaceBetween:30,
    };
    const arr = [{number: 1},{number:2},{number: 3},4,5,6,7,8]
    return (
        <>
            <Cursor>
                <Container>
                    <Swiper{...swiperParams}>
                        {arr.map((a,index)=> (
                            <SwiperSlide key={index}>
                                <Slide index={index}>
                                    <SlideContent>
                                        <Rating><img src={imdb} alt=""/>7.5</Rating>
                                        <Name>
                                            Ghost
                                        </Name>
                                        <Info>
                                            <Year id={'notCursor'}>
                                                2021
                                            </Year>
                                            <Dot/>
                                            <Genre id={'notCursor'}>
                                                Action
                                            </Genre>
                                        </Info>
                                    </SlideContent>
                                    <IMG>
                                        <img width={650} src={test} alt=""/>
                                    </IMG>
                                    <Blackout/>
                                </Slide>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </Container>
            </Cursor>
        </>
    );
};

export default TwoSlidesSwiper;


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 0 100px;
`

const Slide = styled.div<{index:number}>`
    width: 100%;
    color: #fff;
    z-index: -1;
    position: relative;
    height: 360px;
    border-radius: 12px;
    overflow: hidden;
  
`

const SlideContent = styled.div`
  height: 360px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 40px;
  margin-bottom: -100px;
  &:hover{
    img{
      transform: scale(1.1)
    }
  }
`

const IMG = styled.div`
  position: absolute;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;
  top:0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  img{
    transition: 0.5s;
  }
`
const Blackout = styled.div`
  position: absolute;
  top:0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
  background: rgba(1,1,1,0.4);
`

const Rating = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 75px;
`

const Name = styled.div`
  font-size: 20px;
  margin-top: 20px;
`

const Info = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-top: 10px;
`
const Genre = styled.div`
  color: #bfbfbf;
  cursor: pointer;
  &:hover{
    color: #fff;
  }
`

const Dot = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: rgba(255,255,255,0.5);
  margin: 0 10px;
`
const Year = styled.span`
  color:#ababab;
  font-weight: 500;
  cursor: pointer;
  &:hover{
    color: #fff;
  }
`