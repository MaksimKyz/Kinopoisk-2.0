import React, {FC, useEffect, useState} from 'react';
import img2 from "../testIMG/1.jpg";
import styled from "styled-components";
import imdb from './imdb.svg'
import RedButton from "../../UI/Button/RedButton";
import {CSSTransition} from "react-transition-group";
interface BigSlidesProps {
    active:boolean
    index:number
}

const Slide: FC<BigSlidesProps> = (props) => {
    const [load,setLoad] = useState(false)
    useEffect(()=>{
        setLoad(true)
    },[])


    return (
        <SlideItem className={'swiper-slide'}>
            <IMG
                data-swiper-parallax="40%"
                src={img2}/>
            <Blackout/>
            <Container>
                <Delay delay={0}>
                    <CSSTransition in={props.active && load} timeout={1000} classNames="node">
                        <Genre>Приключение</Genre>
                    </CSSTransition>
                </Delay>
                <Delay delay={100}>
                    <CSSTransition in={props.active && load} timeout={1000} classNames="node">
                        <Name>Капитан Марвел</Name>
                    </CSSTransition>
                </Delay>
                <Delay delay={200}>
                    <CSSTransition in={props.active && load} timeout={1000} classNames="node">
                        <Info>
                            <Rating><img src={imdb} alt=""/>7.5</Rating>
                            <Dot/>
                            <Year id={'notCursor'}>2022</Year>
                        </Info>
                    </CSSTransition>
                </Delay>
                <Delay delay={300}>
                    <CSSTransition in={props.active && load} timeout={1000} classNames="node">
                        <Description>
                            A hardened mercenary's mission becomes a soul-searching race to survive when he's sent into Bangladesh to rescue a drug lord's kidnapped son.
                        </Description>
                    </CSSTransition>
                </Delay>
                <Delay delay={400}>
                    <CSSTransition in={props.active && load} timeout={1000} classNames="node">
                        <Button>
                            <RedButton>Watch Now</RedButton>
                        </Button>
                    </CSSTransition>
                </Delay>
            </Container>
        </SlideItem>
    );
};

export default Slide;

const Delay = styled.div<{delay:number}>`
  .node-enter {
    opacity: 0;
    transform: translateX(100px);
  }
  .node-enter-active {
    opacity: 1;
    transform: translateX(0px);
    transition: 1s;
    transition-delay: ${({ delay }) => `${delay}ms`} !important;

  }
  .node-exit {
    opacity: 0;
  }
  .node-exit-active {
    opacity: 0;
    transform: translateX(100px);
    transition: 1s;
    transition-delay: ${({ delay }) => `${delay}ms`};

  }
  .node-enter-done {
    opacity: 1;
    transform: translateX(0px);
    transition: 1s;
    transition-delay: ${({ delay }) => `${delay}ms`};
  }
`

const SlideItem = styled.div`
  position: relative;
  height: 850px;
  width: 100vw;
  display: flex;
  justify-content: center;
  color: #fff;
  overflow: hidden;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding: 0 100px;
  height: 100%;
`
const Genre = styled.div`
  padding: 7px;
  background: rgba(256,256,256,0.1);
  border-radius: 5px;
  color: #bfbfbf;
  opacity: 0;
  transform: translateX(100px);

`
const Name = styled.div`
  font-size: 50px;
  font-weight: bold;
  margin: 10px 0;
  opacity: 0;
  transform: translateX(100px);
`
const Info = styled.div`
  display: flex;
  align-items: center;
  opacity: 0;
  transform: translateX(100px);
`
const Rating = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 75px;
`
const Dot = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: rgba(255,255,255,0.5);
  margin: 0 15px;
`
const Year = styled.span`
  color:#ababab;
  font-weight: 500;
  cursor: pointer;
  &:hover{
    color: #fff;
  }
`
const Description = styled.div`
  margin-top: 46px;
  font-size: 18px;
  color:#ababab;
  width: 45%;
  line-height: 1.8;
  font-weight: 500;
  opacity: 0;
  transform: translateX(100px);
`
const Button = styled.div`
  margin-top: 30px;
  opacity: 0;
  transform: translateX(100px);
`
const IMG = styled.img`
  position: absolute;
  width: 100vw;
  height: 100%;
  z-index: -1;
`
const Blackout = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
  background: rgba(1,1,1,0.7);
`



