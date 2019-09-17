import React, { Component } from "react";
import { Button, Segment, List, Icon, Item } from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";
import { Link } from "react-router-dom";
import { format } from "date-fns";

class EventListItem extends Component {
  render() {
    const { event, deleteEvent } = this.props;
    console.log(event);
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" circular src={event.hostPhotoURL} />
              <Item.Content>
                <Item.Header>{event.title}</Item.Header>
                <Item.Description>
                  Hosted by <a href="foo">{event.hostedBy}</a>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" color="black" />
            {event.date instanceof Date
              ? ` ${format(event.date.toDate(), "EEEE do LLLL")} at ${format(
                  event.date.toDate(),
                  "h:mm a"
                )}`
              : `${event.date}`}
            |
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
            as={Link}
            to={`/events/${event.id}`}
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
