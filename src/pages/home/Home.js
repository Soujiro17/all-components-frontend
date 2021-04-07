import { useState, useEffect } from 'react';
import { Tabla, Header } from '../../components';
import './Home.scss';
import axiosInstance from '../../services/axios';

function Home() {

  const [data, setData ] = useState([]);

  useEffect(() => {
    fetchingData()
  }, [])

  const fetchingData = async () => {
    await axiosInstance.get('api/data').then(response => setData(response.data));
  }

  return (
    <div className="container-main">
      <Header></Header>
      <div className = "table-container">
        <Tabla data = {data}></Tabla>
      </div>
    </div>
  );
}

export default Home;
