import React, { Component } from "react";
import { Segment, Form, Button } from "semantic-ui-react";

class EventFrom extends Component {
  state = {
    title: 'abc dat de di ',
    date: '',
    city: '',
    venue: '',
    hosted: ''
  }

  handleFormSubmit = (evt) => {
    evt.preventDefault();
    this.props.createEvent(this.state)
  }

  // handleInputChange = (evt) => {
  //   this.setState({
  //     [evt.target.name]: evt.target.value
  //   })
  // }

  //destructure event
  handleInputChange = ({target: {name, value}}) => {
    this.setState({
      [name]: value
    })
  }



  render() {
    const {cancelFormOpen} = this.props;
    const {title} = this.state;
    return (
      <Segment>
        <Form onSubmit={this.handleFormSubmit} autoComplete='off'>
          <Form.Field>
            <label>Event Title</label>
            <input name="title" onChange={this.handleInputChange} value={title} placeholder="Event Title" />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input name="date" onChange={this.handleInputChange} type="date" placeholder="Event Date" />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input name="city" onChange={this.handleInputChange} placeholder="City event is taking place" />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input name="venue" onChange={this.handleInputChange} placeholder="Enter the Venue of the event" />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input name="hosted" onChange={this.handleInputChange} placeholder="Enter the name of person hosting" />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button type="button" onClick={cancelFormOpen}>Cancel</Button>
        </Form>
      </Segment>
    );
  }
}
export default EventFrom;
