import './Projects.css';
import Project from '../../../components/project/Project';
import I1 from '../../../assets/images/1.jpg'; // THIS
import I2 from '../../../assets/images/2.jpg';
import I3 from '../../../assets/images/3.jpg';
import I4 from '../../../assets/images/4.jpg';
import I5 from '../../../assets/images/5.jpg';
import I6 from '../../../assets/images/6.jpg';
import I7 from '../../../assets/images/7.jpg';
import I8 from '../../../assets/images/8.jpg';



const Projects = (props) => {
  let Elements = props.Data.Elements.map(element => {
    return <Project
      LangAlignment={props.LangAlignment}
      source={element.MainImage}
      title={element.Title}
      scope={element.Scope}
      date={element.Date}
      location={element.Location}
      by={element.By} />

  })


  return (
    <section id="our-projects" className="main">
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

export default Projects
