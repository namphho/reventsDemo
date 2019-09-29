import React, { Component } from "react";
import { connect } from "react-redux";
import { incrementCounter, decrementCounter } from "./testActions";
import { Button } from "semantic-ui-react";
import TestPlaceInput from "./TestPlaceInput";
import SimpleMap from "./SimpleMap";
import {geocodeByAddress,getLatLng,} from 'react-places-autocomplete';
import {openModal} from '../modals/modalActions';

const mapState = state => ({
  data: state.test.data
});

const actions = {
  incrementCounter,
  decrementCounter,
  openModal,
};

class TestComponent extends Component {
  state = {
    latlng : {
      lat: 10.789788,
      lng: 106.688746
    }
  }

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        this.setState({
          latlng: latLng
        })
      })
      .catch(error => console.error('Error', error));
  };

  render() {
    const { data, incrementCounter, decrementCounter, openModal } = this.props;
    return (
      <div>
        <h1>Test component</h1>
        <h3> this is answer: {data}</h3>
        <Button onClick={incrementCounter} positive content="increment" />
        <Button onClick={decrementCounter} negative content="increment" />
        <Button onClick={() => openModal("TestModal", {data: "Hoang Nam"})} color="teal" content="open modal" />
        <TestPlaceInput handleSelect={this.handleSelect}/>
        <SimpleMap key={this.state.latlng.lat} latlng={this.state.latlng} zoom={11}/>
      </div>
    );
  }
}
export default connect(
  mapState,
  actions
)(TestComponent);
