import React from 'react';
import { Header } from '../../components/';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

import EjemploUno from '../../assets/images/ejemplo1.png'
import EjemploDos from '../../assets/images/ejemplo2.png'

export default function Usage() {
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
                                    Instrucciones
                                </Typography>
                                <Typography component="p" style = {{alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column'}}>
                                    El modo de uso de la página es sencillo: Al poner el mouse encima de cualquier categoría 
                                    (producto por ejemplo) te saldrán tres puntos:
                                    <br/>
                                    <img src = {EjemploUno} alt = "Ejemplo uno"/>
                                    <br/>
                                    Al presionar los tres puntos, te saldrán múltiples opciones, donde a continuación se explicará
                                    cada una:
                                    <br/>
                                    <ul>
                                        <li>
                                            Sort by ASC: Ordena de manera alfabética de la A - Z.
                                        </li>
                                        <li>
                                            Sort by DESC: Ordena de manera alfabética de la Z - A.
                                        </li>
                                        <li>
                                            Filter: Solo muestra los productos que contengan lo que escribas.
                                        </li>
                                        <li>
                                            Hide: Oculta la columna que hayas seleccionado.
                                        </li>
                                        <li>
                                            Show: Muestra la columna que esté invisible.
                                        </li>
                                    </ul>
                                    <img src = {EjemploDos} alt = "Ejemplo dos"/>
                                    <br/>
                                    Si haces click encima de una columna (precio por ejemplo), se ordena de menor a mayor, y con otro click de mayor a menor.
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
