import React from 'react';
import { connect } from 'react-redux';
import {
  submitContact,
  contactReset
} from './actions';
import Alert from '../common/Alert';

const ContactForm = ({
  onSubmit,
  onFailCheck,
  onReset,
  data,
  isLoading,
  error,
  response
}) => {
  return (
  <div className="contact-form">
    <h1>Contact Us</h1>
    <Alert message={response} hide={response === ''} type="success" />
    <Alert message={error} hide={error === ''} type="danger" />

    <form className="pure-form pure-form-stacked" onSubmit={onSubmit}>
      <fieldset>
        <label htmlFor="fullname">Name</label>
        <input type="text" className="form-control" id="fullname" name="fullname" placeholder="Full name" defaultValue={data.fullname} required />

        <label htmlFor="email">Email</label>
        <input type="email" className="form-control" id="email" name="email" placeholder="Email address" defaultValue={data.email} required />

        <label htmlFor="phone">Phone</label>
        <input type="text" className="form-control" id="phone" name="phone" placeholder="Phone number" defaultValue={data.phone} />

        <label htmlFor="message">Message</label>
        <textarea className="form-control" id="message" name="message" placeholder="Message" rows="6" defaultValue={data.message} required />

        <label htmlFor="fail">
          <input
            type="checkbox"
            name="fail"
            defaultChecked={data.fail}
          />
        Check this box to simulate a failed api response
        </label>

        <br />

        <input type="reset" className="button-standard pure-button" disabled={isLoading} value="Reset form" onClick={onReset} />
        <input type="submit" className="button-standard pure-button" disabled={isLoading} value="Submit message" />
      </fieldset>
    </form>
  </div>
)};

const mapStateToProps = (state) => (
  {
    isLoading: state.contact.isLoading,
    error: state.contact.error.status
      ? 'Sorry, there was an error submitting your message.'
      : '',
    data: state.contact.data,
    response: state.contact.response.status === 200
      ? 'Thank you for your contacting us!'
      : ''
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    onSubmit: e => {
      e.preventDefault();
      const data = {
        fullname: e.target.fullname.value,
        email: e.target.email.value,
        phone: e.target.phone.value,
        message: e.target.message.value,
        fail: e.target.fail.checked
      };
      dispatch(submitContact(data));
    },
    onReset: e => {
      dispatch(contactReset());
    }
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
