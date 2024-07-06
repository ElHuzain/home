import './PhoneContacts.css'

const ContactBtn = (props) => {
    return <a className="element floating-phone-btn" target="_blank" style={props.LangAlignment} href={props.href} >{props.Icon}
    </a>
}

const PhoneContactsElements = (props) => {
    const Elements = props.Data.Elements.map(element => {
        return <ContactBtn
            LangAlignment={props.LangAlignment}
            Icon={element.Icon}
            name={element.Title}
            href={element.Href}
            color={element.Color}
        />
    })

    return <div style={{left: '15px'}} className={props.state ? 'phone-elements  visible' : 'phone-elements'}>

            {Elements}

    </div>
}

export default PhoneContactsElements
