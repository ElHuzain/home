import './Project.css'
import { MdLocationPin, MdDateRange } from 'react-icons/md'
import { FaLocationDot } from 'react-icons/fa6';
import { RxDimensions } from 'react-icons/rx'
import { BsFillPersonFill } from 'react-icons/bs'
import { useState } from 'react';

const Specification = (props) => {

  if (props.LangAlignment.textAlign == 'right') {
    return (
      <div style={props.LangAlignment}>
        <p style={props.LangAlignment}>{props.value}</p>
        {props.icon}
      </div>
    )
  } else {
    return (
      <div style={props.LangAlignment}>
        {props.icon}
        <p style={props.LangAlignment}>{props.value}</p>
      </div>
    )
  }

}



const Project = (props) => {
  const [Hovered, setHover] = useState(false);

  function handleHover() {
    setHover(true);
  }
  function handleNOTHover() {
    setHover(false);
  }

  return (
    <div onMouseOut={handleNOTHover} onMouseOver={handleHover} className="project">
      <div className="image-container">
        <img className={Hovered ? 'img-hvr' : ''} src={props.source} />
        <div className={Hovered ? 'project-context visible ' : 'project-context '}>
          <div className="inside-project-context">
            <h1>{props.title}</h1>
            <div style={props.LangAlignment} className="project__specifications">
              <Specification LangAlignment={props.LangAlignment} icon={<FaLocationDot />} value={props.location} />
              <Specification LangAlignment={props.LangAlignment} icon={<BsFillPersonFill />} value={props.by} />
              {/* <Specification LangAlignment={props.LangAlignment} icon={<RxDimensions />} value={props.scope} /> */}
              {/* <Specification LangAlignment={props.LangAlignment} icon={<MdDateRange />} value={props.date} /> */}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="text-container">
            <h1>{props.title}</h1>
            <div className="project__specifications">
            <Specification icon={<FaLocationDot />} value={props.location} />
            <Specification icon={<RxDimensions />} value={props.scope} />
            <Specification icon={<MdDateRange />} value={props.date} />
            </div>
        </div> */}
    </div>
  )
}

export default Project
