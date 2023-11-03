import React from "react";
//React boostrap component
import { Container } from "react-bootstrap";
//styles css
import appStyles from "../../App.module.css";
//components
import Asset from "../../components/Asset";
import Profile from "./Profile";
//contexts
import { useProfileData } from "../../contexts/ProfileDataContext";


const PopularProfiles = ({ mobile }) => {
  // Get popular profiles data useProfileData context
  const { popularProfiles } = useProfileData();

  return (
    <Container
      className={`${appStyles.Content} ${
        mobile && "d-lg-none text-center mb-3"
      }`}
    >
      {/* Check if the popularProfiles data loaded */}
      {popularProfiles.results.length ? (
        <>
          <p>Most followed profiles.</p>
           {/* Display popularProfiles on mobiles (if mobiles var, is true)*/}
          {mobile ? (
            <div className="d-flex justify-content-around">
              {popularProfiles.results.slice(0, 4).map((profile) => (
                <Profile key={profile.id} profile={profile} mobile />
              ))}
            </div>
          ) : (
            popularProfiles.results.map((profile) => (
              <Profile key={profile.id} profile={profile} />
            ))
          )}
        </>
      ) : (
        <Asset spinner />
      )}
    </Container>
  );
};

export default PopularProfiles;