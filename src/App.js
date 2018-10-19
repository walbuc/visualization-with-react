import React, { Component } from "react";
import d3 from "d3";
import Alphabet from "./components/Alphabet";
import FancyText from "./components/FancyText";
import "./App.css";

class App extends Component {
  state = { text: "" };

  changeText(event) {
    this.setState({ text: event.target.value });
  }

  render() {
    return (
      <div className="container">
        <div calssName="row">
          <div calssName="col s12">
            <blockquote className="center">
              <h3>React and d3, a love story</h3>
            </blockquote>
          </div>
        </div>
         <div className="divider"></div>
        <div calssName="row">
          <div calssName="col s12">
            <p>
              This React + d3 visualization demonstrates how these two libraries
              can be combined together.
            </p>
            <p>
              Using lifecycles hooks provided by a lower label api we can
              manipulate the DOM with d3 using transitions and update react
              components state.
            </p>
            <p>
              In this example, we display a bunch of letters from a alphabet and
              we sorted each 1.5 sconds.
            </p>
            <p>
              We can see new entered componets colored with Green; updated
              components colored with red and exited componets colored with
              black before being unmonted.
            </p>
            <p>
              We use react and d3 as follows:
              <ul className="list">
                <li>D3 library for transitions and math.</li>
                <li>React to render and update SVG elements.</li>
                <li>
                  ReactTransitionGroup to get more lifecycle and be able to
                  implement transitions.
                </li>
                <li>
                  Replace d3 enter/update/exit pattern with lifecycle hooks.
                </li>
              </ul>
            </p>
          </div>
        </div>
        <svg width="100%" height="400px">
          <Alphabet />
        </svg>
      </div>
    );
  }
}

export default App;
