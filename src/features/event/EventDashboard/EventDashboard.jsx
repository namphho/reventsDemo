import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import EventList from "../EventList/EventList";

class EventDashboard extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Grid.Column width={10} color="blue">
            <EventList/>
          </Grid.Column>
          <Grid.Column width={6} color="red">
            <h2>right column</h2>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default EventDashboard;
