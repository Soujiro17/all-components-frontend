import React, { useEffect, useState } from 'react';
import { XGrid } from '@material-ui/x-grid';
import axios from 'axios'
require('dotenv').config()

const columns = [
    { field: 'id', headerName: 'id', width: 50 },
    { field: 'productName', headerName: 'Producto', width: 400 },
    { field: 'priceProduct', headerName: 'Precio', width: 130 },
    { field: 'linkProduct', headerName: 'Link', width: 400 },
    { field: 'stockProduct', headerName: 'Stock', width: 150 },
    { field: 'fechaProduct', headerName: 'Fecha de actualización', width: 200 },
];

const toRow = (data) => {
    let row = []

    if(data === undefined){
      return row
    }

    for(let x = 0; x<data.products.length; x++){
        row.push({ id: x, productName: data.products[x], priceProduct: parseInt(data.prices[x]), linkProduct: data.links[x], stockProduct: data.stock[x], fechaProduct: data.fecha[x]})
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
    <div style={{ height: '80vh', width: '70vw', margin: 'auto', backgroundColor: 'rgba(255,255,255,0.6)',}}>
      <XGrid
        rows={data} 
        columns={columns}
        pagination 
        pageSize={15}
        />
    </div>
  );
}
