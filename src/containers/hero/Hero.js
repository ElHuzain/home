import './Hero.css';
import Header from '../header/Header';
import I3 from '../../assets/images/1.jpg'
import I2 from "../../assets/images/2.jpg"
import I1 from '../../assets/images/3.jpg'
import I4 from "../../assets/images/5.jpg"
import I5 from "../../assets/images/7.jpg"
import I6 from "../../assets/images/KodoRestaurant2.jpg"
import { useEffect, useState } from 'react';
import { Swiper as SwiperParent, SwiperSlide, useSwiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const SlideNext = () => {

  const Swiper = useSwiper();

  useEffect(() => {
    setInterval(() => {
      Swiper.slideNext(1000);
    }, 3500)
  }, []);

  return <div></div>

}

const Hero = (props) => {
  let [imeg, changeImage] = useState(I1);

  let Context = props.Data.Hero;
  let Elements = Context.Elements.map(element => {
    return <li>{Context.Icon}<p>{element}</p></li>

  })

  return (
    <>
      <Header LangAlignment={props.LangAlignment} ChangeLanghage={props.ChangeLanghage} />
      <div className="hero">

        <div className="hero-container">
          <div style={{width: "100%"}} className="image-container">
            <div className="img-list">
              <SwiperParent style={{width: "100%", zIndex: -1}} pagination={true} loop={true} className="mySwiper">
                <SwiperSlide><img style={{height: "100%"}} alt="" src={I1} /> </SwiperSlide>
                <SwiperSlide><img style={{height: "100%"}} alt="" src={I2} /> </SwiperSlide>
                <SwiperSlide><img style={{height: "100%"}} alt="" src={I3} /> </SwiperSlide>
                <SwiperSlide><img style={{height: "100%"}} alt="" src={I4} /> </SwiperSlide>
                <SwiperSlide><img style={{height: "100%"}} alt="" src={I5} /> </SwiperSlide>
                <SwiperSlide><img style={{height: "100%"}} alt="" src={I6} /> </SwiperSlide>
                <SlideNext />
              </SwiperParent>
            </div>
            {/* <ul>
              <li onClick={() => { changeImage(I1) }}></li>
              <li onClick={() => { changeImage(I2) }}></li>
              <li onClick={() => { changeImage(I3) }}></li>
            </ul> */}
          </div>
          <div className="content-container">
            <div className="content-header-container">
              <h1 className="content-header">{Context.Name}</h1>
              <h1 className="content-subheader">{Context.Title}</h1>
            </div>
            <ul>

              {Elements}

            </ul>

            <a href="#about-us"><h1 className="continue-button"><span>{Context.CTA}</span>{Context.ArrowDownIcon}</h1></a>

          </div>
        </div>

      </div>
    </>
  )
}

export default Hero
