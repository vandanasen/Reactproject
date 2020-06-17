import React, {Fragment} from 'react';
import fundscholarshipicon from '../images/fund-scholarship-icon.png';
import sponsorshipicon from '../images/sponsorship-icon.png';
import donateicon from '../images/donate-icon.png';
import rectangle758 from '../images/Rectangle-758.png';
class Systematicchange extends React.Component{
    render() {
     return(   
    

        
    <Fragment>

    
    
    
    <div className="ui containergreypage" >
    <h3 className="ui header">Be A part of Systematic Change</h3>
    <img className="ui image" src={rectangle758} alt="not found"/>
    
    <div className="ui three column grid">
  <div className="column">
    <div className="ui card">
    <img className="ui small circular image" src={fundscholarshipicon} alt="not found"/>
    
      <div className="content">
        <a href="https://www.we-connect-the-dots.org/" className="header">
        <button className="ui button" > Fund Scholarship
        </button>
        </a>
      </div>
    </div>
  </div>
  <div className="column">
    <div className="ui card">
    <img className="ui small circular image" src={sponsorshipicon} alt="not found"/>
    
      <div className="content">
        <a href="https://www.we-connect-the-dots.org/" className="header">
        <button className="ui button" > Sponsor
        </button>
        </a>
      </div>
    </div>
  </div>
  <div className="column">
    <div className="ui card">
    <img className="ui small circular image" src={donateicon} alt="not found"/>
      <div className="content">
        <a  href="https://www.we-connect-the-dots.org/" className="header">
        <button className="ui button" > Donate
        </button>
        </a>
      </div>
    </div>
  </div>
</div>

    </div>

    
    
  


    
    
  

    </Fragment>
   
    
     );
    }
}
export default Systematicchange;