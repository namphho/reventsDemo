import React, { Component } from "react";
import { connect } from "react-redux";
import { incrementCounter, decrementCounter } from "./testActions";
import { Button } from "semantic-ui-react";
import TestPlaceInput from "./TestPlaceInput";

const mapState = state => ({
  data: state.test.data
});

const actions = {
  incrementCounter,
  decrementCounter
};

class TestComponent extends Component {
  render() {
    const { data, incrementCounter, decrementCounter } = this.props;
    return (
      <div>
        <h1>Test component</h1>
        <h3> this is answer: {data}</h3>
        <Button onClick={incrementCounter} positive content="increment" />
        <Button onClick={decrementCounter} negative content="increment" />
        <TestPlaceInput />
      </div>
    );
  }
}
export default connect(
  mapState,
  actions
)(TestComponent);
