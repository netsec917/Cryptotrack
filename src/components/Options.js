import Currencies from '../misc/Currencies';
import { 
  Autocomplete,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  Stack,
  Slider
} from '@mui/material';

const Options = ({ opts, handleOpts }) => {
  return (
    <Stack spacing={2} direction="row" alignContent="center" justifyContent="center">

      <InputLabel>Order by</InputLabel>
      <Select
        value={opts.orderBy}
        sx={{width: "130px"}}
        onChange={e => handleOpts({
          ...opts,
          orderBy: e.target.value
        })}
      >
        <MenuItem value={"current_price"}>Price</MenuItem>
        <MenuItem value={"market_cap"}>Capacity</MenuItem>
        <MenuItem value={"total_volume"}>Volume</MenuItem>
      </Select>


      <InputLabel>Base currency</InputLabel>
      <Autocomplete
        sx={{width: "120px"}}
        options={Currencies}
        renderInput={(params) => <TextField {...params} label={opts.currency}/>}
        onChange={(event, value) => handleOpts(value !== null ? {
          ...opts,
          currency: value
        } : {
          ...opts,
          currency: "GBP"
        })} 
      />

      <InputLabel>Number of results</InputLabel>
      <Slider
        value={opts.nResults}
        sx={{width: '300px'}}
        aria-label="Temperature"
        defaultValue={opts.nResults}
        valueLabelDisplay="auto"
        marks
        step={100}
        min={100}
        max={1000}
        onChange={e => handleOpts({
          ...opts,
          nResults: e.target.value
        })}
      />
    </Stack>
  )
}

export default Options;