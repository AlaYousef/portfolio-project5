import React, { useRef, useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";

import Asset from "../../components/Asset";

import Upload from "../../assets/upload.png";

import styles from "../../styles/RecipeCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/useRedirect";
import { NotificationManager } from 'react-notifications';


function RecipeCreateForm() {
  useRedirect("loggedOut");
  const [errors, setErrors] = useState({});

  const [postData, setPostData] = useState({
    name: "",
    ingredients: "",
    steps: "",
    image: "",
  });
  const { name, ingredients, steps, image } = postData;

  const imageInput = useRef(null);
  const history = useHistory();

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setPostData({
        ...postData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("name", name);
    formData.append("ingredients", ingredients);
    formData.append("steps", steps);
    formData.append("image", imageInput.current.files[0]);

    try {
      const { data } = await axiosReq.post("/recipes/", formData);
      NotificationManager.success(
        "Recipe created successfully",
        "Success!", 3000
      );
      history.push(`/recipes/${data.id}`);
    } catch (err) {
      //console.log(err);
        setErrors(err.response?.data);
    }
  };

  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Recipe Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.name?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>ingredients</Form.Label>
        <Form.Control
          as="textarea"
          rows={6}
          name="ingredients"
          value={ingredients}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.ingredients?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

<Form.Group>
        <Form.Label>steps</Form.Label>
        <Form.Control
          as="textarea"
          rows={6}
          name="steps"
          value={steps}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.steps?.map((message, idx) => (
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
        create
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
      <Row className="mx-auto">
       
        <Col md={10} lg={10} className="d-none d-md-block p-0 p-md-2 mx-auto">
        
          <Container className={appStyles.Content}>
          <Form.Group className="text-center">
              {image ? (
                <>
                  <figure>
                    <Image className={appStyles.Image} src={image} rounded />
                  </figure>
                  <div>
                    <Form.Label
                      className={`${btnStyles.Button} ${btnStyles.Blue} btn`}
                      htmlFor="image-upload"
                    >
                      Change the image
                    </Form.Label>
                  </div>
                </>
              ) : (
                <Form.Label
                  className="d-flex justify-content-center"
                  htmlFor="image-upload"
                >
                  <Asset
                    src={Upload}
                    message="Click or tap to upload an image"
                  />
                </Form.Label>
              )}

              <Form.File
                id="image-upload"
                accept="image/*"
                onChange={handleChangeImage}
                ref={imageInput}
              />
            </Form.Group>
            {errors?.image?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <div className="d-md-none">{textFields}</div>
            {textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
}

export default RecipeCreateForm;