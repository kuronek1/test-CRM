import { Box, Typography, darken } from '@mui/material';

interface IProps {
	name: string;
	color: string;
	backgroundColor: string;
}

const Status: React.FC<IProps> = props => {
	const { name, color, backgroundColor } = props;

	const darkenColor = darken(backgroundColor, 0.3);

	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				width: '3rem',
				height: '0.5rem',
				border: `2px solid ${darkenColor}`,
				padding: '0.5rem',
				backgroundColor: backgroundColor,
				borderRadius: '5px',
				marginTop: '15px'
			}}
		>
			<Typography sx={{color: color, fontSize: '0.75rem', fontWeight: '600'}}>{name}</Typography>
		</Box>
	);
};

export default Status;
