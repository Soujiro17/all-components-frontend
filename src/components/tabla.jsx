import React, { useEffect, useState } from 'react';
import { XGrid } from '@material-ui/x-grid';
import axios from 'axios'
require('dotenv').config()

const columns = [
    { field: 'id', headerName: 'id', width: 50 },
    { field: 'productName', headerName: 'Producto', width: 600 },
    { field: 'priceProduct', headerName: 'Precio', width: 130 },
    { field: 'linkProduct', headerName: 'Link', width: 900 },
    { field: 'stockProduct', headerName: 'Stock', width: 150 },
];

const toRow = (data) => {
    let row = []

    if(data === undefined){
      return row
    }

    for(let x = 0; x<data.products.length; x++){
        row.push({ id: x, productName: data.products[x], priceProduct: parseInt(data.prices[x]), linkProduct: data.links[x], stockProduct: data.stock[x]})
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
      'Authorization': process.env.TOKEN
    }
    await axios.get(process.env.API_URL, {headers: headers}).then(response => {
        setData(toRow(response.data))
        console.log(response)
        console.log(response.data)
        console.log(process.env.API_URL)
        console.log(typeof process.env.API_URL)
    });
  }

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <XGrid
        rows={data} 
        columns={columns}
        pagination 
        pageSize={15}
        />
    </div>
  );
}
