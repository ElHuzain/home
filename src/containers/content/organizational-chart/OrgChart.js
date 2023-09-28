import './OrgChart.css'
import SVG from './chartSVG';
import { CgProfile } from 'react-icons/cg';


const OrgChart = (props) => {

  return (
    <section id="org-chart" className="main">
      <div className="section-header">
        <h1>{props.Data.Title}</h1>
        <hr />
      </div>
      <div className="section-content">

        <SVG/>

      </div>
    </section>
  )
}

export default OrgChart
