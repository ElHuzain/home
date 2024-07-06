import './Header.css';
import { LiaCheckCircleSolid } from "react-icons/lia";


const HeaderAnchor = (props) => {
  return (
    <li><a href={props.href}>
      {props.icon}
      <h1>{props.name}</h1>
    </a></li>
  )
}



const Header = (props) => {

  let truthy = props.LangAlignment.textAlign == 'right' ? "English" : 'العربية'

  return (
    <header>
    <nav className="">
      <div className="logo-container">
        <h1>Modern Plan for</h1>
        <h1 className=""><span>Engineering</span> <span>Consultancy</span></h1>
      </div>
      <ul className="flex-row">

      </ul>
      <p className="swap-language" onClick={props.ChangeLanghage}>{truthy}</p>
    </nav>
    </header>
  )
}

export default Header
