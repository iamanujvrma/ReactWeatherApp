var React = require('react');
/*
var WeatherMessage = React.createClass({
  render: function() {
    var {temp, location} = this.props;
    return (
        <h1>It's {temp} in {location}</h1>
    );
  }
});
*/

var WeatherMessage = ({temp, location}) => {
  return (
      <h1>It's {temp} in {location}</h1>
  );
}
module.exports = WeatherMessage;
