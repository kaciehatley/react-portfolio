import React, { Component } from 'react'
import {
  Button,
  Form,
  Input,
  TextArea,
  Segment,
  Header
} from 'semantic-ui-react'
import "./style.css"


class FormExampleFieldControl extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    return (
    <Segment id="contact">
    <Header as="h1">Let's Get In Touch!</Header>
      <Form>
        <Form.Group widths='equal'>
          <Form.Field
            control={Input}
            label='First name'
            placeholder='First name'
          />
          <Form.Field
            control={Input}
            label='Last name'
            placeholder='Last name'
          />
          <Form.Field
            control={Input}
            label='Email'
            placeholder='Email Adress'
          />
        </Form.Group>
        <Form.Field
          control={TextArea}
          label='Message'
          placeholder='Write message here...'
        />
        <Form.Field control={Button}>Submit</Form.Field>
      </Form>
    </Segment>
    )
  }
}

export default FormExampleFieldControl