import React, { useEffect, useState } from 'react';
import { Header } from '../../components/';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import axiosInstance from '../../services/axios'

export default function ListPages() {

    const [pages, setPages] = useState([]);
    
    useEffect(() => {
        return getPages();
    }, [])

    const getPages = async () => {
        await axiosInstance.get("api/pages").then(data => setPages(data.data))
    }


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
                                    Lista de páginas
                                </Typography>
                                <Typography component="p" style = {{alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column'}}>
                                    A continuación se mostrará la lista de páginas de las cuales se extrae la información:
                                    <br/>
                                    <ul style = {{display: 'flex', flexWrap: 'wrap'}}>
                                        {
                                            pages.map(element => {
                                                return(
                                                    <a href = {element.page_link} target="_blank" rel="noopener noreferrer" style = {{flexBasis: '33.3%', display: 'flex', justifyContent: 'center', textDecoration: 'none', color: 'blue'}}>
                                                        <li>{element.page_name}</li>
                                                    </a>
                                                )
                                            })
                                        }
                                    </ul>
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
