import {useState, useEffect} from 'react';
import { TextField } from '@mui/material';
import Header from './components/Header';
import CoinListing from './components/CoinListing';

const App = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const makeQuery = async () => {
      const response = await fetch(`http://localhost:8888/.netlify/functions/getCoins`);
      const data = await response.json();
      setCoins(data);
    }
    makeQuery();
  }, []);


  return (
    <div className="App">
      <Header />
      <CoinListing coins={coins}/>
    </div>
  );
}

export default App;