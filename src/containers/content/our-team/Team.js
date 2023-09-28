import './Team.css'
import {CgProfile} from 'react-icons/cg';

const Member = (props) => {
  return (
    <div className="element">
      <div className="image-container">
        <CgProfile size="50"/>
      </div>
      <div className="text-container">
        <h1>{props.name}</h1>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

const Team = (props) => {

  let Elements = props.Data.Elements.map(ele => {
    return <Member name={ele.Name} description={ele.Rule}/>

  })

  return (
    <section id="our-team" className="main">
      <div className="section-header">
        <h1>{props.Data.Title}</h1>
        <hr/>
      </div>
      <div className="section-content">

        {Elements}

      </div>
    </section>
  )
}

export default Team
