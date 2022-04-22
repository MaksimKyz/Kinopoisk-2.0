import React, {FC, useEffect, useMemo, useRef, useState} from 'react';
import {useHover} from "../../hooks/useHover";
import styled from "styled-components";
import {useMousePosition} from "../../hooks/useMousePosition";
import {CSSTransition} from "react-transition-group";
import {useTagHover} from "../../hooks/useTagHover";
import {usePrevious} from "../../hooks/usePrevious";

interface CursorProps {
}

const Cursor: FC<CursorProps> = (props) => {
    const [touchMove,setTouchMove] = useState(false)
    const [hoverRef, isHovered] = useHover<HTMLDivElement>();
    const hoverButton = useTagHover()
    const position = useMousePosition()
    const CursorRef = useRef<HTMLDivElement>(null)


    useEffect(()=>{
        if (CursorRef.current){
            CursorRef.current.style.left = `${position.x}px`
            CursorRef.current.style.top = `${position.y}px`
        }
    },[position])

    return (
        <CursorAnimation ref={hoverRef}>
            <CSSTransition
                in={isHovered && !hoverButton}
                timeout={1300}
                classNames={'cursor'}
                unmountOnExit
            >
                <CursorPosition ref={CursorRef}>
                    <CustomCursor touchMove={touchMove}/>
                </CursorPosition>
            </CSSTransition>
            {props.children}
        </CursorAnimation>
    );
};

export default Cursor;

const CursorAnimation = styled.div`
  
  
  .cursor-enter {
    opacity: 0;
    transform: scale(0.5) translate(-50%, -50%);

  }

  .cursor-enter-active {
    opacity: 1;
    transform: translate(-50%, -50%);
    transition: opacity 300ms, transform 300ms;

  }
  .cursor-exit {
    opacity: 1;
  }

  .cursor-exit-active {
    opacity: 0;
    transform: scale(0.5) translate(-100%, -100%);
    transition: opacity 300ms, transform 300ms;
  }
  
`

const CursorPosition = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
  z-index: 999;
  pointer-events: none;
  display: flex;
  align-items: center;
`

const CustomCursor = styled.div<{touchMove:boolean}>`
  position: relative;
  width: ${({ touchMove }) => touchMove ? '25px' : '35px'};
  height: ${({ touchMove }) => touchMove ? '25px' : '35px'};
  border: 2px solid #bdb7b0;
  border-radius: 100%;
  display: flex;
  align-items: center;
  transition:0.3s;
  :after{
    content: '';
    position: absolute;
    left: ${({ touchMove }) => touchMove ? '-30px' : '-20px'};
    width: 8px;
    height: 8px;
    border-top: 2px solid  ${({ touchMove }) => touchMove ? '#fff' : '#bdb7b0'};
    border-right: 2px solid  ${({ touchMove }) => touchMove ? '#fff' : '#bdb7b0'};
    transform: rotate(-135deg) ;
    transition:0.3s;
  }
  :before{
    content: '';
    position: absolute;
    right: ${({ touchMove }) => touchMove ? '-30px' : '-20px'};
    width: 8px;
    height: 8px;
    border-top: 2px solid ${({ touchMove }) => touchMove ? '#fff' : '#bdb7b0'} ;
    border-right: 2px solid  ${({ touchMove }) => touchMove ? '#fff' : '#bdb7b0'};
    transform: rotate(45deg);
    transition:0.3s;
  }
`
