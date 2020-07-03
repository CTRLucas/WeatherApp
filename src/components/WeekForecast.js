import React from "react";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  CardActionArea,
} from "@material-ui/core";
import { Link } from "react-router-dom";
//Temperature
// Cloud
// Pressure
// Humidity
// Wind

class WeekForeCast extends React.Component {
  state = {
    weatherInfo: [],
  };
  componentDidMount() {
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=59&lon=18&exclude={part}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    )
      .then((res) => res.json())
      .then((result) => {
        const weatherInfo = result.daily.map((element) => {
          var d = new Date(element.dt * 1000);

          return {
            date: d,
            temperature: Math.round((element.temp.day - 273.15) * 10) / 10,
          };
        });
        weatherInfo.pop();
        this.setState({ weatherInfo });
      });
  }
  render() {
    return (
      <>
        <h1 style={{ textAlign: "center" }}>Stockholm</h1>
        <Grid container spacing={2}>
          <Grid item xs={12}></Grid>
          <Grid container justify="center" spacing={5}>
            {this.state.weatherInfo.map((value, index) => (
              <Grid key={index} item>
                <Card>
                  <CardActionArea
                    component={Link}
                    to={{
                      pathname: `daily/${value.date}`,
                      state: { date: value.date },
                    }}
                  >
                    <CardContent>
                      <Typography>
                        {value.date.toString().split(" ")[0]}
                      </Typography>

                      <Typography>{value.temperature}°</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </>
    );
  }
}

export default WeekForeCast;
