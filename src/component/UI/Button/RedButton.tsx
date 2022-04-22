import React, {FC} from 'react';
import styled from "styled-components";

interface ButtonProps {
    onClick?:Function
}

const RedButton: FC<ButtonProps> = (props) => {
    return (
        <Button id={'notCursor'}>
            {props.children}
        </Button>
    );
};

export default RedButton;

const Button = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 16px 35px;
  border: none;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  position: relative;
  border-radius:10px ;
  background: transparent;
  z-index: 2;
  overflow: hidden;
  transition:transform 0.7s;
  &:hover{
    transform: scale(1.05);
    color: #000;
    :before{
      transform: scale(300);
      left: 55%;
      transition: 0.5s;
    }
  }
  :after{
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #f53132;
    border-radius:10px ;
    left: 0;
    z-index: -2;
  }
  :before{
    content: '';
    position: absolute;
    width: 1px;
    height: 1px;
    background: #fff;
    border-radius:1px;
    left: 50%;
    z-index: -1;
  }
`