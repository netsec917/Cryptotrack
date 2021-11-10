import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}>
          Cryptotrack
        </Typography>
      </AppBar>
    </Box>
  );
}

export default Header;