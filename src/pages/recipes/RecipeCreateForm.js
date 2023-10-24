import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import Upload from "../../assets/upload.png";

import styles from "../../styles/RecipeCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
function RecipeCreateForm() {
    const [errors, setErrors] = useState({});


    const textFields = (
      <div className="text-center">
        {/* Add your form fields here */}
  
      
      
        <Button
          className={`${btnStyles.Button} ${btnStyles.Blue}`}
          onClick={() => {}}
        >
          cancel
        </Button>
        <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
          create
        </Button>
      </div>
    );
  
    return (
      <Form>
        <Row>
         
          <Col md={8} lg={8} className="d-none d-md-block p-0 p-md-3">
            <Container className={appStyles.Content}>{textFields}</Container>
          </Col>

          <Col className="py-2 p-0 p-md-3" md={4} lg={4}>
            <Container
              className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
            >
              <Form.Group className="text-center">
                
                  <Form.Label
                    className="d-flex justify-content-center"
                    htmlFor="image-upload"
                  >
                    ASSET
                  </Form.Label>
  
              </Form.Group>
              <div className="d-md-none">{textFields}</div>
            </Container>
          </Col>
        </Row>
      </Form>
    );
  }
  

export default RecipeCreateForm