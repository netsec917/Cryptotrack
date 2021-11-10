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
  const [orderBy, setOrderBy] = useLocalStorage("volume_desc", "orderBy");

  useEffect(() => {
    const makeRequest = async () => {
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=${orderBy}&per_page=${limit}&page=1&sparkline=false`);
      const data = await response.json();
      console.log(data);
      setCoins(data);
    }
    makeRequest();
  }, [limit, currency, orderBy]);

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
            handleLimit={(val) => setLimit(val)}
            currency={currency}
            handleCurrency={(val) => setCurrency(val)}
            orderBy={orderBy}
            handleOrderBy={(val) => setOrderBy(val)}
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