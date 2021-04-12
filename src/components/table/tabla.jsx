import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import M from 'materialize-css';

const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 80,
      renderCell: (params) =>{
        return (<p onClick = {copyClipboard} id = "id">{params.getValue("id")}</p>)
    }},
    { field: 'productName', headerName: 'Producto', width: 580 },
    { field: 'priceProduct', headerName: 'Precio', width: 120 },
    {
      field: "linkProduct",
      headerName: "Link",
      width: 150,
      renderCell: (params) =>{
        return (<a href={params.getValue("linkProduct")} target="_blank" rel="noopener noreferrer" style = {{textDecoration: 'none', color: 'blue'}}>{'Ir al producto'}</a>)
    }},
    { field: 'stockProduct', headerName: 'Stock', width: 200 },
    { field: 'fechaProduct', headerName: 'Fecha de actualización', width: 200 },
    { field: 'imageProduct', headerName: 'URL Imágen', width: 200 }

];

const copyClipboard = () =>{

  let element = document.getElementById("id");
  let elementText = element.textContent;
  
  navigator.clipboard.writeText(elementText);

  return M.toast({html: 'ID Copied on clipboard!', classes: 'green', displayLength: 1500});

}

const toRow = (data) => {
    let row = []

    data.map(item => {
        return row.push({ 
          id: item["_id"], 
          productName: item["product"], 
          priceProduct: parseInt(item["price"]), 
          linkProduct: item["link"], 
          stockProduct: item["stock"], 
          fechaProduct: item["fecha"],
          imageProduct: item["img_link"]
        })
    })

    return row
}

export default function Tabla(props) {
  
  const { data } = props;
  
  return (
    <div style={{ height: '80vh', width: '70vw', margin: 'auto', backgroundColor: 'rgba(255,255,255,0.6)', display: 'flex' }}>
      <DataGrid
        rows={toRow(data)} 
        columns={columns}
        loading={data.length === 0}
        pagination 
        pageSize={10}
        />
    </div>
  );
}
