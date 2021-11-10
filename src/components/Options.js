import { Autocomplete, 
  TextField, 
  Select,
  MenuItem, 
  InputLabel, 
  Stack  
} from '@mui/material';
import currencies from '../currencies';


const Options = ({limit, handleLimit, currency, handleCurrency}) => {
  return (
    <Stack spacing={2} direction="row" alignContent="center" justifyContent="center">
      <InputLabel>N Results</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={limit}
          label="Age"
          onChange={e => handleLimit(e.target.value)}
        >
        <MenuItem value={50}>50</MenuItem>
        <MenuItem value={100}>100</MenuItem>
        <MenuItem value={150}>150</MenuItem>
        <MenuItem value={200}>200</MenuItem>
        <MenuItem value={250}>150</MenuItem>
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