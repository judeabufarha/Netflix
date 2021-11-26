import "./styles.css";

import {FaFacebookF} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';



export const Footer = () => {
    return (
       <div className = "footer">
           <div className= "icons">
                <FaFacebookF className = "facebook"/>
                <FaInstagram className = "instagram"/>
                <FaTwitter className = "twitter"/>
                <FaYoutube className = "youtube"/>
           </div>
        
           <div className = "copyright">
                <p>© 2021 Jude Abu-Farha</p>
           </div>      
       </div>
    );
};
