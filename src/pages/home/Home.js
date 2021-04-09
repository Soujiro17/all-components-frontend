import { useState, useEffect } from 'react';
import { Header, Items } from '../../components';
import './Home.scss';
import axiosInstance from '../../services/axios';
import { Button, Input } from '@material-ui/core';

function Home() {

  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [orderByPrice, setOrderByPrice] = useState(true);
  
  const fetchingData = async () => {
    await axiosInstance.get(`api/data`).then(response => setData(response.data));
  }
  
  useEffect(() => {
    fetchingData()
  }, [])

  return (
    <div className="container-main" style = {{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Header></Header>
      <div className = "options-bar">
        <Input
          placeholder="Buscar producto"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          style = {{marginRight: 'auto'}}
        />
        <Button onClick={() => setOrderByPrice(orderByPrice ? false : true)}>Ordenado de: {orderByPrice? "menor a mayor": "mayor a menor"}</Button>
      </div>
      <div className="table-container">
          <Items data={data} value={search} orderbyprice={orderByPrice.toString()} />
      </div>
    </div>
  );
}

export default Home;
