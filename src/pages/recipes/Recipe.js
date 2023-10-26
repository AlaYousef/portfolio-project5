import React from "react";
import styles from "../../styles/Recipe.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
const Recipe = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    comments_count,
    likes_count,
    like_id,
    save_id,
    name,
    ingredients,
    steps,
    image,
    updated_at,
    recipePage,
    setRecipes,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const handleLike = async () => {
    try {
      const { data } = await axiosRes.post("/likes/", { recipe: id });
      setRecipes((prevRecipes) => ({
        ...prevRecipes,
        results: prevRecipes.results.map((recipe) => {
          return recipe.id === id
            ? { ...recipe, likes_count: recipe.likes_count + 1, like_id: data.id }
            : recipe;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnlike = async () => {
    try {
      await axiosRes.delete(`/likes/${like_id}/`);
      setRecipes((prevRecipes) => ({
        ...prevRecipes,
        results: prevRecipes.results.map((recipe) => {
          return recipe.id === id
            ? { ...recipe, likes_count: recipe.likes_count - 1, like_id: null }
            : recipe;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Card className={styles.Recipe}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>
          <div className="d-flex align-items-center">
            <span>{updated_at}</span>
            {is_owner && recipePage && "..."}
          </div>
        </Media>
      </Card.Body>
      <Link to={`/recipes/${id}`}>
        <Card.Img src={image} alt={name} className=""/>
      </Link>

      <div className="d-flex align-items-left">
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't like your own recipe!</Tooltip>}
            >
              <i className="far fa-heart" />
            </OverlayTrigger>
          ) : like_id ? (
            <span onClick={handleUnlike}>
              <i className={`fas fa-heart ${styles.Heart}`} />
            </span>
          ) : currentUser ? (
            <span onClick={handleLike}>
              <i className={`far fa-heart ${styles.HeartOutline}`} />
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to like recipes!</Tooltip>}
            >
              <i className="far fa-heart" />
            </OverlayTrigger>
          )}
          {likes_count}

          
          <Link to={`/recipes/${id}`}>
            <i className="far fa-comments" />
          </Link>
          {comments_count}
          
            {is_owner ? (
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>You can't bookmrks your own recipe!</Tooltip>}
              >
                <i className="fa-regular fa-bookmark" />
              </OverlayTrigger>
            ) : save_id ? (
              <span onClick={() => {}}>
                <i className={`fa-regular fa-bookmark ${styles.Heart}`} />
              </span>
            ) : currentUser ? (
              <span onClick={() => {}}>
                <i className={`fa-solid fa-bookmark ${styles.HeartOutline}`} />
              </span>
            ) : (
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Log in to bookmark recipe!</Tooltip>}
              >
                <i className="fa-regular fa-bookmark" />
              </OverlayTrigger>
            )}

        </div>
        
      <Card.Body>
        {name && <Card.Title className="text-center">{name}</Card.Title>}
        {ingredients && <Card.Text>{ingredients}</Card.Text>}
        {steps && <Card.Text>{steps}</Card.Text>}
      </Card.Body>
    </Card>
  );
};

export default Recipe;