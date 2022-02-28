import React from "react";
import { Button, Grid } from "@mui/material";
import useStyles from "./style";

const Login = () => {
    const classes = useStyles()
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
                    }}>
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