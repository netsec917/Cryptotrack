import { Slider, Autocomplete, TextField, Select } from '@mui/material';
import currencies from '../currencies';

const Options = ({limit, handleLimit, currency, handleCurrency}) => {
  return (
    <div>
      <Slider
        aria-label="Temperature"
        valueLabelDisplay="auto"
        step={50}
        marks
        min={50}
        max={250}
        onChange={e => handleLimit(e.target.value)}
        value={limit}
      />

      <Autocomplete
        disablePortal
        options={currencies}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Base currency" />}
        onChange={(event, value) => handleCurrency(value)} 
      />
    </div>
  )
}

export default Options;