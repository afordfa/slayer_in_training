// Include React
var React = require("react");
var axios = require("axios");


var Details = React.createClass({


  getInitialState: function() {
    return { };
  },
  renderList: function() {
    // Getting an array of only purchased items
    const list = this.props.workout;

    return list.map(item => (
        <tr className= "text-center">
          <td>{item.title} &nbsp;</td>
          <td>{item.minutes} &nbsp; minutes</td>
        </tr>
      ));
  },

  
  render: function() {
    // this.buildWorkout();
    return (
      <div style= {{display: "inline-block"}}>
        <table>
          <thead>
            <tr>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.renderList()}
          </tbody>
        </table>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Details;