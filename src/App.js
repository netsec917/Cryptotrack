import { useState, useEffect } from 'react';
import { Stack } from '@mui/material';
import Header from './components/Header';
import Options from './components/Options';
import CoinListing from './components/CoinListing';
import useLocalStorage from './hooks/useLocalStorage';


const App = () => {
  const [coins, setCoins] = useState([]);
  const [opts, setOpts] = useLocalStorage("opts", {
    nResults: 100,
    currency: "GBP",
    orderBy: "current_price"
  });

  useEffect(() => {
    const makeRequest = async () => {
      const nPages = opts.nResults / 100;
      let data = [];

      for (let page = 1; page <= nPages; ++page) {
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?page=
        ${page}&vs_currency=${opts.currency}&per_page=100&&sparkline=false`);

        const results = await response.json();
        data.push(...results);
      }
      data.sort((e1, e2) => e2[opts.orderBy] - e1[opts.orderBy])
      setCoins(data);
    }
    makeRequest();
  }, [opts]);


  return (
    <div className="App">
      <Stack spacing={2}>
        <Header/>
        <Options 
          opts={opts}
          handleOpts={(opts) => setOpts(opts)}
        />
        <CoinListing coins={coins}/>
      </Stack>
    </div>
  );
}

export default App;