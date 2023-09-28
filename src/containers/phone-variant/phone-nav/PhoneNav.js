import './PhoneNav.css'

import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

const PhoneNav = (props) => {

    const size = 30;
    const color = 'var(--primary-text-clr)';

    return (
        <div onClick={props.func} className="phone-nav phone-btn">

            {
                props.state
                    ? <AiOutlineClose size={size} color={color}/>
                    : <GiHamburgerMenu size={size} color={color}/>
            }

        </div>
    )
}

export default PhoneNav
