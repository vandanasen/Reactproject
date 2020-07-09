import React,{Fragment} from 'react';
import homepageimage from '../images/homepageimage.png';
import rectangle758 from '../images/Rectangle-758.png';
import Systematicchange from '../systematicchangeComponent/Systematicchange';


class Home extends React.Component{
    render() {
     return(  
        <Fragment>
        <div className="ui containerpage">
            <img className="ui bannerimage" src={homepageimage} alt="not found"/>
        
        </div>
        <br></br>
        
        <div className="ui containergreypage">
            <p>Program Locations </p> 
            <img className="ui image" src={rectangle758} alt="not found"/>
        </div>
        
         <div className="ui cointainerpage">
         <Systematicchange/>
         </div>   
        
        
        
        
        
        </Fragment>
        

        
     );
    }
}
export default Home;