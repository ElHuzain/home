import React from 'react';
import ReactDOM from 'react-dom';

import PhoneNav from './containers/phone-variant/phone-nav/PhoneNav';
import PhoneNavElements from './containers/phone-variant/phone-nav/PhoneNavElements';
import PhoneContacts from './containers/phone-variant/phone-contacts/PhoneContacts';
import PhoneContactsElements from './containers/phone-variant/phone-contacts/PhoneContactsElements';

import Header from './containers/header/Header.js';
import Hero from './containers/hero/Hero.js';
import Content from './containers/content/Content.js';
import Footer from './containers/footer/Footer.js';

import './styles/resets.css';
import './styles/style.css';

import Data from './assets/data/data';

const LoadingPage = (props) => {


  return <div id="loading">Welcome! :)</div>
}

const ContentPage = () => {
  const [Language, setLanguage] = React.useState(false);
  const [nav, setNav] = React.useState(false);
  const [contacts, setContacts] = React.useState(false);


  function ChangeLanghage() {
    setLanguage(prevState => !prevState);
  }

  let ArStyles = {
    textAlign: 'right',
    fontFamily: "'Readex Pro', Helvetica",
    width: '100%'
  }
  let EnStyles = {
    textAlign: 'left',
    fontFamily: "'Roboto', Helvetica",
    width: '100%'
  }

  const LangAlignment = Language ? EnStyles : ArStyles;

  function toggleContacts () {
    setContacts(!contacts);
  }
  
  function toggleNavigation (){
    setNav(!nav);
  }

  return (
    <div id="main-container" style={LangAlignment}>
      <PhoneContactsElements state={contacts} Data={Data.EnglishContext.Contacts}/>
      <PhoneNavElements state={nav} Data={Data.EnglishContext.Navigation}/>
      <PhoneNav Data={Data.EnglishContext.Navigation} state={nav} func={toggleNavigation}/>
      <PhoneContacts func={toggleContacts}/>
      <Hero LangAlignment={LangAlignment} ChangeLanghage={ChangeLanghage} Data={Language ? Data.EnglishContext : Data.ArabicContext} />
      <Content LangAlignment={LangAlignment} Data={Language ? Data.EnglishContext : Data.ArabicContext} />
      <Footer Data={Language ? Data.EnglishContext : Data.ArabicContext} />
    </div>
  )
}

const App = () => {
  const [Loading, setLoad] = React.useState(false);

  const loadAgain = () => setLoad(true);

  // React.useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setLoad(false);
  //   }, 1)
  // })

  return Loading ? <LoadingPage/> : <ContentPage/>
}

ReactDOM.render(<App />, document.getElementById('root'));