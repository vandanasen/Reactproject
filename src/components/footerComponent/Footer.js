import React, {Fragment} from 'react';
import Sealoftrans from '../images/seal-of-trans.png';
import Globalgiving from '../images/global-giving.png';
import Nebulaacademy from '../images/nebula-academy.png';


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
         
         <div className="group-of-seals">
         <img className="ui image1" src={Sealoftrans} alt="not found"/>
         <img className="ui image2" src={Globalgiving} alt="not found"/>
         <img className="ui image3" src={Nebulaacademy} alt="not found"/>  
         <i className="facebook icon"></i>
         </div>
        

         

    </div>

    
    
  


    </footer>
    
  

    </Fragment>
   
    
     );
    }
}
export default Footer;