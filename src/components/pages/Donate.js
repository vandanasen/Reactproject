import React,{Fragment} from 'react';
import donatepageimage from '../images/donatepageimage.png';
import donatebannertext from '../images/donatebannertext.png';

class Donate extends React.Component{
    render() {
     return(
        <Fragment>
        
        <div className="ui containerpage">
        <img className="ui bannerimage" src={donatepageimage} alt="not found"/>
        <img className="ui bannertextimage" src={donatebannertext} alt="not found"/>
        </div>
        <br></br>
        <div className="ui containergreypage">
        <p>The Donate Page Content </p>
        </div>
        </Fragment> 
         
     );
    }
}
export default Donate;