import React from 'react';
import './App.css';
import Header from './components/headerComponent/Header';
import Home from './components/pages/Home';
import About from './components/pages/About';
import News from './components/pages/News';
import Programs from './components/pages/Programs';
import Supportus from './components/pages/Supportus';
import Contactus from './components/pages/Contactus';
import Footer from './components/footerComponent/Footer';
import Donate from './components/pages/Donate';
import Sponsors from './components/pages/Sponsors';
import{BrowserRouter as Router,Route} from 'react-router-dom';
class App extends React.Component{
    render() {
     return( 
    <Router>
       <div className="App">
       <Header/>
       <Route exact path='/'component={Home}/>
       <Route exact path='/About'component={About}/>
       <Route exact path='/News'component={News}/>
       <Route exact path='/Programs'component={Programs}/>
       <Route exact path='/Supportus'component={Supportus}/>
       <Route exact path='/Contactus'component={Contactus}/>
       <Route exact path='/Donate'component={Donate}/>
       <Route exact path='/Sponsors'component={Sponsors}/>
       <Footer/>
    </div>

    </Router>  
    
     );
    }
}
export default App;