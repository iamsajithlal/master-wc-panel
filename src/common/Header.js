import React from "react";
import { useHistory } from "react-router-dom";

const Header = () =>{
    let history = useHistory();
    return(
        <ul>
            <li>
                <button onClick={()=>{
                    history.push("/")
                }}>
                    Home
                </button>
            </li>
            <li>
            <button onClick={()=>{
                    history.push("/about")
                }}>
                    about
                </button>
               
            </li>
            <li>
            <button onClick={()=>{
                    history.push("/topics")
                }}>
                    Topics
                </button>
            </li>
        </ul>
    );
}

export default Header;