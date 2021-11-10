import { Autocomplete,
  TextField, 
  Select,
  MenuItem, 
  InputLabel, 
  Stack  
} from '@mui/material';
import currencies from '../currencies';


const Options = ({
  limit, 
  handleLimit, 
  currency, 
  handleCurrency, 
  orderBy, 
  handleOrderBy}) => {
  return (
    <Stack spacing={2} direction="row" alignContent="center" justifyContent="center">
      <InputLabel>N Results</InputLabel>
        <Select
          value={limit}
          label="Limit"
          onChange={e => handleLimit(e.target.value)}
        >
        <MenuItem value={50}>50</MenuItem>
        <MenuItem value={100}>100</MenuItem>
        <MenuItem value={150}>150</MenuItem>
        <MenuItem value={200}>200</MenuItem>
        <MenuItem value={250}>250</MenuItem>
      </Select>


      <InputLabel>Order by</InputLabel>
        <Select
          value={orderBy}
          label="orderBy"
          onChange={e => handleOrderBy(e.target.value)}
        >
        <MenuItem value={"market_cap_desc"}>Capacity</MenuItem>
        <MenuItem value={"volume_desc"}>Volume</MenuItem>
      </Select>


      <InputLabel>Base currency</InputLabel>
      <Autocomplete
        options={currencies}
        renderInput={(params) => <TextField {...params} label={currency}/>}
        onChange={(event, value) => handleCurrency(value)} 
      />
    </Stack>
  )
}

export default Options;