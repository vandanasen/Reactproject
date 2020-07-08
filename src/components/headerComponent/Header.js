import React from 'react';
import{Link} from 'react-router-dom';
import WCTDlogo from './WCTDlogo.png';
import './Header.css';


class Header extends React.Component{
  
    render() {
     return(
    <header>   
    <div className="container">
       <br></br>
        <br></br>
        <div className="ui secondary pointing menu">
           <img className="ui left aligned small image" src={WCTDlogo} alt="not found"/>

           <Link className="item" to="/About">ABOUT</Link>
           <Link className="item" to="/News">NEWS</Link>
           <Link className="item" to="/Programs">PROGRAMS</Link>
           <Link className="item" to="/Supportus">SUPPORT US</Link>
           <Link className="item" to="/Contactus">CONTACT US</Link>
         
          <div className="right menu">
          
          <div className="ui item"> 
          
                  <a href="Donate" className="item">
                    <button className="ui teal button" style={{background_color:'#E5E5E5',color:'black'}}> DONATE
                    
                    </button>
                   </a>
                  

                    
                  
                   
                   
              
              <div className="item">
                  
                       <i className="search link icon"></i>
                  
              </div>

          </div>
              
                    
              </div>






            </div>    
            
          </div> 
        
      
    </header>   
    
    );
    }
}
export default Header;
