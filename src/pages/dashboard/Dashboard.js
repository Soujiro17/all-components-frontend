import React, { useState, useEffect } from 'react';
import { Button, Grid } from '@material-ui/core';
import axiosInstance from '../../services/axios';
import { LogoutButton, Tabla } from '../../components/';
import { FormControl, TextField } from '@material-ui/core';
import M from 'materialize-css';

export default function Dashboard() {

    const [data, setData] = useState([]);
    const [id, setID] = useState('');
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [link, setLink] = useState('');
    const [stock, setStock] = useState('');
    const [fecha, setFecha] = useState('');
    const [imageURL, setImageURL] = useState('');

    useEffect(() => {
        fetchingData()
    }, [])

    const fetchingData = async () => {
        await axiosInstance.get('api/data').then(response => setData(response.data));
    }

    const getProduct = async () => {
        if(id){
            await axiosInstance.get(`api/data/${id}`)
                .then(response => {
                    setTitle(response.data.product);
                    setPrice(response.data.price);
                    setLink(response.data.link);
                    setStock(response.data.stock);
                    setFecha(response.data.fecha);
                    setImageURL(response.data.img_link);
                })
                .catch(() => M.toast({html: 'Product not found', classes: "red", displayLength: 1500}));
        }

        else M.toast({html: "Product not found", classes: "red", displayLength: 1500});
    }

    const saveProduct = async () => {
        await axiosInstance.put(`api/data/${id}`, { data: { product: title, price, link, stock, fecha, img_link: imageURL } })
            .then(() => {
                fetchingData();
                M.toast({html: 'Product updated!', classes: 'green', displayLength: 1500});
                setTitle('');
                setPrice('');
                setLink('');
                setStock('');
                setFecha('');
                setImageURL('');
                setID('');
            })
            .catch(() => M.toast({html: 'Error updating product', classes: "red", displayLength: 1500}));
    }

    return (
        <div className = "container-main">
            <Grid container style = {{margin: '10px'}}>
                <Grid xs = {2} item style = {{backgroundColor: 'white', opacity: '0.8', display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '10px', marginLeft: '50px'}}>
                    <h1>Categories</h1>
                    <hr style = {{width: '80%', height: '1px', color: 'white'}}/>
                </Grid>
                <Grid xs = {7} item style = {{backgroundColor: 'white', opacity: '0.8', display: 'flex', justifyContent: 'center', margin: '10px'}}>
                    <Tabla data = {data} id = {1}/>
                </Grid>
                <Grid xs = {2} item style = {{backgroundColor: 'white', opacity: '0.8', display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '10px'}}>
                    <h1>Update</h1>
                    <hr style = {{width: '80%', height: '1px', color: 'white'}}/>
                    <FormControl>
                        <TextField label="Product ID" multiline rowsMax={4} variant="filled" value = {id} onChange = {(e) => setID(e.target.value)}/>
                        <Button onClick = {getProduct} >Buscar</Button>
                        <br/>
                        {
                            title? (
                                <>
                                    <TextField label="Title" multiline rowsMax={4} variant="filled" value = {title} onChange = {(e) => setTitle(e.target.value)}/>
                                    <TextField label="Price" multiline rowsMax={4} variant="filled" value = {price} onChange = {(e) => setPrice(e.target.value)}/>
                                    <TextField label="Link" multiline rowsMax={4} variant="filled" value = {link} onChange = {(e) => setLink(e.target.value)}/>
                                    <TextField label="Stock" multiline rowsMax={4} variant="filled" value = {stock} onChange = {(e) => setStock(e.target.value)}/>
                                    <TextField label="Fecha" multiline rowsMax={4} variant="filled" value = {fecha} onChange = {(e) => setFecha(e.target.value)}/>
                                    <TextField label="URL Imágen" multiline rowsMax={4} variant="filled" value = {imageURL} onChange = {(e) => setImageURL(e.target.value)}/>
                                    <Button onClick = {saveProduct} type = "submit" style = {{margin: '10px'}}>Update</Button>
                                </>
                            ) : false
                        }
                        
                    </FormControl>
                    <LogoutButton/>
                </Grid>
            </Grid>
        </div>
    )
}
