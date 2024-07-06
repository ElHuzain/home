import './Address.css';
import { BsWhatsapp, BsTelephone, BsSnapchat } from 'react-icons/bs'
import { FaLocationDot } from 'react-icons/fa6'

const Address = (props) => {

  let Context = props.Data;

  return (
    <section id="contact-us" className="side-section">
      <div className="section-header side">
        <h1>{Context.Title}</h1>
        <hr />
      </div>
      <div className="section-content">
        <p>{Context.Address}</p>
        <a style={props.LangAlignment} className="address-button" target="_blank" href="https://www.google.com/maps/place/KAAB7507,+7507+Prince+Abdulmajid+Ibn+Abdulaziz,+2927,+Assulimaniyah,+Tabuk+47312,+Saudi+Arabia/@28.4103621,36.5675854,19z/data=!4m6!3m5!1s0x15a9ad764a9dbbb9:0x21f49a0877b5934b!8m2!3d28.4106773!4d36.5675483!16s%2Fg%2F11v67qvl2d">
          {props.LangAlignment.textAlign == 'left' && <FaLocationDot />}
          <p style={props.LangAlignment}>{Context.ActionButton}</p>
          {props.LangAlignment.textAlign == 'right' && <FaLocationDot />}
        </a>
      </div>
    </section>
  )
}

export default Address
