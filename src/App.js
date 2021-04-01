import Tabla from './components/tabla'
import Header from './components/header/header'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className = "table-container">
        <Tabla></Tabla>
      </div>
    </div>
  );
}

export default App;
