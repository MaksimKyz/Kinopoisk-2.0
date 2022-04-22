import React, {FC} from 'react';
import styled from "styled-components";
import {useScroll} from "../../hooks/useScroll";
import {CSSTransition} from 'react-transition-group';
import logo from './logo.svg'
interface HeaderProps {

}


const Header: FC<HeaderProps> = () => {
    const scroll = useScroll({
        wait: 500,
        element: window
    });
    const showHeader = (scroll.direction==='up'||scroll.y===undefined||scroll.y<50)

    return (
        <CSSTransition
            in={showHeader}
            timeout={1000}
            classNames="header"
        >
            <HeaderContainer>
                <HeaderBlur>
                    <HeaderContent>
                        <Logo src={logo}/>
                        <NavBar>
                            <NavItem href={'#'}>Home</NavItem>
                            <NavItem href={'#'}>Movies</NavItem>
                            <NavItem href={'#'}>Serials</NavItem>
                            <NavItem href={'#'}>Pricing</NavItem>
                            <NavItem href={'#'}>Blog</NavItem>
                        </NavBar>
                        <div></div>
                    </HeaderContent>
                </HeaderBlur>
            </HeaderContainer>
        </CSSTransition>
    );
};

export default Header;


const HeaderContainer = styled.div`
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: center;
    z-index: 100;
`
const HeaderBlur = styled.div`
  width: 99%;
  position: relative;
  margin-top: 10px;
  transition: 0.3s;
  height: 80px;
  color: #fff;
  backdrop-filter: blur(20px);
  border-radius:10px;
  ::after{
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      opacity: 0.5;
      background: #1b1b1d;
      z-index: -1;
      border-radius:10px;
  }
`
const HeaderContent = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
`
const Logo = styled.img`
    cursor: pointer;
`
const NavBar = styled.div`
  display: flex;
  margin-right: 400px;
`
const NavItem = styled.a`
  padding: 7px 10px;
  font-size: 14px;
  font-weight: bold;
  margin-left: 15px;
  cursor: pointer;
  position:relative;
  color:#fff;
  text-decoration:none;
  :after{
    content: '';
    position: absolute;
    width: 0;
    height: 100%;
    border-radius: 7px;
    background: rgba(255,255,255,0.2);
    left: 50%;
    top: 0;
    z-index: -1;
    transition: 0.3s;
    opacity: 0;
  }
  &:focus{
    :after{
      left: 0;
      opacity: 1;
      width: 100%;
      background: rgba(255,255,255,0.4);
    }
  }
  &:hover{
    :after{
      left: 0;
      opacity: 1;
      width: 100%;
    }
  }
`