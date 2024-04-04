import { Box, CircularProgress } from '@mui/material';

const Spinner: React.FC = () => {
	return (
		<Box
			sx={{
				width: '100vw',
				height: '100vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				position: 'fixed',
				zIndex: 999,
				backgroundColor: 'black',
				opacity: '90%'
			}}
		>
			<CircularProgress size='5rem' color='secondary' />
		</Box>
	);
};

export default Spinner;
