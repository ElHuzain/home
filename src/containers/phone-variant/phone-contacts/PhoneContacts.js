import './PhoneContacts.css'

import { BsFillChatLeftFill } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';

const PhoneContacts = (props) => {

    const size = 30;
    const color = 'var(--primary-text-clr)';

    return (
        <div onClick={props.func} className="phone-contacts phone-btn">
            {
                props.state
                    ? <AiOutlineClose size={size} color={color} />
                    : <BsFillChatLeftFill size={size} color={color} />
            }

        </div>
    )
}

export default PhoneContacts
