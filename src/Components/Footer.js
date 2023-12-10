import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faHouse, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faGoogle, faTwitter, faInstagram, faFacebook, faFacebookMessenger, faWhatsapp, faDiscord  } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='socials'>
            <h5>Follow us in our socials</h5>

            <div className='icon-social'>
                <label><FontAwesomeIcon icon={faYoutube} size="sm" style={{color: "#eee3cf",}} /></label>
                <label><FontAwesomeIcon icon={faGoogle} size="sm" style={{color: "#eee3cf",}} /></label>
                <label><FontAwesomeIcon icon={faTwitter} size="sm" style={{color: "#eee3cf",}} /></label>
                <label><FontAwesomeIcon icon={faInstagram} size="sm" style={{color: "#eee3cf",}} /></label>
                <label><FontAwesomeIcon icon={faFacebook} size="sm" style={{color: "#eee3cf",}} /></label>
            </div>
            
        </div>

            <div className='footer-info'>
                <div className='brand'>
                    <h5>Lutong Pinoy</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>

                <div className='address'> 
                    <h5>Contact</h5>
                    <p><FontAwesomeIcon icon={faHouse} size="sm" style={{color: "#eee3cf",}} />Ilocos Sur, Philippines</p>
                    <p><FontAwesomeIcon icon={faEnvelope} size="sm" style={{color: "#eee3cf",}} /> lutongpinoy@example.com</p>
                    <p><FontAwesomeIcon icon={faPhone} size="sm" style={{color: "#eee3cf",}} />+63-9*4-0**7-***</p>
                </div>

                <div className='contact'>
                    <div>
                        <h5>Message us</h5>
                    </div>

                    <div className='contact-brand'>
                        <label><FontAwesomeIcon icon={faDiscord} size="sm" style={{color: "#eee3cf",}} /></label>
                        <label><FontAwesomeIcon icon={faEnvelope} size="sm" style={{color: "#eee3cf",}} /></label>
                        <label><FontAwesomeIcon icon={faFacebookMessenger} size="sm" style={{color: "#eee3cf",}} /></label>
                        <label><FontAwesomeIcon icon={faWhatsapp} size="sm" style={{color: "#eee3cf",}} /></label>
                    </div>
                    
                </div>
            </div>
        

        <div className='copyright'>
            <p>&copy; 2023 copyright: LutongPinoy</p>
        </div>
    </div>
  )
}

export default Footer