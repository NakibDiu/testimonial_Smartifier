import React from 'react';
import {Container, Card, Typography, CardMedia, CardContent, Avatar,CssBaseline} from '@material-ui/core';
import useStyle from './Style';

var data = require('./data.json');
const App = (()=> {
    const classes = useStyle();
    return(
        <>
            <CssBaseline />
            <Container className = {classes.mainContainer}>
               {data.map((data) => (
                <>
                   <Container  className = {classes.container}>
                        <Card item className = {classes.card}>
                            <CardMedia className = {classes.imageContainer}>
                                <Avatar src= {data.image} className = {classes.image}/>
                                <div className = {classes.box}>
                                    <Typography variant= "h5" className = {classes.text}>{data.name}</Typography>
                                    <Typography variant= "h5" className = {classes.text}>{data.designation}</Typography>
                                </div>
                            </CardMedia>
                            <CardContent className = {classes.content}>
                                <Typography variant= "body1" className = {classes.text}>{data.testimonial}</Typography>
                            </CardContent>
                        </Card>
                   </Container>
                   
                </>
               ))}
            </Container>
        </>
    )
})

export default App;