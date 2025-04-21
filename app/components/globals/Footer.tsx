import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return <div className="d-flex p-2 text-white font-10">
        <span className="mr-2 align-self-center w3-hide-small">@ 2025 Challenge Sports</span>
        <span className="mr-2 align-self-center w3-hide-small">|</span>
        <span className="mr-2 align-self-center w3-hide-small">All Rights Reserved</span>
        <span className="mr-2 align-self-center w3-hide-small">|</span>
        <Link href="/privacy" className=" mr-2 align-self-center">Privacy Policy</Link>
        <span className="mr-2 align-self-center w3-hide-small">|</span>
        <Link href="/admin" className=" mr-2 align-self-center w3-hide-small">Admin</Link>
        <span className="ml-auto mr-2 align-self-center">FOLLOW US</span>
        <a href="https://www.facebook.com/ChallengeSports3v3?sk=wall" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="align-self-center mr-2 text-white" />
        </a>
        <a href="https://twitter.com/challsports" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faXTwitter} className="align-self-center mr-2 text-white" />
        </a>
        <a href="https://www.instagram.com/challengesports" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="align-self-center mr-2 text-white" />
        </a>
    </div>
}
export default Footer;