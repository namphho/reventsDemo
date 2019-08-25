import React, { Component } from "react";
import { Button, Segment, List, Icon, Item } from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";

class EventListItem extends Component {
  render() {
    const { event, selectEvent, deleteEvent } = this.props;
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" circular src={event.hostPhotoURL} />
              <Item.Content>
                <Item.Header>{event.title}</Item.Header>
                <Item.Description>
                  Hosted by <a>{event.hostedBy}</a>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" color="black" /> {event.date} |
            <Icon name="marker" color="black" /> {event.venue}
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
            {event.attendees &&
              event.attendees.map(person => {
                return (
                  <EventListAttendee
                    key={person.id}
                    attendees={person}
                    data={123}
                  />
                );
              })}
          </List>
        </Segment>
        <Segment clearing>
          {event.description}
          <Button
            as="a"
            onClick={() => deleteEvent(event.id)}
            color="red"
            floated="right"
            content="delete"
          />
          <Button
            as="a"
            onClick={() => selectEvent(event)}
            color="teal"
            floated="right"
            content="View"
          />
        </Segment>
      </Segment.Group>
    );
  }
}

export default EventListItem;

// onClick={() => selectEvent(event)} => dont call selectEvent when UI is renderd
