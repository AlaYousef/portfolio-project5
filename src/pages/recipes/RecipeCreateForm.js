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
import Asset from "../../components/Asset";
import { Image } from "react-bootstrap";


function RecipeCreateForm() {
    const [errors, setErrors] = useState({});

    const [recipeData, setRecipeData] = useState({
      name: "",
      ingredients: "",
      steps: "",
      image: "",
    });
    
    const { name, ingredients, steps, image } = recipeData;
  
    const handleChange = (event) => {
      setRecipeData({
        ...recipeData,
        [event.target.name]: event.target.value,
      });
    };

    const handleChangeImage = (event) => {
      if (event.target.files.length) {
        URL.revokeObjectURL(image);
        setRecipeData({
          ...recipeData,
          image: URL.createObjectURL(event.target.files[0]),
        });
      }
    };
  

    const textFields = (
      <div className="text-center">
        <Form.Group as={Row} className="mb-3" controlId="name">
            <Form.Label column sm="2">
                Name
            </Form.Label>
            <Col sm="10">
                <Form.Control type="text" name="name" placeholder="Enter recipe name" 
                value={name} onChange={handleChange} />
            </Col>
        </Form.Group>
         <Form.Group as={Row} className="mb-3" controlId="ingredients">
            <Form.Label column sm="2">
                Ingredients
            </Form.Label>
            <Col sm="10">
                <Form.Control as="textarea" rows={6} name="ingredients" 
                placeholder="1.&#13;&#10;2. &#13;&#10;3. " 
                value={ingredients} onChange={handleChange} />
            </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="steps">
            <Form.Label column sm="2">
                Steps
            </Form.Label>
            <Col sm="10">
                <Form.Control as="textarea" rows={6} name="steps" 
                placeholder="1.&#13;&#10;2. &#13;&#10;3. " 
                value={steps} onChange={handleChange} />
            </Col>
        </Form.Group>
      
        <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} onClick={() => {}}>
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
              className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}>
              <Form.Group className="text-center">
              {image ? (
                <>
                  <figure>
                    <Image className={appStyles.Image} src={image} rounded />
                  </figure>
                  <div>
                    <Form.Label className={`${btnStyles.Button} ${btnStyles.Blue} btn`} htmlFor="image-upload">
                      Change the image
                    </Form.Label>
                  </div>
                </>
              ) : (
                <Form.Label className="d-flex justify-content-center" htmlFor="image-upload" >
                  <Asset src={Upload} message="Click or tap to upload an image" />
                </Form.Label>
              )}

              <Form.File id="image-upload" accept="image/*" onChange={handleChangeImage} />
            </Form.Group>
            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>
        <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
          <Container className={appStyles.Content}>{textFields}</Container>
        </Col>
        </Row>
      </Form>
    );
  }
  

export default RecipeCreateForm