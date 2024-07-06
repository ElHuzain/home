import './NavBar.css'
import { LiaCheckCircleSolid } from "react-icons/lia";

const NavBar = () => {
  return (
    <section className="nav-bar main">
        
        <div className="nav-bar-navigation">

            <a href="#about-us" className="nav-bar-element">

                <LiaCheckCircleSolid style={{margin: "0 auto"}}/>
                <h1>about-us</h1>

            </a>
            <a href="#about-us" className="nav-bar-element">

                <LiaCheckCircleSolid style={{margin: "0 auto"}}/>
                <h1>about-us</h1>

            </a>
            <a href="#about-us" className="nav-bar-element">

                <LiaCheckCircleSolid style={{margin: "0 auto"}}/>
                <h1>about-us</h1>

            </a>
            <a href="#about-us" className="nav-bar-element">

                <LiaCheckCircleSolid style={{margin: "0 auto"}}/>
                <h1>about-us</h1>

            </a>


        </div>
    </section>
  )
}

export default NavBar
