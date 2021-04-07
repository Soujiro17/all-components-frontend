import React from 'react';
import { Header } from '../../components/';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

export default function Contact() {
    return (
        <div className = "container">
            <Header/>
            <main>
                <Grid container spacing = {1}>
                    <Grid xs = {3} spacing={3}/>
                    <Grid xs = {6} spacing={3}>
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
                    <Grid xs = {3} spacing={3}/>
                </Grid>
            </main>
        </div>
    )
}
