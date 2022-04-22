import React, {FC} from 'react';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import BigSwiper from "../../component/BigSwiper/BigSwiper";
import MainSwiper from "../../component/MainSwiper/MainSwiper";
import Cursor from "../../component/Cursor/Cursor";
import styled from "styled-components";
import TwoSlidesSwiper from "../../component/TwoSlidesSwiper/TwoSlidesSwiper";
interface HomeProps {

}

const Home: FC<HomeProps> = (props) => {

    return (
        <>
            <Cursor>
                <BigSwiper/>
            </Cursor>
            <Tittle>
                New Releases
            </Tittle>
            <Cursor>
                <MainSwiper/>
            </Cursor>
            <Tittle>
                Upcoming Movies
            </Tittle>
            <TwoSlidesSwiper/>
        </>

    );
};

export default Home;


const Tittle = styled.div`
  margin-left: 100px;
  margin-bottom: 58px;
  margin-top: 120px;
  font-size: 32px;
  color: #fff;
  font-weight: 600;
`

