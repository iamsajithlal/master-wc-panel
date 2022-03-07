import React from "react";
import { Button, Grid } from "@mui/material";
import useStyles from "./style";
import { login } from '../../redux/slices/login';
import { useDispatch  } from 'react-redux'

const Login = () => {
    const classes = useStyles()
    const dispatch = useDispatch()

    const loginHadler = () => {
        dispatch(login());
    }

    return (
        <Grid container>
            <Grid container
                item xs={4}
                direction="column">
                <div className={classes.leftPanel}>
                    <Button style={{
                        backgroundColor: '#ffffff',
                        height: '50px',
                        width: '40vh',
                        marginBottom: '0.5vh'
                    }} onClick={loginHadler}>
                        LOGIN
                    </Button>
                    <Button style={{
                        backgroundColor: '#ffffff',
                        height: '50px',
                        width: '40vh',
                        marginBottom: '0.5vh'
                    }}>
                        SIGN UP
                    </Button>
                </div>
            </Grid>
            <Grid container
                item xs={8}
                direction="column" >
                <div backgroundColor="red" style={{
                    width: '100%',
                    height: '100vh'
                }}>
                    <p>helloo</p>
                </div>
            </Grid>
        </Grid>
    )
}

export default Login;