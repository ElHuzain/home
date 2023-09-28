import NavBar from './nav-bar/NavBar';
import SideNavBar from './side-nav-bar/SideNavBar';
import AboutUs from './about-us/AboutUs';
import Services from './our-services/Services';
import Projects from './our-projects/Projects';
import Team from './our-team/Team';
import OrgChart from './organizational-chart/OrgChart';
import SideContacts from './side/contacts/Contacts';
import SideAddress from './side/address/Address';
import './Content.css';


const Content = (props) => {

  const {Contacts, Address, Navigation, Content} = props.Data;


  return (
    <>
    <main className="flex-row">
      <aside className="aside">
        {/* <SideAddress LangAlignment={props.LangAlignment}  Data={Address} /> */}
        <SideContacts LangAlignment={props.LangAlignment}  Data={Contacts} />
      </aside>
      <div>
        <AboutUs Data={Content.AboutUs} />
        <Services Data={Content.OurServices} />
        <Projects LangAlignment={props.LangAlignment} Data={Content.OurProjects} />
        <Team Data={Content.OurTeam} />
        <OrgChart Data={Content.OrgChart}/>
      </div>
      <nav id="side-nav">
        <SideNavBar Data={Navigation} />
      </nav>
    </main>
    </>
  )
}

export default Content
