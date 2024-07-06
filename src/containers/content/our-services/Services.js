import './Services.css'
import Service from '../../../components/service/Services';
import { AiOutlineSetting } from 'react-icons/ai';
import { AiOutlineRobot } from 'react-icons/ai';
import { AiOutlineSafety } from 'react-icons/ai';
import { FaHelmetSafety } from 'react-icons/fa6';
import { PiCouchLight } from 'react-icons/pi';
import { MdOutlineDesignServices } from 'react-icons/md';

const Services = (props) => {
  const size = 40;
  const color = "gray";

  let Elements = props.Data.Elements.map(element => {
    return <Service icon={element.Icon} name={element.Title} description={element.Content} />

  })

  return (
    <section id="our-services" className="main">
      <div className="section-header">
        <h1>{props.Data.Title}</h1>
        <hr />
      </div>
      <div className="section-content">

        {Elements}

      </div>
    </section>
  )
}

export default Services
