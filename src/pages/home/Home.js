import { useState, useEffect } from 'react';
import { Header } from '../../components';
import './Home.scss';
import axiosInstance from '../../services/axios';
import { Button, Input } from '@material-ui/core';
import Items from '../../components/items/Items';

function Home() {

  const [data, setData ] = useState([]);
  const [search, setSearch] = useState('');
  const [orderByPrice, setOrderByPrice] = useState("false");

  useEffect(() => {
    fetchingData()
  }, [])

  const fetchingData = async () => {
    await axiosInstance.get('api/data').then(response => setData(response.data));
  }

  return (
    <div className="container-main">
      <Header></Header>
      <Input
            placeholder = "Buscar producto"
            style = {{color: 'white'}}
            onChange = {(e) => setSearch(e.target.value)}
            value = {search}
      />
      <Button onClick = {() => {setOrderByPrice(orderByPrice === "true"? "false" : "true"); console.log(orderByPrice)}}>Click</Button>
      <div className = "table-container">
        <Items data = {data} value = {search} orderbyprice = {orderByPrice}/>
      </div>
    </div>
  );
}

export default Home;
