import React, { createContext, useContext, useState } from "react";

import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import { Link, useHistory } from "react-router-dom";
import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import axios from "axios";
import { SetCurrentUserContext } from "../../App";

function SignInForm() {
  /* use the useContext fun.*/
  const setCurrentUser = useContext(SetCurrentUserContext);

  /*Destructure the useState hook */
  const [signInData, setSignInData] = useState({
    username: "",
    password: ""
  });

  const {username, password} = signInData;

  /* useState hook with an empty object to store and set errors. */
  const[errors, setErrors] = useState({
  });

  const history = useHistory();

  /* onChange handler function to handle the SignInData and update the state*/
  const handleChange = (event) => {
    setSignInData({
        ...signInData,
        [event.target.name]: event.target.value
    })
}

/* submit handler Post all sigip data to the api and redirect to home page*/
  const handleSubmit = async (event) => {

    /* preventDefault event so that the page doesn’t refresh. */
    event.preventDefault();
    try{
        const {data} = await axios.post('/dj-rest-auth/login/', signInData);
        setCurrentUser(data.user);
        history.push('/');
    }catch(err){
        /* Errors conditional chaining */
        setErrors(err.response?.data)
    }
}
  return (
    <Row className={styles.Row}>
      <Col className="my-auto p-0 p-md-2" md={8}>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>sign in</h1>
          <p className={styles.Paregraph}>
            Don't have an account? 
            <Link className={styles.Link} to="/signup">
                <span> Sign up</span>
            </Link>
         </p>

         <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-3" controlId="username">
            <Form.Label column sm="2">
                UserName
            </Form.Label>
            <Col sm="10">
                <Form.Control type="text" placeholder="Enter your username" 
                            name="username" value={username} onChange={handleChange}/>
            </Col>
            </Form.Group>
            {errors.username?.map((message, index) => 
                <Alert varient="warning" key={index}>{message}</Alert>
            )}

            <Form.Group as={Row} className="mb-3" controlId="password">
                <Form.Label column sm="2">
                    Password
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="password" placeholder="Your password" 
                                name="password" value={password} onChange={handleChange}/>
                </Col>
            </Form.Group>
            {errors.password?.map((message, index) => 
                <Alert varient="warning" key={index}>{message}</Alert>
            )}
            
            <Button variant="primary" type="submit" className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`}>
                Sign in
            </Button>
            {errors.non_field_errors?.map((message, index) => (
              <Alert key={index} variant="warning" className="mt-2">
                {message}
              </Alert>
            ))}

         </Form>
        </Container>
      </Col>

      <Col md={4}
        className={`my-auto d-none d-md-block p-2 ${styles.SignInCol}`} >
        <Image
          className={`${appStyles.FillerImage}`}
          src={"https://res.cloudinary.com/dko5fxoa0/image/upload/v1697621609/pexels-rdne-stock-project-7282017_n1vvep.webp"}
        />
      </Col>
    </Row>
  );
}

export default SignInForm;