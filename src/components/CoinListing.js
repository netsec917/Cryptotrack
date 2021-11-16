import { DataGrid } from '@mui/x-data-grid';
import ExportBar from './ExportBar';

const CoinListing = ({ coins }) => {

  const columns = [
    {field: 'coin', headerName: 'Coin', editable: true, 
    renderCell: (params) => {
      return <>
        <img src={params.value.image} alt="icon" width="50" height="50"/>
        <h4 style={{marginLeft: "1rem"}}>{params.value.name}</h4>
        </>
      },  flex: 1.5},
    {field: 'symbol', headerName: 'Symbol', flex: 1},
    {field: 'price', headerName: 'Price', flex: 1},
    {field: 'priceChange', headerName: 'Price Change (%)', flex: 1},
    {field: 'high', headerName: 'High', flex: 1},
    {field: 'low', headerName: 'Low', flex: 1},
    {field: 'volume', headerName: 'Volume', flex: 1},
    {field: 'capacity', headerName: 'Capacity', flex: 1},
    {field: 'capacityChange', headerName: 'Capacity change (%)', flex: 1},
  ];

  const rows = coins.map(coin => ({
    id: coin.id,
    coin: {
      name: coin.name,
      image: coin.image
    },
    symbol: coin.symbol.toUpperCase(),
    price: coin.current_price,
    priceChange: coin.price_change_percentage_24h,
    high: coin.high_24h,
    low: coin.low_24h,
    volume: coin.total_volume,
    capacity: coin.market_cap,
    capacityChange: coin.market_cap_change_percentage_24h
  }));

  return (
    <div style={{ display: 'flex'}}>
      <div style={{ flexGrow: 1 }}>
        <DataGrid
          autoHeight
          disableExtendRowFullWidth
          pageSize={50}
          pagination
          rows={rows} 
          columns={columns}
          components={{
            Toolbar: ExportBar
          }}
        />
      </div>
    </div>
  );
};

export default CoinListing;