import './PhoneNav.css'

const ContactBtn = (props) => {
    return <a className="element floating-phone-btn" href={'#' + props.href} >{props.Icon}
    </a>
}

const PhoneNavElements = (props) => {
    const Elements = props.Data.Elements.map(element => {
        return <ContactBtn
            Icon={element.Icon}
            href={element.Href}
        />
    })

    return <div style={{ right: '15px' }} className={props.state ? 'phone-elements  visible' : 'phone-elements'}>

        {Elements}

    </div>
}

export default PhoneNavElements
