import React,{Fragment} from 'react';
import aboutpageimage from '../images/aboutpageimage.png';

class About extends React.Component{
    render() {
     return(  
        <Fragment>
        
        <div className="ui containerpage">
        <img className="ui fluid image" src={aboutpageimage} alt="not found"/>
        <p>The About Page content </p>
        </div>
        </Fragment>
        

        
     );
    }
}
export default About;