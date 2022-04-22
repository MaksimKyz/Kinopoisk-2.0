import React, {FC, useState} from 'react';
import Cursor from "../Cursor/Cursor";
import { Swiper, SwiperSlide } from "swiper/react";
import {Parallax, Virtual} from "swiper";
import styled from "styled-components";
import test from './1.jpg'
interface MainSwiperProps {

}

const MainSwiper: FC<MainSwiperProps> = (props) => {
    const swiperParams = {
        modules: [Virtual, Parallax],
        slidesPerView:5,
        touchStartPreventDefault:false,
        spaceBetween:180,
    };
    const arr = [{number: 1},{number:2},{number: 3},4,5,6,7,8]
    return (
        <>
                <Swiper{...swiperParams}>
                    <SwiperSlide/>
                    {arr.map((a,index)=> (
                        <SwiperSlide key={index}>
                            <Slide index={index}>
                                <IMG>
                                    <img height={410} src={test} alt=""/>
                                    <Rating>8.1</Rating>
                                </IMG>
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
                            </Slide>
                        </SwiperSlide>
                    ))}
                </Swiper>
        </>
    );
};

export default MainSwiper;


const Slide = styled.div<{index:number}>`
    width: 307px;
    margin-left: -240px;
    color: #fff;
    z-index: -1;
`

const IMG = styled.div`
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 307px;
  cursor: pointer;
  position: relative;
  img{
    transition: 0.5s;
  }
  &:hover{
    img{
      transform: scale(1.1)
    }
  }
`

const Rating = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 7px;
  background: rgba(0,0,0,0.7);
  border-radius: 5px;
  color: #fff;
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