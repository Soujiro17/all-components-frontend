import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { DataGrid } from '@material-ui/data-grid';
require('dotenv').config()

const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'productName', headerName: 'Producto', width: 500 },
    { field: 'priceProduct', headerName: 'Precio', width: 150 },
    {
      field: "linkProduct",
      headerName: "Link",
      width: 150,
      renderCell: (params) =>{
        return (<a href={params.getValue("linkProduct")} target="_blank" rel="noopener noreferrer" style = {{textDecoration: 'none', color: 'blue'}}>{'Ir al producto'}</a>)
    }},
    { field: 'stockProduct', headerName: 'Stock', width: 200 },
    { field: 'fechaProduct', headerName: 'Fecha de actualización', width: 200 },

];

const toRow = (data) => {
    let row = []

    if(data === undefined){
      return row
    }

    for(let x = 0; x<data.products.length; x++){
        row.push({ id: x+1, productName: data.products[x], priceProduct: parseInt(data.prices[x]), linkProduct: data.links[x], stockProduct: data.stock[x], fechaProduct: data.fecha[x]})
    }
    return row
}

export default function Tabla() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchingData()
  }, [])

  const fetchingData = async () => {
    const headers = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      'Authorization': process.env.REACT_APP_API
    }
    try{
      await axios.get(process.env.REACT_APP_API_URL, {headers: headers}).then(response => {
          setData(toRow(response.data))
      });
    }catch(err){
      console.log("error: ", err)
    }
  }

  return (
    <div style={{ height: '80vh', width: '70vw', margin: 'auto', backgroundColor: 'rgba(255,255,255,0.6)', display: 'flex' }}>
      <DataGrid
        rows={data} 
        columns={columns}
        pagination 
        pageSize={10}
        />
    </div>
  );
}
