import React, { useEffect, useState } from 'react';
import axiosInstance from '../services/axios'
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
    let row = [], count = 1

    if(data === undefined){
      return row
    }

    data.map(item => {
        row.push({ 
          id: count++, 
          productName: item["product"], 
          priceProduct: parseInt(item["price"]), 
          linkProduct: item["link"], 
          stockProduct: item["stock"], 
          fechaProduct: item.["fecha"]
        })
    })

    return row
}

export default function Tabla() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchingData()
  }, [])

  const fetchingData = async () => {
    try{
      await axiosInstance.get('/data').then(response => {
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
