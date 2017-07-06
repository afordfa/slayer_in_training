// Include React
var React = require("react");


var Clock = React.createClass({


  getInitialState: function() {
    return { time: 0, stopTime: this.props.seconds, time: 0 };
  },

  handleStart: function() {
    console.log("props type: " + this.props.timerType);
    clearInterval(this.timer);
    var newStop = this.props.seconds;
    this.setState({stopTime: newStop});
    if (this.props.timerType == "run") {
      this.setState({stopTime: 0 });
      this.timer = setInterval(this.tickUp, 1000);
    } else {
    this.timer = setInterval(this.tickDown, 1000)
    }
  },



  handleStop: function() {
    console.log("test");
    clearInterval(this.timer);
  },


  tickUp: function () {
    //this is set to count by 10's for testing. Uncomment the next line to count by 1's 
    //var changeTime = this.state.stopTime + 10
     var changeTime = ++this.state.stopTime;
    this.setState({stopTime: changeTime });
    console.log(this.state.stopTime); 
       

  },


  tickDown: function () {
    if(this.state.stopTime > 0) {
      //this is set to count by 10's for testing. Uncomment the next line to count by 1's 
      //var changeTime = this.state.stopTime - 10;
       var changeTime = --this.state.stopTime
      this.setState({stopTime: changeTime });
    } else if (this.props.timerType == "amrp") {
      var audio = new Audio('sounds/churchBell.wav');
      audio.play(); 
      clearInterval(this.timer);
    } else if (this.props.timerType == "meditate") {
      var audio = new Audio('sounds/chime2.wav');
      audio.play(); 
      clearInterval(this.timer);
    } else {
      var audio = new Audio('sounds/birds1.wav');
      audio.play(); 
      clearInterval(this.timer);      
    }      
  },



  convert: function (seconds) {
    let minutes = Math.floor(seconds / 60)
    let sec = seconds % 60
    minutes = minutes < 10 ? `0${minutes}` : `${minutes}`
    sec = sec < 10 ? `0${sec}` : `${sec}`
    return `${minutes}:${sec}`
  }, 

  
  render: function() {
    return (
      <div>
        <span className ="text-center">
          <button className = "btn-danger" onClick={this.handleStart} style={{margin: 5, borderRadius: 50 }}
          > 
            Start
          </button> 
          <button className = "btn-danger" onClick={this.handleStop} style={{margin: 5, borderRadius: 50 }}
          > 
            Stop
          </button> 
        </span>
        <div>
           <span>{this.convert(this.state.stopTime)}</span>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Clock;