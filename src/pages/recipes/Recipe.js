import React from "react";
import styles from "../../styles/Recipe.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, OverlayTrigger, Tooltip} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";

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
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/recipes/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/recipes/${id}/`);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };
  const handleLike = async () => {
    try {
      const { data } = await axiosRes.post("/likes/", { recipe: id });
      setRecipes((prevRecipes) => ({
        ...prevRecipes,
        results: prevRecipes.results.map((recipe) => {
          return recipe.id === id
            ? { ...recipe,  likes_count: recipe.likes_count + 1, like_id: data.id }
            : recipe;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

 
  const handleBookmark = async () => {
    try {
      const { data } = await axiosRes.post("/bookmarks/", { recipe: id });
      setRecipes((prevRecipes) => ({
        ...prevRecipes,
        results: prevRecipes.results.map((recipe) => {
          return recipe.id === id
            ? { ...recipe, save_id: data.id }
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
  const handleUnbookmark = async () => {
    try {
      await axiosRes.delete(`/bookmarks/${save_id}/`);
      setRecipes((prevRecipes) => ({
        ...prevRecipes,
        results: prevRecipes.results.map((recipe) => {
          return recipe.id === id
            ? { ...recipe, save_id: null }
            : recipe;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };
  return (
      <Card className={`${styles.Recipe}`}>
        <Card.Body>
          <Media className="align-items-center justify-content-between">
            <Link to={`/profiles/${profile_id}`}>
              <Avatar src={profile_image} height={55} />
              {owner}
            </Link>
            <div className="d-flex align-items-center">
            <span>{updated_at}</span>
            {is_owner && recipePage && (
              <MoreDropdown
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            )}
          </div>
          </Media>
        </Card.Body>
        <Link to={`/recipes/${id}`}>
          <Card.Img src={image} alt={name} className={styles.CardImage}/>
        </Link>

        <div className="d-flex align-items-left">
            {is_owner ? (
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>You can't like your own recipe!</Tooltip>}
              >
                <i className="fa-solid fa-thumbs-up" />
              </OverlayTrigger>
            ) : like_id ? (
              <span onClick={handleUnlike}>
                <i className={`fa-solid fa-thumbs-up ${styles.Heart}`} />
              </span>
            ) : currentUser ? (
              <span onClick={handleLike}>
                <i className={`fa-regular fa-thumbs-up ${styles.HeartOutline}`} />
              </span>
            ) : (
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Log in to like recipes!</Tooltip>}
              >
                <i className="fa-solid fa-thumbs-up" />
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
                  overlay={<Tooltip>You can't bookmark your own recipe!</Tooltip>}
                >
                  <i className="fa-solid fa-bookmark" />
                </OverlayTrigger>
              ) : save_id ? (
                <span onClick={handleUnbookmark}>
                  <i className={`fa-solid fa-bookmark ${styles.Heart}`} />
                </span>
              ) : currentUser ? (
                <span onClick={handleBookmark}>
                  <i className={`fa-regular fa-bookmark ${styles.HeartOutline}`} />
                </span>
              ) : (
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip>Log in to bookmark recipe!</Tooltip>}
                >
                  <i className="fa-solid fa-bookmark" />
                </OverlayTrigger>
              )}

          </div>
          
            <Card.Body>
              {name && <Card.Title class="font-weight-bold">{name}</Card.Title>}
              {ingredients && <Card.Text class="font-weight-normal">{ingredients}</Card.Text>}
              {steps && <Card.Text class="font-weight-normal">{steps}</Card.Text>}
            </Card.Body>
      </Card>
    
  );
};

export default Recipe;