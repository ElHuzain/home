import './Footer.css'

import { BsWhatsapp, BsTelephone } from 'react-icons/bs'
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { BiLogoSnapchat } from 'react-icons/bi'

const Footer = () => {
  return (
    <footer style={{backgroundColor: 'transparent', boxShadow: 'none'}}>
      <p className="address">تبوك - طريق الأمير عبدالمجيد - مقابل أمانة تبوك</p>
      <div className="contacts">
        <p><BsTelephone/> 0509255539</p>
        <p><BsTelephone/> 0538725276</p>
        <a href="mailto:"><MdEmail/> mokhatathades@gmail.com</a>
        <a href="https://www.snapchat.com/add/eng.mo2023"><BiLogoSnapchat/> @eng.mo23</a>
      </div>
      <nav>
        <a className="nav-about" href="#about-us">About</a>
        <hr/>
        <a className="nav-our" href="#our-services">Services</a>
        <hr/>
        <a className="nav-our" href="#our-projects">Projects</a>
        <hr/>
        <a className="nav-our" href="#our-team">Departments</a>
      </nav>
        <p className="rights">
        All Rights Reserved 2023<br/>
      Modern Scheme Engineering
Consulting Company
        </p>
    </footer>
  )
}

export default Footer
