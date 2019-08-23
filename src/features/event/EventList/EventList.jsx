import React, { Component, Fragment } from "react";
import EventListItem from "./EventListItem";

class EventList extends Component {
  render() {
    const {event, selectEvent} = this.props
    return (
      <Fragment>
        {event.map(event => {
           console.log(event.id) 
           return <EventListItem key={event.id} event={event} selectEvent = {selectEvent}/>
        })}
      </Fragment>
    );
  }
}

export default EventList;
