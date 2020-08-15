import React from 'react'
import PropTypes from 'prop-types'
import {Swiper, SwiperSlide} from 'swiper/react';
import logo from "./logo.svg";
const Swipers = props => {
    return (
        <Swiper>
            <SwiperSlide>
            <img src={logo}/>
            </SwiperSlide>
        </Swiper>
    )
}

Swipers.propTypes = {

}

export default Swipers
