import React, { Component } from "react";
import { connect } from "react-redux";
import { incrementAsync, decrementAsync } from "./testActions";
import { Button } from "semantic-ui-react";
import TestPlaceInput from "./TestPlaceInput";
import SimpleMap from "./SimpleMap";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { openModal } from "../modals/modalActions";
import { toastr } from "react-redux-toastr";

const mapState = state => ({
  data: state.test.data,
  loading: state.async.loading,
  buttonName: state.async.elementName
});

const actions = {
  incrementAsync,
  decrementAsync,
  openModal
};


class TestComponent extends Component {
  state = {
    latlng: {
      lat: 10.789788,
      lng: 106.688746
    }
  };

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        this.setState({
          latlng: latLng
        });
      })
      .catch(error => console.error("Error", error));
  };

  render() {
    const {
      data,
      incrementAsync,
      decrementAsync,
      openModal,
      loading,
      buttonName
    } = this.props;
    return (
      <div>
        <h1>Test component</h1>
        <h3> this is answer: {data}</h3>
        <Button
          name="increment"
          loading={buttonName === 'increment' && loading}
          onClick={(e) => incrementAsync(e.target.name)}
          positive
          content="increment"
        />
        <Button
          name="decrement"
          loading={buttonName === 'decrement' && loading}
          onClick={(e) => decrementAsync(e.target.name)}
          negative
          content="decrement"
        />
        <Button
          onClick={() => openModal("TestModal", { data: "Hoang Nam" })}
          color="teal"
          content="open modal"
        />
        <Button
          onClick={() => toastr.success('ok', 'description')}
          color="teal"
          content="Open Toasts 1"
        />
        <Button
          onClick={() => toastr.message('Title', 'Message')}
          color="teal"
          content="Open Toasts 2"
        />
        <TestPlaceInput handleSelect={this.handleSelect} />
        <SimpleMap
          key={this.state.latlng.lat}
          latlng={this.state.latlng}
          zoom={11}
        />
      </div>
    );
  }
}
export default connect(
  mapState,
  actions
)(TestComponent);
