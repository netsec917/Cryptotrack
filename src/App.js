import { useState, useEffect } from 'react';
import { Stack, Paper, styled } from '@mui/material';
import Header from './components/Header';
import Options from './components/Options';
import CoinListing from './components/CoinListing';
import useLocalStorage from './hooks/useLocalStorage';


const App = () => {
  const [coins, setCoins] = useState([]);
  const [limit, setLimit] = useLocalStorage(100, "limit");
  const [currency, setCurrency] = useLocalStorage("GBP", "currency");
  const [orderBy, setOrderBy] = useLocalStorage("price", "orderBy");

  const handleLimit = (val) => {
    setLimit(val);
  };

  const handleCurrency = (val) => {
    setCurrency(val);
  };

  useEffect(() => {
    const makeRequest = async () => {
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${limit}&page=1&sparkline=false`);
      const data = await response.json();
      setCoins(data);
    }
    makeRequest();
  }, [limit, currency]);


  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


  return (
    <div className="App">
      <Stack spacing={2}>
        <Item>
          <Header/>
        </Item>
        <Item>
          <Options 
            limit={limit} 
            handleLimit={handleLimit}
            currency={currency}
            handleCurrency={handleCurrency}
          />
        </Item>
        <Item> 
          <CoinListing coins={coins}/>
        </Item>
      </Stack>
    </div>
  );
}

export default App;