import React, {FC, useState} from 'react';
import Slide from "./Slide/Slide";
import ControlSlider from "./ControlSlider/ControlSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Virtual } from "swiper";
import "swiper/css";

interface BigSwiperProps {

}

const BigSwiper: FC<BigSwiperProps> = (props) => {
    const [currentSlide,setCurrentSlide] = useState<number>(0)

    const swiperParams = {
        parallax: true,
        virtual: {
            addSlidesAfter: 1,
            addSlidesBefore: 1,
        },
        modules: [Virtual, Parallax],
        touchStartPreventDefault:false,
    };

    const HandleChangeSlide = (e:number) => {
        setCurrentSlide(e)
    }

    const arr = [{number: 1},{number:2},{number: 3}]

    return (
            <Swiper
                {...swiperParams}
                onSlideChangeTransitionEnd={(e)=>{HandleChangeSlide(e.activeIndex)}}
            >
                    {arr.map((a,index)=> (
                        <SwiperSlide virtualIndex={index} key={index}>
                            <Slide index={index} active={index===currentSlide}/>
                        </SwiperSlide>
                    ))}
                    <ControlSlider currentSlide={currentSlide}/>
            </Swiper>
    );
};

export default React.memo(BigSwiper);











