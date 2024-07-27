import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

export default function Contact() {
  // todo : make inputs controlled component
  // todo : handle submit

  //! added this part after the lesson.
  //? common state to make inputs controlled
  const [formValues, setFormValues] = useState({
    username: '',
    email: '',
    message: '',
  });

  //? common handler to update related field in state for the inputs
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
                /*  first we get all the keys inside the obj (username,email,message)than  we change just one part it can be any one of them .
                (dynamic change[key]: value)*/
  };

  const handleSubmit = (e) => {
    e.preventDefault();          /* whenn submit it will apear an message */
    alert(`Thank you ${formValues.username} , Your message has been sent !`);
  };

  return (
    <div>
      <h1 className="text-center">CONTACT FORM</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="username">Username</Form.Label>
          <Form.Control
            name="username"
            id="username"
            placeholder="john doe"
            //! added value and onChange functionality
            value={formValues.username}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            name="email"
            id="email"
            placeholder="john@email.com"
            value={formValues.email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="message">Message</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            id="message"
            placeholder="Enter your message here"
            value={formValues.message}
            onChange={handleChange}
          />
        </Form.Group>

        <div className="text-center">
          <Button variant="success" type="submit">
            SUBMIT
          </Button>
        </div>
      </Form>
    </div>
  );
}