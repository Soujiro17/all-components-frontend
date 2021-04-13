import { useState, useEffect } from 'react';
import { Header, Items } from '../../components';
import './Home.scss';
import axiosInstance from '../../services/axios';
import { Button, Input } from '@material-ui/core';
import M from 'materialize-css';

function Home() {

  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [orderByPrice, setOrderByPrice] = useState(false);
  
  const fetchingData = async () => {
    await axiosInstance.get(`api/data`).then(response => setData(response.data));
  }

  const findProduct = async () => {
    await axiosInstance.get(`api/data/find?search=${search}`)
      .then(res => setData(res.data))
      .catch(() => M.toast({html: "Producto no encontrado", classes: "red", displayLength: 1500}))
  }
  
  useEffect(() => {
    fetchingData()
  }, [])

  return (
    <div className="container-main" style = {{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Header></Header>
      <div className="table-container">
        <div className = "options-bar">
          <Input
            placeholder="Buscar producto"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            style = {{marginRight: 'auto'}}
          />
          <Button onClick = {findProduct}>Buscar</Button>
          <Button onClick={() => setOrderByPrice(orderByPrice ? false : true)}>Ordenado de: {orderByPrice? "mayor a menor" : "menor a mayor"}</Button>
        </div>
        <Items data={data} setData = {setData} orderbyprice={orderByPrice.toString()} />
      </div>
    </div>
  );
}

export default Home;
