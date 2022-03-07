import React, { useState } from "react";
import Login from "./containers/login";
import { useSelector, useDispatch } from 'react-redux'
import _Router from './common/Router';

export default function App() {
  const auth = useSelector((state) => state.login.value);

  return (
    <>
      {!auth ? <Login /> : <_Router />}
    </>
  );
}


