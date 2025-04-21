import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

const Contact = () => {
    return (
        <div className="bg-black">
            <div className="w3-content mx-auto d-flex text-white text-xs" style={{ height: 20 }}>
                <FontAwesomeIcon icon={faEnvelope} className="fa-fw ms-auto align-self-center" />                
                <span className="align-self-center mx-2">info@challengesports.com</span>
            </div>
        </div>)
}
export default Contact;