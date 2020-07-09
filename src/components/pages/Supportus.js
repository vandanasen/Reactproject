import React,{Fragment} from 'react';
import supportuspageimage from '../images/supportuspageimage.png';
import supportusbannertext from '../images/supportusbannertext.png';
class Supportus extends React.Component{
    render() {
     return(   
        <Fragment>
        
        <div className="ui containerpage">
        <img className="ui bannerimage" src={supportuspageimage} alt="not found"/>
        <img className="ui bannertextimage" src={supportusbannertext} alt="not found"/>
        </div>
        <br></br>
        <div className="ui containergreypage">
        <p>The Support Us Page content </p>
        </div>
        </Fragment>
        
     );
    }
}
export default Supportus;