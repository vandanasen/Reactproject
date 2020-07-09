import React,{Fragment} from 'react';
import contactuspageimage from '../images/contactuspageimage.png';
import contactusbannertext from '../images/contactusbannertext.png';

class Contactus extends React.Component{
    render() {
     return(   
        <Fragment>
        
        <div className="ui containerpage">
        <img className="ui bannerimage" src={contactuspageimage} alt="not found"/>
        <img className="ui bannertextimage" src={contactusbannertext} alt="not found"/>
        </div>
        <br></br>
        <div className="ui containergreypage">
        <p>The Contact Us Page content </p>
        </div>
        </Fragment>
     );
    }
}
export default Contactus;