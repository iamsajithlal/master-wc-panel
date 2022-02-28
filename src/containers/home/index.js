import React from "react";
import {
    Link,
    useRouteMatch,
  } from "react-router-dom";

const Home = () => {
    let match = useRouteMatch();
    return(
        <>
          <h1>Hello Home</h1>
        </>
      
    );
}

export default Home;