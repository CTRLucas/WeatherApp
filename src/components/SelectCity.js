import React from "react";
import { Input, Button } from "@material-ui/core";
class SelectCity extends React.Component {
  state = {
    city: "",
  };
  onChange = (event) => {
    this.setState({ city: event.target.value });
    console.log(this.state.city);
  };
  lookUp = () => {};
  render() {
    return (
      <div
        style={{
          display: "flex",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Input
          type="text"
          value={this.state.city}
          onChange={this.onChange}
          placeholder="City"
        />
        <Button color="primary" onClick={this.lookUp}>
          Look up
        </Button>
      </div>
    );
  }
}
export default SelectCity;
