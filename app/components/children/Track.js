// Include React
var React = require("react");

// Here we include all of the sub-components
var Times = require("./track/Times.js");
var DatePicker = require("react-bootstrap-date-picker");
var axios = require("axios");
import {Link} from "react-router";



var Track = React.createClass({
  getInitialState: function() {
    var value = new Date().toISOString();
    return { times: [], distance: "1 mile", minutes: 0, seconds: 0, value: value, user: 0 };
    this.getTimes = this.getTimes.bind(this);
  },


  handleChange: function(event) {
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  },

  handleDateChange: function(value, formattedValue) {
    this.setState({
      value: value, // ISO String, ex: "2016-11-19T12:00:00.000Z" 
      formattedValue: formattedValue // Formatted String, ex: "11/19/2016" 
    });
  },

  componentDidMount: function(){
    this.getTimes();

  },

  componentDidUpdate: function(){
    // Access ISO String and formatted values from the DOM. 
    var hiddenInputElement = document.getElementById("example-datepicker");
    var getUrl = "/api/users/" + this.props.id;
  },
  handleAdd: function(){

    var data = {
      date: this.state.value,
      distance: this.state.distance,
      minutes: parseInt(this.state.minutes),
      seconds: parseInt(this.state.seconds),
      UserId: this.props.username
    }
    var url = "/api/tracker/" + data.UserId;
    axios.post(url,  data )
    this.getTimes();
  },

  getTimes: function() {
    var trackUrl = "api/tracker/" + this.props.username;
    axios.get(trackUrl).then((res) => {
      this.setState({ times: res.data });
      console.log(res.data);
    });
  },

  render: function() {
    return (
      <div>
      <div className = "text-center" > 
        <div idName=  "distance" style ={{textAlign: "center" }}> 
          <form style={{ textAlign: "center" }} >

            <div className="form-group" style ={{textAlign: "center", display: "inline-block" }}>
              <h4 className="" style={{display: "inline-block"}}>
                Date
                  <DatePicker id="example-datepicker" style={{display: "inline-block", width: 300, float: "none" }} value={this.state.value} onChange={this.handleDateChange} />
              </h4>
              <div><h4 className="">
                <strong>Track a workout or a run</strong> &nbsp;
              
                <select 
                name="distance"
                value={this.state.distance}
                id="distance"
                onChange={this.handleChange}
                >
                  <option value="Slay">Slay</option>
                  <option value="0.5 miles"> 0.5 miles</option>
                  <option value="1 mile">1 mile</option>
                  <option value="2 miles">2 miles</option>
                  <option value="5K">5K</option>
                  <option value="4 miles">4 miles</option>
                  <option value="5 miles">5 miles</option>
                  <option value="6 miles">6 miles</option>
                  <option value="10K">10K</option>
                  <option value="7 miles">7 miles</option>
                  <option value="8 miles">8 miles</option>
                  <option value="9 miles">9 miles</option>
                  <option value="10 miles">10 miles</option>
                  <option value="11 miles">11 miles</option>
                  <option value="12 miles">12 miles</option>
                  <option value="13.1 miles">13.1 miles (Half Marathon)</option>                  
                </select> </h4>
              </div>   
            </div>
          </form>       
        </div>

         
          <form>
          {/*I HAVE NO IDEA HOW TO GET THESE TO APPEAR SIDE-BY-SIDE!!! */}
            <div> <h4 className="" style={{display: "inline-block"}}>
              <strong>Minutes </strong>
              <input
              type="number"
              min="1"
              value={this.state.minutes}
              className="form-control"
              id="minutes"
              onChange={this.handleChange}
              required
              style={{width: 300, textAlign: "center", float: "none", display: "inline-block"}}
            /> </h4> 

            <h4 className="" style={{marginLeft: 20, display: "inline-block"}}>
              <strong>Seconds  </strong>
            </h4>
            <input
              type="number"
              min="0"
              max="59"
              value={this.state.seconds}
              className="form-control"
              id="seconds"
              onChange={this.handleChange}
              required
              style={{marginLeft: 5, width: 300, textAlign: "center", float: "none", display: "inline-block" }}
            />
            </div>
          </form>
         </div> 
        
        <div>
          <p className ="text-center">
            <button className = "btn-danger" onClick={this.handleAdd} style={{margin: 10, borderRadius: 50 }}> 
              Track 
            </button> 
            
              <Link to={"workout"}><button className = "btn-danger" style={{margin: 10, borderRadius: 50 }}> Back to Workout </button></Link>  
          </p>
        </div>

        <div className ="text-center times-table"> 
          {/*Here we bring in the child-element to render the table of times*/}
          <Times  passTimes= {this.state.times}/>
        </div>
      
        <p className ="text-center"style={ {padding: 10, margin: 10, backgroundColor: "black", color: "red", borderStyle: "solid", borderWidth: 0, borderRadius: 50}}> 
           What the hellmouth is a Mountain Climber? Not to worry potential Slayer! <br></br>
           We've compiled links to tutorials for you. You'll be apocolypse ready in no time!  <br></br>
             <Link to={"resources"}>
               <button className = "btn-danger" style={{margin: 10, borderRadius: 50 }}> Workout Resources</button>
             </Link>
          </p>           
      </div>
    );
  }
});


// Export the component back for use in other files
module.exports = Track;
