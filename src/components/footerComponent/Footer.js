import React, {Fragment} from 'react';
import Sealoftrans from '../images/seal-of-trans.png';
import Globalgiving from '../images/global-giving.png';
import Nebulaacademy from '../images/nebula-academy.png';
import facebookicon from '../images/facebookicon.png';
import instagramicon from '../images/instagramicon.png';
import youtubeicon from '../images/youtubeicon.png';
import twittericon from '../images/twittericon.png';
import linkedinicon from '../images/linkedinicon.png';
import{Link} from 'react-router-dom';

import  './Footer.css';


class Footer extends React.Component{

    render() {
     return(   
    

        
    <Fragment>

    <footer>
    
    
    <div className="ui container" >
    <div className="footer-group">
         <h4 className="ui header">Stay Connected</h4>
         <h5 className="ui sub header">Sign up with your e-mail to receive news and updates</h5>
         <div className="ui input">
            <input type="text" placeholder="subscribe" />
           
         </div>

    </div>
    <br></br>
    <div className="ui secondary vertical menu">
    <div className="header item">About</div>
 
  <Link className="item" to="/About">About</Link>
  <Link className="item" to="/About">OurTeam</Link>
  <Link className="item" to="/About">Blog</Link>
 
  
</div>

         <div className="group-of-seals">
         <h6 className="ui sub header1">We Connect The Dots, Inc. is a 501(c)(3) not-for-profit organization. </h6>
         <img className="ui tiny image1" src={Sealoftrans} alt="not found"/>
         <img className="ui tiny image2" src={Globalgiving} alt="not found"/>
         <img className="ui tiny image3" src={Nebulaacademy} alt="not found"/>  
         
        
         </div>
         <div className="group-of-social-icons">
         <img className="ui image4" src={facebookicon} alt="not found"/> 
         <img className="ui image4" src={instagramicon} alt="not found"/> 
         <img className="ui image4" src={youtubeicon} alt="not found"/> 
         <img className="ui image4" src={twittericon} alt="not found"/> 
         <img className="ui image4" src={linkedinicon} alt="not found"/> 
           
         </div>
        

         

    </div>

    
    
  


    </footer>
    
  

    </Fragment>
   
    
     );
    }
}
export default Footer;