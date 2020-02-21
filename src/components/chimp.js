import React, { Component } from 'react';
// import the component
import Mailchimp from 'react-mailchimp-form'
 
class Chimp extends Component {
  render() {
    return (
        <Mailchimp
        action='https://gmail.us20.list-manage.com/subscribe/post?u=b8f43068da7806240dc69ef21&amp;id=acbc439766'
        fields={[
          {
            name: 'EMAIL',
            placeholder: 'Email',
            type: 'email',
            required: true,
          },
          {
            name: 'FNAME',
            placeholder: 'Name',
            type: 'text',
            required: true,
          },
          {
            name: 'SU_NAME',
            placeholder: 'Company Name',
            type: 'text',
            required: true,
          },
          {
            name: 'TEN_WORDS',
            placeholder: 'Describe your startup in one sentence',
            type: 'text',
            required: true,
          },
          {
            name: 'SOCIAL',
            placeholder: 'How do we follow you?',
            type: 'text',
            required: true,
          },
          {
            name: 'WEBSITE',
            placeholder: 'What is your website or landing page?',
            type: 'text',
            required: true,
          },
        ]}
        className="get-started"
        />
    );
  }
}
 
export default Chimp;