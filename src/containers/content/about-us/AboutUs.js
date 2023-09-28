import './AboutUs.css'

const AboutUs = (props) => {

  let Elements = props.Data.Elements.map(element => {
    return <><h1>{element.Title}</h1>
      <p>{element.Content}</p></>
  })

  return (
    <section id="about-us" className="main">
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

export default AboutUs
