import './Contacts.css';
import { BsWhatsapp } from 'react-icons/bs'
import { BiLogoSnapchat } from 'react-icons/bi';
import { MdEmail, MdLocationOn } from 'react-icons/md';

const ContactBtn = (props) => {

  return <a target="_blank" style={props.LangAlignment} className="cntct" href={props.href} >
    {props.LangAlignment.textAlign == 'left' && props.Icon}
    <p style={{ textAlign: props.LangAlignment.textAlign, width: '100%', margin: 'auto 0' }}>{props.name}</p>
    {props.LangAlignment.textAlign == 'right' && props.Icon}
  </a>
}

const Contacts = (props) => {

  const Elements = props.Data.Elements.map(element => {
    return <ContactBtn
      LangAlignment={props.LangAlignment}
      Icon={element.Icon}
      name={element.Title}
      href={element.Href}
      color={element.Color}
    />
  })

  return <section id="contact-us" className="side-section">
    <div className="section-header">
      <h1>{props.Data.Title}</h1>
      <hr />
    </div>
    <div style={props.LangAlignment} className="section-content">

      {Elements}

    </div>

  </section>
}

// const Contacts = (props) => {

//   let Elements = props.Data.Elements.map(element => {

//     const Tarteb = props.LangAlignment.textAlign == 'right' ? <><p style={props.LangAlignment}>{element.Title}</p>{element.Icon}</>
//     : <>{element.Icon}<p style={props.LangAlignment}>{element.Title}</p></>

//     return <div style={props.LangAlignment} className="contact">
//       <div style={props.LangAlignment}>
//         {Tarteb}
//       </div>
//       <a  href="//api.whatsapp.com/send?phone=201126798092&text=WHATEVER_LINK_OR_TEXT_YOU_WANT_TO_SEND"><p>{element.Value}</p></a>
//     </div>
//   })

//   console.log(props.LangAlignment)

//   return (
//     <section id="contact-us" className="side-section">
//       <div className="section-header side">
//         <h1>{props.Data.Title}</h1>
//         <hr />
//       </div>
//       <div style={props.LangAlignment} className="section-content">

//         {Elements}

//       </div>
//     </section>
//   )
// }

export default Contacts
