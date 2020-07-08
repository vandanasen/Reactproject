import React,{Fragment} from 'react';
import homepageimage from '../images/homepageimage.png';
import Systematicchange from '../systematicchangeComponent/Systematicchange';


class Home extends React.Component{
    render() {
     return(  
        <Fragment>
       
        
       
        <div className="ui containerpage">
        <img className="ui center aligned bannerimage" src={homepageimage} alt="not found"/>
        
        <div>
        <div className="ui containergreypage">
        <div className="sub heading">
        Program Locations 
        </div>
            
        </div>
        
            
        <Systematicchange/>
        </div>
        
        
        </div>
        
        
        
        
        </Fragment>
        

        
     );
    }
}
export default Home;