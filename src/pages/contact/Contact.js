import React from 'react';
import { Header } from '../../components/';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

export default function Contact() {
    return (
        <div className = "container-main">
            <Header/>
            <main>
                <Grid container style = {{display: 'flex', justifyContent: 'center'}}>
                    <Grid xs = {3} item/>
                    <Grid xs = {6} item style = {{maxWidth: '100%'}}>
                        <Card style = {{opacity: '0.8', animation: 'zoomIn', animationDuration: '1s'}}>
                            <CardContent>
                                <Typography variant="h3" component="h2" style = {{textAlign: 'center'}}>
                                    Contacto
                                </Typography>
                                <Typography component="p" style = {{alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column'}}>
                                    Dudas, preguntas, consultas o sugerencias serán bien recibidas en mi correo:
                                    <br/>
                                    <span style = {{fontSize: '20px', fontWeight: 'bold'}}>vicente_tomi@hotmail.com</span>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs = {3} item />
                </Grid>
            </main>
        </div>
    )
}
