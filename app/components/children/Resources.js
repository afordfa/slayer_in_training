
// Include React
var React = require("react");
import {Link} from "react-router";

// Here we include all of the sub-components


// Helper for making AJAX requests to our API
var API = require("../utils/API");

// Creating the Guest component
var Resources = React.createClass({

// full app psuedocode
  // 1) on page load: a modal pops up (or separate page) with options to login or "guest slay" (first wire frame)
  // 2) click guest slay redirect to pre-written workout (3rd wire frame)
  // 3) click login redirect to google authentication
  // 4) google login is approved (or error message thrown)
  // 5) login approved: redirect to welcome slayer (second wire frame)
  // 6) if user chooses time, style and clicks "ready to slay"- workout is generated from database and displayed (3rd wire frame)
  // 7) if user chooses track redirect to tracker page (4th wire frame)
  // 8) add a button on each page (besides login) the reditects to a workout resources list (for now straight up weblinks, will complie ASAP)

  // Here we render the function
  // <div className="text-center" idName="subHeader"> <h3 idName="welcome">Welcome Guest Slayer!</h3> 
  //   Ready to train? 
  // </div>

  render: function() {
    return (

      <div className="resource-container">   
          <div idName= "links"> 
            <div className ="text-center">
              <h4 className="resource-header" style = {{fontFamily:"Fantasy", fontSize: 25}}> Alas, we don't have a Giles, but we do have the interwebs!</h4> 
              <p className="resource-header">Videos, articles, and inspiration for your training</p>
              <a rel="yoga_mobility" target="_blank" href="https://www.yogajournal.com/poses">Yoga Journal Pose Library</a> <br></br>
              <a rel="meditation" target="_blank" href="https://shambhala.org/what-is-meditation/">Meditation</a><br></br>
              <a target="_blank" href="https://www.youtube.com/watch?v=edOw-bA1Avs">Exercise terms (crossfit)</a><br></br>
              <a target="_blank" href="https://www.youtube.com/watch?v=2-6EPLtSLwU">How to do a Man Maker</a><br></br>
              <a href="https://www.youtube.com/watch?v=dZgVxmf6jkA">Burpees for Beginners</a><br></br>
              <a target="_blank" href="https://breakingmuscle.com/fitness/the-tabata-revolution-explained-what-why-and-how-to-tabata">What is a Tabata Interval?</a><br></br>
              <a target="_blank" href="https://www.youtube.com/watch?v=3aidNxd5Gr0">Tai Qi Arm Swings</a><br></br>
              <a target="_blank" href="http://running.competitor.com/2015/01/video/benefits-high-knee-running_120932">High Knees</a><br></br>  
              <a target="_blank" href="https://www.youtube.com/watch?v=t7wSm5E7cro">Modified Surrenders</a><br></br>  
              <a target="_blank" href="https://www.youtube.com/channel/UCSMYYXBtPj_Ze72-rCdyekACoach">Coach Tulin: Health and Fitness Motivator</a><br></br>   
              <a target="_blank" href="https://www.youtube.com/watch?v=KFufgg5A8gA">Mountain Climbers</a><br></br>  
        <p className ="text-center"style={ {padding: 10, margin: 10, backgroundColor: "black", color: "#cc0000", borderStyle: "solid", borderWidth: 0, borderRadius: 50}}> 
           Are you ready to reach your potential?<br></br>
             <Link to={"workout"}>
               <button className = "btn-danger" style={{margin: 10, borderRadius: 50 }}> Back to Workout</button>
             </Link>
          </p> 
              </div>
            </div>
      </div>

    );
  }
});

// Export the component back for use in other files
module.exports = Resources;