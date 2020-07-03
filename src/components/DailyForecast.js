import React from "react";
import "./DailyForecast.css";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import { ListItemSecondaryAction } from "@material-ui/core";

let date = "7/2/2020";
function kelvinToCelsius(degree) {
  return Math.round(degree - 273.15);
}

class DailyForecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = { country: null, city: null, weather: [], day: new Date() };
    this.renderItem = this.renderItem.bind(this);
  }

  renderItem(index) {
    let weather = this.state.weather;
    if (!weather || !this.state.city || !this.state.country) return null;
    let items = [];

    items.push(
      <ListSubheader>
        {this.state.country} {this.state.city}
        {/* date ska vara props */}
        {date}
      </ListSubheader>
    );

    for (let i = 0; i < weather.length; i++) {
      let time = new Date(weather[i].dt * 1000);
      items.push(
        <ListItem>
          <ListItemText
            primary={
              time.getHours() +
              ":00 " +
              kelvinToCelsius(weather[i].main.temp) +
              "°C"
            }
            secondary={
              "Humidity: " +
              weather[i].main.humidity +
              "% " +
              weather[i].weather[0].description
            }
          />
        </ListItem>
      );
    }
    return items;
  }

  componentDidMount() {
    console.log(this.props);
    fetch(
      "http://api.openweathermap.org/data/2.5/forecast?q=stockholm&appid=" +
        process.env.REACT_APP_WEATHER_API_KEY
    )
      .then((resp) => resp.json())
      .then((data) => {
        let w = data.list.map((x) => {
          if (x.dt_txt.split(" ")[0] == "2020-07-03") {
            return x;
          }
        });
        w = w.filter((stats) => stats);
        this.setState({
          weather: w,
          city: data.city.name,
          country: data.city.country,
        });
      })
      .catch(console.log);
  }

  render() {
    return (
      <div className="ListStyling">
        <List>{this.renderItem()}</List>
      </div>
    );
  }
}

export default DailyForecast;
