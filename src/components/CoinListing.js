import { 
  DataGrid, 
  GridToolbarExport, 
  GridToolbarContainer, 
  gridClasses 
} from '@mui/x-data-grid';


const CoinListing = ({ coins }) => {
  const columns = [
    { field: 'image', headerName: '', editable: true, 
    renderCell: (params) => {
      return <img 
        src={params.value} 
        alt="icon" 
        width="50" 
        height="50"
      />
    }},
    { field: 'name', headerName: 'Name', flex: 1},
    { field: 'symbol', headerName: 'Symbol', flex: 1},
    { field: 'price', headerName: 'Price', flex: 1},
    { field: 'priceChange', headerName: 'Price Change (%)', flex: 1},
    { field: 'high', headerName: 'High', flex: 1},
    { field: 'low', headerName: 'Low', flex: 1},
    { field: 'volume', headerName: 'Volume', flex: 1},
    { field: 'capacity', headerName: 'Capacity', flex: 1},
    { field: 'capacityChange', headerName: 'Capacity change (%)', flex: 1},
  ];

  const rows = coins.map(coin => ({
    image: coin.image,
    id: coin.id, 
    name: coin.name, 
    symbol: coin.symbol.toUpperCase(),
    price: coin.current_price,
    priceChange: coin.price_change_percentage_24h,
    high: coin.high_24h,
    low: coin.low_24h,
    volume: coin.total_volume,
    capacity: coin.market_cap,
    capacityChange: coin.market_cap_change_percentage_24h
  }));
  
  const exportBar = () => {
    return (
      <GridToolbarContainer className={gridClasses.toolbarContainer}>
        <GridToolbarExport csvOptions={{ fields: ['name', 'symbol', 'price', 'priceChange',
        'high', 'low', 'volume', 'capacity', 'capacityChange'] }} />
      </GridToolbarContainer>
    );
  }

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
            Toolbar: exportBar
          }}
        />
      </div>
    </div>
  );
};

export default CoinListing;