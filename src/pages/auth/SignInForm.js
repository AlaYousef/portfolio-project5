import React from "react";

import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

import { Link } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

function SignInForm() {
//   Add your component logic here

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

         <Form>
            <Form.Group as={Row} className="mb-3" controlId="username">
            <Form.Label column sm="2">
                UserName
            </Form.Label>
            <Col sm="10">
                <Form.Control type="text" placeholder="Enter your username" 
                            name="username" />
            </Col>
            </Form.Group>
            

            <Form.Group as={Row} className="mb-3" controlId="password">
                <Form.Label column sm="2">
                    Password
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="password" placeholder="Your password" 
                                name="password"/>
                </Col>
            </Form.Group>
            
            <Button variant="primary" type="submit" className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`}>
                Sign in
            </Button>
         </Form>


        </Container>

      </Col>
      <Col md={4}
        className={`my-auto d-none d-md-block p-2 ${styles.SignInCol}`}
      >
        <Image
          className={`${appStyles.FillerImage}`}
          src={"https://res.cloudinary.com/dko5fxoa0/image/upload/v1697621609/pexels-rdne-stock-project-7282017_n1vvep.webp"}
        />
      </Col>
    </Row>
  );
}

export default SignInForm;