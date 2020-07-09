import React,{Fragment} from 'react';
import programspageimage from '../images/programspageimage.png';
import programbannertext from '../images/programbannertext.png';

class Programs extends React.Component{
    render() {
     return(   
        <Fragment>
        
        <div className="ui containerpage">
        <img className="ui bannerimage" src={programspageimage} alt="not found"/>
        <img className="ui bannertextimage" src={programbannertext} alt="not found"/>
        </div>
        <br></br>
        <div className="ui containergreypage">
        <p>The Programs Page content </p>
        </div>
        </Fragment>
     );
    }
}
export default Programs;