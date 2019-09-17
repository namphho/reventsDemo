import React, { Component } from "react";
import { Grid} from "semantic-ui-react";
import EventList from "../EventList/EventList";
import cuid from "cuid";
import { connect} from 'react-redux';
import {createEvent, updateEvent, deleteEvent} from '../eventActions';


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



  handleCreateEvent = newEvent => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = "/assets/user.png";
    this.props.createEvent(newEvent);
  };



  handleUpdateEvent = (updatedEvent) => {
    this.props.updateEvent(updatedEvent)
  }

  handleDeleteEvent = (id) => {
    this.props.deleteEvent(id);
  }


  render() {
const {events} = this.props;
    return (
      <div>
        <Grid>
          <Grid.Column width={10}>
            <EventList event={events}
                       deleteEvent = {this.handleDeleteEvent} />
          </Grid.Column>
          <Grid.Column width={6}>
            <h2>Activity Feed</h2>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default connect(mapStateToProps, actions)(EventDashboard);
