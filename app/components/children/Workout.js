// Include React
var React = require("react");
var axios = require("axios");
import {Link} from "react-router";
var Timer = require("./workout/Timer.js");

// Here we include all of the sub-components


// Helper for making AJAX requests to our API

var Details = require("./workout/Details")

// Creating the Main component
var Workout = React.createClass({

// psuedocode
  // 1) on page load: a modal pops up (or separate page) with options to login or "guest slay" (first wire frame)
  // 2) click guest slay redirect to pre-written workout (3rd wire frame)
  // 3) click login redirect to google authentication
  // 4) google login is approved (or error message thrown)
  // 5) login approved: redirect to welcome slayer (second wire frame)
  // 6) if user chooses time, style and clicks "ready to slay"- workout is generated from database and displayed (3rd wire frame)
  // 7) if user chooses track redirect to tracker page (4th wire frame)
  // 8) add a button on each page (besides login) the reditects to a workout resources list (for now straight up weblinks, will complie ASAP)

  // Here we render the function
  getInitialState: function() {
    return { selection: "15m", time: 15, type: "Mobility", exercises: [], workout: []};
  },
  handleChange(event) {
    var newState = {};
    newState[event.target.id] = event.target.value;
    switch(event.target.value) {
      case "15m":
        newState["time"] = 15;
        newState["type"] = "Mobility"
        break
      case "30m":
        newState["time"] = 30;
        newState["type"] = "Mobility"
        break        
      case "15s":
        newState["time"] = 15;
        newState["type"] = "Strength"
        break        
      case "30s":
        newState["time"] = 30;
        newState["type"] = "Strength"
        break        
      case "30e":
        newState["time"] = 30;
        newState["type"] = "Endurance"
        break        
      case "45e":
        newState["time"] = 45;
        newState["type"] = "Endurance"
        break        
      case "60b":
        newState["time"] = 55;
        newState["type"] = "Buffy"
        break        
    }
    this.setState(newState);
  },
  handleStart: function() {
    this.getWorkout();
  },
  getWorkout: function() {
    var url = "/api/exercises/tag/" + this.state.type;
    axios.get(url).then((res) => {
      this.setState({ exercises: res.data });
      this.buildWorkout(res.data);
    });
  },
  buildWorkout: function(exercises) {
      var temporaryWorkout = exercises;
      var currentIndex = temporaryWorkout.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = temporaryWorkout[currentIndex];
        temporaryWorkout[currentIndex] = temporaryWorkout[randomIndex];
        temporaryWorkout[randomIndex] = temporaryValue;
      }
      var workoutBuild = [];
      var countTime = 0;
      var startIndex = Math.floor(Math.random() * (temporaryWorkout.length-4));
      while (countTime < this.state.time) {
        for (var i = startIndex; countTime < this.state.time; i++) {
          if (countTime + temporaryWorkout[i].minutes <= this.state.time) {
            workoutBuild.push(temporaryWorkout[i]);
            countTime += temporaryWorkout[i].minutes;
          }   
          if (i == (temporaryWorkout.length - 1)) {
            i = 0;
          }       
        }
      }
      this.setState({workout: workoutBuild}) 
  },
  render: function() {
    return (

      <div style={{paddingBottom: 60}}>
        <div className="text-center" idName="subHeader"> <h3 idName="welcome" style = {{fontFamily:"Jolly Lodger", fontSize:45, color: "#800000"}} >Welcome SLAYER!</h3> 
        </div> 
           <div className="text-center"> 

               {/*Link to the workout details*/}
                 <Details workout= {this.state.workout} />
        
           </div>        
        <div idName = "howLong"><p className ="text-center"> Ready to train? &nbsp;
          <select 
            name="workouts"
            value={this.state.selection}
            id="selection"
            onChange={this.handleChange} 

          >
                <option value="15m" time="15" type="Mobility">15 Minutes Mobility</option>
                <option value="30m" time="30" type="Mobility">30 Minutes Mobility</option>
                <option value="15s" time="15" type="Strength">15 Minutes Strength</option>
                <option value="30s" time="30" type="Strength">30 Minutes Strength</option>
                <option value="30e" time="30" type="Endurance">30 Minutes Endurance</option>
                <option value="45e" time="45" type="Endurance">45 Minutes Endurance</option>
                <option value="60b" time="60" type="Buffy">60 Minutes Full Buffy</option>
              </select>
            <button className = "btn-danger" onClick={this.handleStart} style={{margin: 10, borderRadius: 50 }}> Ready. Set. Slay!</button> 
                        
              </p></div>

     
        <div idName= "track"> </div> 
              
{/*timer from timer and clock*/}
              <div className>
                <p>
                  <Timer/>
                </p>
              </div>
        <p className ="text-center">

          <Link to={"track"}> 
            <button className = "btn-danger" style={{margin: 10, borderRadius: 50 }}> Track Progress</button>
          </Link>  
        </p>   
          <p className ="text-center"style={ {padding: 10, margin: 10, backgroundColor: "black", color: "#cc0000", borderStyle: "solid", borderWidth: 0, borderRadius: 50}}> 
           What the hellmouth is a Mountain Climber? Not to worry potential Slayer! <br></br>
           We've compiled links to tutorials for you. You'll be apocolypse ready in no time!  <br></br>
             <Link to={"resources"}>
               <button className = "btn-danger" style={{margin: 10, borderRadius: 50}}> Workout Resources</button>
             </Link>
          </p>          
      </div>

    );
  }
});

// Export the component back for use in other files
module.exports = Workout;
