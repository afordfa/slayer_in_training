var React = require('react');
var ReactTable = require('react-table').default
var API = require("../../utils/API");
var axios = require("axios");

// react-table documentation
// https://www.npmjs.com/package/react-table

var Times = React.createClass({
  getInitialState: function() {
    return {  };
    
  },


  render: function() {
    var data = [];
    for (var i = 0; i < this.props.passTimes.length; i++) {
      var month = this.props.passTimes[i].date.substr(5, 2);
      var day = this.props.passTimes[i].date.substr(8, 2);
      var year = this.props.passTimes[i].date.substr(0, 4);
      var formattedDate = month + "/" + day + "/" + year;
      var minutes = ('0' + this.props.passTimes[i].minutes).slice(-2);
      var seconds = ('0' + this.props.passTimes[i].seconds).slice(-2);
      var formattedTime = minutes + ":" + seconds;
      
      data.push({date: formattedDate, distance: this.props.passTimes[i].distance, time: formattedTime});
    }
   
    const columns = [{
      Header: 'Date',
      accessor: 'date', 
      filterable: false
    }, {
      Header: 'Distance',
      accessor: 'distance',
    }, {
      Header: 'Time',
      accessor: 'time',
      filterable: false
    }
    ] 
   return (
    <ReactTable
      data={data}
      columns={columns}
      className="-striped"
      defaultPageSize={10}
      filterable = "true"
    />)
  }
})
// Export the component back for use in other files
module.exports = Times;