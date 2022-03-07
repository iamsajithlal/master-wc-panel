import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from "./Header";
const Home = lazy(() => import('../containers/home'));
const About = lazy(() => import('../containers/about'));

const _Router = () => {
  return(
    <Router>
      <>
      <Header />
      <Suspense fallback={<div>Loading.....</div>}>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </Suspense>
      </>
    </Router>
  );
       
};

export default _Router;