import './Hero.css';
import Header from '../header/Header';
import I3 from '../../assets/images/1.jpg'
import I2 from '../../assets/images/4.jpg'
import I1 from '../../assets/images/3.jpg'
import { LiaCheckCircleSolid } from "react-icons/lia";
import { AiOutlineArrowDown } from "react-icons/ai";
import { useState } from 'react';

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
          <div className="image-container">
            <div className="img-list">
              <img id="image-1" src={imeg} />
              <img id="image-1" src={imeg} />
              <img id="image-1" src={imeg} />
            </div>
            <ul>
              <li onClick={() => { changeImage(I1) }}></li>
              <li onClick={() => { changeImage(I2) }}></li>
              <li onClick={() => { changeImage(I3) }}></li>
            </ul>
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
