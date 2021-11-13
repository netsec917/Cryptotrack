import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import cryptocurrencies from '../assets/cryptocurrencies.png'
import { Stack } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static">
      <Typography variant="h2" component="div" sx={{ flexGrow: 1, color: '#3c345c'}}>
        <Stack direction="row" spacing={2} padding={1} alignContent="center" justifyContent="center">
          <img src={cryptocurrencies} alt="icon" height="75" width="75"/>
          <p>Cryptotrack</p>
        </Stack>
      </Typography>
    </AppBar>
  );
}

export default Header;