// Include React
var React = require("react");
var axios = require("axios");
import {browserHistory} from 'react-router';

// Here we include all of the sub-components


// Helper for making AJAX requests to our API
var API = require("./utils/API");

// Creating the Main component
var Main = React.createClass({

  getInitialState: function() {
    return { username: 'rwar' };
    this.setUser = this.setUser.bind(this);
  },

  setUser: function(user){
    console.log("user: " + user);
    var getUrl = "/api/users/" + user;
    axios.get(getUrl).then((res) => {
      console.log("set user");
      console.log(res);
      console.log("new id: " + res.data.id)
      this.setState({username: res.data.id});
    }).then(function(){
      browserHistory.push('/workout');
    })
    
  },

render: function() {
    var that = this;
    var children = React.Children.map(this.props.children, function(child) {
      return React.cloneElement(child, { username: that.state.username, setUser: that.setUser });
    });
    return(
      <div className= "mainContainer" style= {{backgroundColor: "#f1e9d2"}} >
        <div className="jumbotron" 
          style={{ backgroundColor: "black", 
          color: "#cc0000", 
          borderStyle: "solid", 
          borderWidth: 0,  
          textAlign: "Center",
          }}>
           <h1 style={{fontFamily: "New Rocker", fontStyle: "Cursive", fontSize: 70 }}>Slayer in Training </h1>
            <p className ="text-center" style = {{fontSize: 25, fontFamily: "fantasy", marginTop: 10}} > Better. Faster. Stronger. Outrun the demons. </p>             
        </div>
        <div style={{marginBottom: 40}}>
          {children} 
        </div>
            <div className="footer" style={{backgroundColor: "#4d4d4d", color: "#f1e9d2", borderStyle: "solid", borderWidth: 0,  textAlign: "Center",  position: "fixed", left: 0, bottom:0, right: 0}}>     
            &copy; The Scoobies: Leigh Fisher (<a style={{color: "#f1e9d2", textAlign: "Center"}} href="https://github.com/lafisher">Connect with Leigh</a>) | 
              Anita Ford (<a style={{color: "#f1e9d2", textAlign: "Center"}} href="https://afordfa.github.io/anitamford/portfolio.html">Connect with Anita</a>)<br/>
              <a style={{color: "#f1e9d2", textAlign: "Center"}} href = "https://github.com/afordfa/slayer_in_training">View Slayer in Training on Github</a>
            </div>
      </div>
    )
  }
});



// Export the component back for use in other files
module.exports = Main;
