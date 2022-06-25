import React from 'react';
import {Grid, Paper, Avatar, Button} from "@material-ui/core";
import "./Login.css"
 //https://i.etsystatic.com/15835007/r/il/f6e9c3/3490348194/il_1588xN.3490348194_acws.jpg

const Login=()=>{

    const PaperStyle = {padding:20, height:'90vh', width:1000, margin:"20px auto"};
    return(
        <Grid>
            <Paper elevation = {10} style = {PaperStyle}>
                <Grid align="center">
                    <Avatar alt="mapIcon" src="https://i.etsystatic.com/15835007/r/il/f6e9c3/3490348194/il_1588xN.3490348194_acws.jpg" /> 
                    <h1> 3 Maps</h1>
                    <Button 
                        className = "Guest-Button" 
                        type="submit"
                        halfWidth
                        variant="contained"
                        color="primary"
                        //onClick = {window.location.href = "/home"}
                    >
                        Guest
                    </Button>
                    <Button 
                        className = "Login-Button" 
                        type="submit"
                        halfWidth
                        variant="contained"
                        color="primary"
                        //onClick = {window.location.href = "/home"}
                    >
                        Login
                    </Button>
                </Grid>
            </Paper>
        </Grid>
    );
}

export default Login;