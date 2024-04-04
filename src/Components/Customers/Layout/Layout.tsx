import { Box, TextField, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { customerColumns } from '../../../tableColumns';
import { customerRows } from '../../../constants/customersData';

const Layout: React.FC = () => {
	return (
		<Box
			sx={{
				backgroundColor: 'white',
				padding: '1rem',
				borderRadius: '0.5rem',
				boxShadow: '4px 4px 20px 0 rgba(91, 119, 193, 0.15)'
			}}
		>
			<Box sx={{display: 'flex', justifyContent: 'space-between'}}>
				<Box>
					<Typography sx={{ fontWeight: '600', fontSize: '2rem' }}>All Customers</Typography>
					<Typography sx={{ color: 'lightgreen', paddingBottom: '1rem' }}>
						Active members
					</Typography>
				</Box>
				<TextField
					label='Search'
					variant='outlined'
					size='small'
					onChange={e => console.log(e.target.value)}
					sx={{ marginBottom: '1rem' }}
				/>
			</Box>

			<DataGrid
				columns={customerColumns}
				rows={customerRows}
				initialState={{
					pagination: {
						paginationModel: {
							pageSize: 8
						}
					}
				}}
				pageSizeOptions={[8]}
				disableColumnFilter
				disableColumnMenu
				disableColumnSorting
				disableColumnSelector
				disableRowSelectionOnClick
			/>
		</Box>
	);
};

export default Layout;
