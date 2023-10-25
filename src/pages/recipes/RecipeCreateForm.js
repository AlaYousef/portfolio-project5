import React, { useRef, useState } from "react";

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
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";


function RecipeCreateForm() {
    const [errors, setErrors] = useState({});

    const [recipeData, setRecipeData] = useState({
      name: "",
      ingredients: "",
      steps: "",
      image: "",
    });
    
    const { name, ingredients, steps, image } = recipeData;

    const imageInput = useRef(null);
    const history = useHistory();
  
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
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData();
      formData.append('name', name);
      formData.append('ingredients', ingredients);
      formData.append('steps', steps);
      formData.append('image', imageInput.current.files[0]);

      

      /* refresh access token */
      try{
        const {data} = await axiosReq.post('/recipes/', formData);
        history.push(`/recipes/${data.id}`)
      }catch(err){
        if (err.response?.status !== 401) {
          setErrors(err.response?.data);
        }
      }
    };
    const textFields = (
      <div className="text-center justify-content-center">
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
                value={steps} onChange={handleChange} ref={imageInput}/>
            </Col>
        </Form.Group>

       
        <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} onClick={() => history.goBack()}>
          cancel
        </Button>
        <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
          create
        </Button>
      </div>
    );
  
    return (
      <Form onSubmit={handleSubmit}>
         <Row>
          <Col md={10} lg={9} className="py-2 p-0 p-md-2 d-none d-md-block p-md-3 justify-content-center mx-auto">
          <Container  className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}>
            <Form.Group className="text-center" controlId="formFile">
                  {image ? (
                    <>
                      <figure>
                        <Image className={appStyles.Image} src={image} rounded />
                      </figure>
                      <div>
                        <Form.Label className={`${btnStyles.Button} ${btnStyles.Blue} btn`}>
                          Change the image
                        </Form.Label>
                      </div>
                    </>
                  ) : (
                    <Form.Label className="d-flex justify-content-center" >
                      <Asset src={Upload} message="Click or tap to upload an image" />
                    </Form.Label>
                  )}
                    <Form.Control type="file" onChange={handleChangeImage}
                      accept="image/*" ref={imageInput}/>
                </Form.Group>
                <div className="d-md-none">{textFields}</div>
            </Container>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={10} lg={9} className="py-2 p-0 p-md-2 d-md-block p-md-3 justify-content-center mx-auto">
          
            <Container className={appStyles.Content}>
              <Row className=" fs-2 justify-content-center mb-3 mt-2 "> Add Your Own Healthy Recipe</Row>
              {textFields}
            </Container>
          </Col>
        </Row>

      </Form>
    );
  }
  

export default RecipeCreateForm