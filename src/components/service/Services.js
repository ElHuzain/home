import './Service.css';

const Services = (props) => {
  return (
    <div class="service-div">
      {props.icon}
      <h1>{props.name}</h1>
      <p>{props.description}</p>
    </div>
  )
}

export default Services
