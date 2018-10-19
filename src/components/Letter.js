import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as d3 from "d3";

const ExitColor = "black";
const UpdateColor = "red";
const EnterColor = "green";

class letter extends Component {
  state = {
    y: -60,
    x: 0,
    color: EnterColor,
    fillOpacity: 1
  };
  //when a compoenent is added.
  componentWillEnter(callback) {
    const node = d3.select(ReactDOM.findDOMNode(this));
    this.setState({ x: this.props.i * 60 });

    node
      .transition(this.props.transition)
      .attr("y", 0)
      .style("fill-opacity", 1)
      .on("end", () => {
        this.setState({ y: 0, fillOpacity: 1, color: EnterColor });
        callback();
      });
  }

  //called just the first time
    componentWillAppear(callback) {
      const node = d3.select(ReactDOM.findDOMNode(this));
      this.setState({ x: this.props.i * 60 });

      node
        .transition(this.props.transition)
        .attr("y", 0)
        .style("fill-opacity", 1)
        .on("end", () => {
          this.setState({ y: 0, fillOpacity: 1, color: EnterColor });
          callback();
        });
    }

  componentWillLeave(callback) {
    const node = d3.select(ReactDOM.findDOMNode(this));
    this.setState({ color: ExitColor });

    node
      .interrupt()
      .transition(this.transition)
      .attr("y", 60)
      .style("fill-opacity", 1e-6)
      .on("end", () => {
        this.setState({ y: 60, fillOpacity: 0 });
        callback();
      });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.i != this.props.i) {
      const node = d3.select(ReactDOM.findDOMNode(this));
      this.setState({ color: UpdateColor });
      node
        .transition(this.transition)
        .attr("x", this.props.i * 60)
        .on("end", () => this.setState({ x: this.props.i * 60 }));
    }
  }

  render() {

    return (
      <text
        dy=".35em"
        y={this.state.y}
        x={this.state.x}
        style={{
          fillOpacity: this.state.fillOpacity,
          fill: this.state.color,
          font: "bold 48px Roboto"
        }}
      >
        {this.props.letter}
      </text>
    );
  }
}

export default letter;
