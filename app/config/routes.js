// Inclue the React library
var React = require("react");
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Include the react-router module
// var router = require("react-router");

// Include the Route component for displaying individual routes
// var Route = router.Route;

// Include the Router component to contain all our Routes
// Here where we can pass in some configuration as props
// var Router = router.Router;

// Include the browserHistory prop to handle routing client side without a server
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#browserHistory
// var browserHistory = router.browserHistory;

// Include the IndexRoute (catch-all route)
// var IndexRoute = router.IndexRoute;

// Reference the high-level components
var Main = require("../app/components/Main");
var Guest = require("../app/components/children/Guest");
var Modal = require("../app/components/children/Modal");
var Resources = require("../app/components/children/Resources");
var Track = require("../app/components/children/Track");
var Workout = require("../app/components/children/Workout");
var Login = require("../app/components/children/Login");

// Export the Routes
module.exports = (

  // The high level component is the Router component
  <Router history={browserHistory}>

    <Route path="/" component={Main}>
		<IndexRoute component ={Login} />
	    <Route path="guest" component={Guest} />
	    <Route path="modal" component={Modal} />
	    <Route path="resources" component={Resources} />
	    <Route path="track" component={Track} />
	    <Route path="workout" component={Workout} />
		<Route path="login" component={Login} />
	</Route>
  </Router>
);