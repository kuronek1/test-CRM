import { GridColDef } from '@mui/x-data-grid';
import { Status } from '../Components/Shared';

interface Customer {
	id: number;
	customerName: string;
	company: string;
	phone: string;
	email: string;
	country: string;
	status: boolean;
}

export const customerColumns: GridColDef<Customer>[] = [
	{ field: 'customerName', headerName: 'Customer Name', width: 150, flex: 1 },
	{ field: 'company', headerName: 'Company', width: 150, flex: 1 },
	{ field: 'phone', headerName: 'Phone Number', width: 150, flex: 1 },
	{ field: 'email', headerName: 'Email', width: 150, flex: 1 },
	{ field: 'country', headerName: 'Country', width: 150, flex: 1 },
	{
		field: 'status',
		headerName: 'Status',
		width: 150,
		renderCell: item => (
			<Status
				name={item.row.status ? 'Active' : 'Inactive'}
				backgroundColor={item.row.status ? '#A6E7D8' : '#FFC5C5'}
				color={item.row.status ? 'green' : 'red'}
			/>
		)
	}
];
