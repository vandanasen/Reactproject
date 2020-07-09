import React,{Fragment} from 'react';
import newspageimage from '../images/newspageimage.png';
import newsbannertext from '../images/newsbannertext.png';


class News extends React.Component{
    render() {
     return(   
        <Fragment>
        
        <div className="ui containerpage">
        <img className="ui bannerimage" src={newspageimage} alt="not found"/>
        <img className="ui bannertextimage" src={newsbannertext} alt="not found"/>
        
        </div>
        <br></br>
        <div className="ui containergreypage">
        <p>The News Page content </p>
        </div>
        </Fragment>
        
     );
    }
}
export default News;