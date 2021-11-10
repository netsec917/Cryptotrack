import { useState, useEffect } from 'react';
import { Stack, Paper, styled } from '@mui/material';
import Header from './components/Header';
import Options from './components/Options';
import CoinListing from './components/CoinListing';


const App = () => {
  const [coins, setCoins] = useState([]);
  const [limit, setLimit] = useState(100);
  const [currency, setCurrency] = useState('GBP');

  const handleLimit = (val) => {
    setLimit(val);
  };

  const handleCurrency = (val) => {
    console.log(val);
    setCurrency(val);
  };

  useEffect(() => {
    const makeRequest = async () => {
      const response = await fetch(`http://localhost:8888/.netlify/functions/getCoins?limit=${limit}&currency=${currency}`);
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