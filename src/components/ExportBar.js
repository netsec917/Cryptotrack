import { 
  GridToolbarExport, 
  GridToolbarContainer, 
  gridClasses 
} from '@mui/x-data-grid';

const ExportBar = () => {
  return (
    <GridToolbarContainer className={gridClasses.toolbarContainer}>
      <GridToolbarExport csvOptions={{ fields: ['name', 'symbol', 'price', 'priceChange',
        'high', 'low', 'volume', 'capacity', 'capacityChange'] }}
      />
    </GridToolbarContainer>
  );
};

export default ExportBar;