import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import EventList from "../EventList/EventList";
import EventFrom from "../EventForm/EventFrom";
import cuid from "cuid";
import { connect} from 'react-redux';
import {createEvent, updateEvent, deleteEvent} from '../eventActions';
import { thisExpression } from "@babel/types";

//setup reducers 
const mapStateToProps = (state) => ({
  events : state.events
})

const actions = {
  createEvent,
  updateEvent,
  deleteEvent
} 


class EventDashboard extends Component {
  state = {
    isOpen: false,
    selectedEvent: null
  };

  // handleIsOpenToggle = () => {
  //   this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  // };

  handleCreateFormOpen = () => {
    this.setState({
      isOpen : true,
      selectedEvent: null
    })
  }

  handleFormCancel = () => {
    this.setState({
      isOpen : false,
    })
  }

  handleCreateEvent = newEvent => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = "/assets/user.png";
    this.props.createEvent(newEvent);
    this.setState(({ events }) => ({
      isOpen: false
    }));
  };

  handleSelectEvent = (event) => {
    this.setState({
      selectedEvent: event,
      isOpen: true
    })
  }

  handleUpdateEvent = (updatedEvent) => {
    this.props.updateEvent(updatedEvent)
    this.setState(({events}) => ({
      isOpen: false,
      selectedEvent: null
    }))
  }

  handleDeleteEvent = (id) => {
    this.props.deleteEvent(id);
  }


  render() {
    const {isOpen, selectedEvent } = this.state;
    const {events} = this.props;
    return (
      <div>
        <Grid>
          <Grid.Column width={10}>
            <EventList event={events}
                       selectEvent = {this.handleSelectEvent}
                       deleteEvent = {this.handleDeleteEvent} />
          </Grid.Column>
          <Grid.Column width={6}>
            <Button
              onClick={this.handleCreateFormOpen}
              positive
              content="Create Event"
            />
            {isOpen && (
              <EventFrom
                key = {selectedEvent ? selectedEvent.id : 0}
                updateEvent = {this.handleUpdateEvent}
                selectedEvent = {selectedEvent}
                createEvent={this.handleCreateEvent}
                cancelFormOpen={this.handleFormCancel}
              />
            )}
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default connect(mapStateToProps, actions)(EventDashboard);
