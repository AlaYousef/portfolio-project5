import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import RecipeCreateForm from "./pages/recipes/RecipeCreateForm";
import RecipePage from "./pages/recipes/RecipePage";
import RecipesPage from "./pages/recipes/RecipesPage";
import { useCurrentUser } from "./contexts/CurrentUserContext";


function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";
  return (
  
        <div className={styles.App}>
          <NavBar />
          <Container className={styles.Main}>
            <Switch>
              <Route exact path="/" render={() => <RecipesPage 
                message="No results found, adjust the search keyword" />} />
              
              <Route exact path="/feed" render={() => <RecipesPage 
                message="No results found, adjust the search keyword or follow a user" 
                filter={`owner__followed__owner__profile=${profile_id}&`} />} />
              
              <Route exact path="/bookmarks" render={() => <RecipesPage 
                message="No results found, adjust the search keyword or follow a user" 
                filter={`bookmarks__owner__profile=${profile_id}&ordering=-bookmarks__created_at&`} />} />
              
              <Route exact path="/signin" render={() => <SignInForm />} />
              <Route exact path="/signup" render={() => <SignUpForm />} />
              <Route exact path="/recipes/create" render={() => <RecipeCreateForm />} />
              <Route exact path="/recipes/:id" render={() => <RecipePage />} />
              <Route render={() => <p> Page not found ! </p>} />
            </Switch>
          </Container>
        </div>
      
  );
}

export default App;