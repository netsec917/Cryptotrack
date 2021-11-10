import { 
  Autocomplete,
  TextField, 
  Select,
  MenuItem, 
  InputLabel, 
  Stack,
  Slider
} from '@mui/material';
import currencies from '../currencies';

const Options = ({
  limit, 
  handleLimit, 
  currency, 
  handleCurrency, 
  orderBy, 
  handleOrderBy
}) => {
  return (
    <Stack spacing={2} direction="row" alignContent="center" justifyContent="center">

      <InputLabel>Order by</InputLabel>
        <Select
          value={orderBy}
          label="orderBy"
          onChange={e => handleOrderBy(e.target.value)}
        >

        <MenuItem value={"current_price"}>Price</MenuItem>
        <MenuItem value={"market_cap"}>Capacity</MenuItem>
        <MenuItem value={"total_volume"}>Volume</MenuItem>
      </Select>


      <InputLabel>Base currency</InputLabel>
      <Autocomplete
        options={currencies}
        renderInput={(params) => <TextField {...params} label={currency}/>}
        onChange={(event, value) => handleCurrency(value)} 
      />

      <InputLabel>Number of results</InputLabel>
      <Slider
        sx={{width: '300px'}}
        aria-label="Temperature"
        defaultValue={limit}
        valueLabelDisplay="auto"
        marks
        step={100}
        min={100}
        max={1000}
        onChange={e => handleLimit(e.target.value)}
        value={limit}
      />
    </Stack>
  )
}

export default Options;