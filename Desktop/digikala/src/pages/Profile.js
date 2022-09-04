import React from "react";
import Navigation from "../components/header/Navigation";
import Footer from "../components/footer/Footer";

function Profile(props) {
  return (
    <div>
      <Navigation login={props.login} logoutUser={props.logoutUser} />
      profile content
      <Footer />
    </div>
  );
}

export default Profile;
