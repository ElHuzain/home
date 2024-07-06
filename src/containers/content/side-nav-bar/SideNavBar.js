import './SideNavBar.css';
import { AiOutlineQuestionCircle, AiOutlineTeam, AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { MdOutlineDesignServices } from 'react-icons/md';

const SideNavBar = () => {
  return (
    <ul class="navigation-ul">

      <a id="contact-us-button" href="#about-us"><li>
        <AiOutlineQuestionCircle size="20"/>
      </li></a>
      <a href="#about-us"><li>
        <AiOutlineQuestionCircle size="20"/>
        <h1>About</h1>
      </li></a>
      <a href="#our-services"><li>
        <MdOutlineDesignServices size="20"/>
        <h1>Services</h1>
      </li></a>
      <a href="#our-projects"><li>
        <AiOutlineFundProjectionScreen size="20"/>
        <h1>Projects</h1>
      </li></a>
      <a href="#our-team"><li>
        <AiOutlineTeam size="20"/>
        <h1>Team</h1>
      </li></a>
    </ul>
  )
}

export default SideNavBar
