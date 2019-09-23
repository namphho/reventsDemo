/*global google*/
import React, { Component } from "react";
import { Segment, Form, Button, Grid, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import {geocodeByAddress, getLatLng} from 'react-places-autocomplete';
import TextInput from "../../../app/common/form/TextInput";
import TextArea from "../../../app/common/form/TextArea";
import SelectInput from "../../../app/common/form/SelectInput";
import cuid from 'cuid';
import {createEvent, updateEvent} from '../../event/eventActions';
import {combineValidators, composeValidators, isRequired, hasLengthGreaterThan} from 'revalidate';
import DateInput from "../../../app/common/form/DateInput";
import PlaceInput from "../../../app/common/form/PlaceInput";

const mapState = (state, ownerProps) => {
  const eventId = ownerProps.match.params.id;
  let event = {};
  if (eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventId)[0];
  }
  return {
    initialValues: event
  };
};

const mapAction = {
  createEvent,
  updateEvent,
}

const category = [
    {key: 'drinks', text: 'Drinks', value: 'drinks'},
    {key: 'culture', text: 'Culture', value: 'culture'},
    {key: 'film', text: 'Film', value: 'film'},
    {key: 'food', text: 'Food', value: 'food'},
    {key: 'music', text: 'Music', value: 'music'},
    {key: 'travel', text: 'Travel', value: 'travel'},
];

const validate = combineValidators({
  title: isRequired({message: 'The event title is required'}),
  category: isRequired({message: 'The category is required'}),
  description: composeValidators(
    isRequired({message : 'Please enter a description'}),
    hasLengthGreaterThan(4)({message: 'Description needs to be at least 5 characters'})
  )(),
  city: isRequired('city'),
  venue: isRequired('venue'),
  date: isRequired('date')
})

class EventFrom extends Component {
  state ={
    cityLatLng: {}, //empty object
    venusLatlng: {}
  }
  onFormSubmit = values => {
    values.venueLatLng = this.state.venusLatlng;
    console.log(values);
    if (this.props.initialValues.id){
      this.props.updateEvent(values);
      this.props.history.push(`/events/${this.props.initialValues.id}`);
    }else {
      const newEvent = {
        ...values,
        id: cuid(),
        hostPhotoURL: '/assets/user.png',
        hostedBy: 'Nam'
      }
      this.props.createEvent(newEvent);
      this.props.history.push(`/events`);
    }
  };

  handleCitySelect = selectedCity => {
    geocodeByAddress(selectedCity)
    .then(results => getLatLng(results[0]))
    .then(latlng => {
      this.setState({
        cityLatLng: latlng
      })
    }).then(() => {
      this.props.change('city', selectedCity);
    })
  }

  handleVenueSelect = selectedVenue => {
    geocodeByAddress(selectedVenue)
    .then(results => getLatLng(results[0]))
    .then(latlng => {
      this.setState({
        venusLatlng: latlng
      })
    }).then(() => {
      this.props.change('venue', selectedVenue);
    })
  }


  render() {  
    const {history, initialValues, invalid, submitting, pristine} = this.props
    return (
      <Grid>
        <Grid.Column width={10}>
          <Segment>
          <Header sub color='teal' content='Event Details'/>
            <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)} autoComplete="off">
              <Field
                name="title"
                component={TextInput}
                placeholder="Give your name a event"
              />
              <Field
                name="category"
                component={SelectInput}
                options={category}
                placeholder="What is your event about?"
              />
              <Field
                name="description"
                component={TextArea}
                rows={3}
                placeholder="Tell us about your event"
              />
              <Header sub color='teal' content='Event Location Details'/>
              <Field
                name="city"
                component={PlaceInput}
                options={{types:['(cities)']}}
                onSelect={this.handleCitySelect}
                placeholder="Event City"
              />
              <Field
                name="venue"
                component={PlaceInput}
                options={{
                  location: new google.maps.LatLng(this.state.cityLatLng),
                  radius: 1000,
                  types:['establishment']
                }}
                onSelect={this.handleVenueSelect}
                placeholder="Event Venus"
              />
              <Field
                name="date"
                component={DateInput}
                dateFormat='dd LLL yyyy h:mm a'
                showTimeSelect
                timeFormat='HH:mm'
                placeholder="Event Date"
              />

              <Button disabled = {invalid || submitting || pristine } positive type="submit">
                Submit
              </Button>
              <Button type="button" onClick={initialValues.id ? () => history.push(`/events/${initialValues.id}`) : () => history.push(`/events`)}>
                Cancel
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}
export default connect(mapState, mapAction)(reduxForm({ form: "eventForm", validate })(EventFrom));
//name chính là key để map với value trong redux-form