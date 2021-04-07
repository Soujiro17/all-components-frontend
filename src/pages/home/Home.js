import { Tabla, Header } from '../../components';
import './Home.scss';

function Home() {
  return (
    <div className="container">
      <Header></Header>
      <div className = "table-container">
        <Tabla></Tabla>
      </div>
    </div>
  );
}

export default Home;
