import React from "react";
import Links from "./Components/links";
import Profile from "./Components/profile";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className='main-wrap'>
      <Profile />
      <Links />
      <Footer />
    </div>
  );
};

export default App;
