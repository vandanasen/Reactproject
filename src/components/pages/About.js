import React,{Fragment} from 'react';
import aboutpageimage from '../images/aboutpageimage.png';
import aboutusbannertext from '../images/aboutusbannertext.png';
import bannerblur from '../images/bannerblur.png';
class About extends React.Component{
    render() {
     return(  
        <Fragment>
        
        <div className="ui containerpage">
        
       
        <img className="ui bannerimage" src={aboutpageimage} alt="not found"/>
        
        <img className="ui bannertextimage" src={aboutusbannertext} alt="not found"/>
        </div>
        <br></br>
        <div className="ui containergreypage">
        <p>The About Page content </p>
        </div>
        </Fragment>
        

        
     );
    }
}
export default About;