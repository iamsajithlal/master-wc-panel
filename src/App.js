import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Home from "./containers/home";
import Login from "./containers/login";
import { useSelector, useDispatch  } from 'react-redux'
import { increment, decrement } from './redux/slices/counter';
import _Router from './common/Router';


export default function App() {
  const [auth, setAuth] = useState(true);

  const loginClick = () =>{
    setAuth(true);
  }

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>

    {!auth ? 
      <Login />
      //   <>
      //     <p>Its not authenticated</p>
      //     <button onClick={loginClick} >LOGIN</button>
      //     <div>
      //   <button
      //     aria-label="Increment value"
      //     onClick={() => dispatch(increment())}
      //   >
      //     Increment
      //   </button>
      //   <span>{count}</span>
      //   <button
      //     aria-label="Decrement value"
      //     onClick={() => dispatch(decrement())}
      //   >
      //     Decrement
      //   </button>
      // </div>
      //   </> 
        
        : <_Router />
        }
    </>
  );
}


