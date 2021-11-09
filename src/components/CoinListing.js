import React from 'react'
import { DataGrid} from '@mui/x-data-grid';

const CoinListing = ({ coins }) => {

  const rows = coins.map(coin => ({
    id: coin.id, 
    name: coin.name, 
    symbol: coin.symbol.toUpperCase()
  }));

  const columns = [
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'symbol', headerName: 'Symbol', width: 150 },
  ];

  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  )
};

export default CoinListing;