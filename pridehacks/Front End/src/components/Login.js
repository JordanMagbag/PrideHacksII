import React from 'react';
import {Grid, Paper, Avatar, Button} from "@material-ui/core";


const Login=()=>{

    const PaperStyle = {padding:20, height:'70vh', width:1000, margin:"20px auto"};
    return(
        <Grid>
            <Paper elevation = {10} style = {PaperStyle}>
                <Grid align="center">
                    <Avatar alt="3mapIcon" src="/src/images/avatar/3map.png" />
                    <h1> 3 Maps</h1>
                    <Button>Guest</Button>
                    <Button>Login</Button>
                </Grid>
            </Paper>
        </Grid>
    );
}

export default Login;