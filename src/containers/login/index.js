import React from "react";
import { Grid } from "@mui/material";
import useStyles from "./style";

const Login = () => {
    const classes = useStyles()
    return (
        <Grid container>
            <Grid container
                item xs={4}
                direction="column">
                <div className={classes.leftPanel}>

                </div>
            </Grid>
            <Grid container
                item xs={8}
                direction="column" >

            </Grid>
        </Grid>
    )
}

export default Login;