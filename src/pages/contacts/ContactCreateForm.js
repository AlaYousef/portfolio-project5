import { React,useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import styles from "../../styles/ContactCreateForm.module.css";

import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/useRedirect";
import { NotificationManager } from 'react-notifications';


const ContactCreateForm = () => {
  // Using the useRedirect hook to redirect if the user is logged out
  useRedirect("loggedOut");

  // Setting the initial state of the errors object to an empty object
  const [errors, setErrors] = useState({});

  // Setting the initial state of the contactData object with empty strings for subject and message
  const [contactData, setContactData] = useState({
    subject: "",
    message: "",
  });
  const { subject, message } = contactData;

  const history = useHistory();

  // Handling input changes and updating the formData object
  const handleChange = (event) => {
    setContactData({
      ...contactData,
      [event.target.name]: event.target.value,
    });
  };

  // Handling the form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("subject", subject);
    formData.append("message", message);
    

    try {
      await axiosReq.post("/contacts/", formData);
      NotificationManager.success(
        "Thank you, your message has been recieved and you will contact you by email ",
        "Success!", 3000
      );
      history.push("/");
      
    } catch (err) {
      //console.log(err);
        setErrors(err.response?.data);
        NotificationManager.error(
          "There was an issue sending you message, please try again",
          "Error!", 3000
        );
    }
  };

  // Form TextFields
  const textFields = (
    <div className="text-center mt-4">
      <Row className='justify-content-center mt-3 mb-3'>
        <h1 className={styles.Header}>Contact Us</h1>
      </Row>
      <Row className='justify-content-center mt-3 mb-3 '>
        <p className={styles.Paregraph}>
          Have a question / suggestion Fill in the form bellow and we'll answer your question shortly
        </p>
      </Row>
      <Form.Group>
        <Form.Label>About:</Form.Label>
        <Form.Control
          type="text"
          name="subject"
          value={subject}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.subject?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Leave Your Message and Your E-mail Please, So We Can Response You.</Form.Label>
        <Form.Control
          as="textarea"
          rows={6}
          name="message"
          value={message}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.message?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => history.goBack()}
      >
        cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        Send
      </Button>
      {errors.non_field_errors?.map((message, index) => (
              <Alert key={index} variant="warning" className="mt-2">
                {message}
              </Alert>
      ))}

    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col md={11} lg={11} className="d-none d-md-block p-0 p-md-2 mx-auto mt-3">
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
}

export default ContactCreateForm;