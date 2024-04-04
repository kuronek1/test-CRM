import { useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

import { sidebarRoutes } from '../../../constants/routes';
import { ReactComponent as LogoIcon } from '../../../static/svg/Logo.svg';
import { KeyboardArrowRight, KeyboardArrowLeft, WavingHand } from '@mui/icons-material';
import { currentUser } from '../../../constants/currentUserData';

interface IProps {
	children?: React.ReactNode;
}

const ContentWrapper: React.FC<IProps> = (props): JSX.Element => {
	const { children } = props;

	const [expanded, setExpanded] = useState(true);
	const [isAnimating, setIsAnimating] = useState(false);

	const { pathname } = useLocation();

	useEffect(() => {
    setIsAnimating(true);
    const timeout = setTimeout(() => setIsAnimating(false), 200); 
    return () => clearTimeout(timeout);
  }, [expanded]);

	return (
		<Box
			sx={{
				display: 'flex',
				flex: 1,
				boxSizing: 'content-box',
				height: '100vh',
				overflowY: 'hidden'
			}}
		>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					width: `${expanded ? '19.125rem' : '7rem'}`,
					position: 'relative',
					transition: 'width 0.3s ease-in-out, background-color 0.3s ease-in-out',
					animation: expanded ? '' : 'closeSidebar 0.3s ease-in-out',
					backgroundColor: isAnimating ? '#5632EA' : '#FFF'
				}}
			>
				<Box
					sx={{
						padding: '1rem 2rem'
					}}
				>
					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						<LogoIcon />
						{expanded && (
							<Box sx={{ display: 'flex', alignItems: 'end' }}>
								<Typography sx={{ fontWeight: '700', fontSize: '1.625rem', lineHeight: '1' }}>
									Dashboard
								</Typography>
								<Typography
									sx={{ color: 'grey', fontWeight: '600', fontSize: '0.7rem', lineHeight: '1' }}
								>
									v0.1
								</Typography>
							</Box>
						)}
					</Box>
				</Box>
				<Box sx={{ height: '100%' }}>
					{sidebarRoutes.map(item => (
						<Box key={item.id} sx={{ padding: '1rem 2rem', width: `${expanded ? '70%' : '28%'}` }}>
							<Link
								to={item.url}
								style={{
									textDecoration: 'none',
									color: pathname.includes(item.url) ? 'white' : 'black',
									backgroundColor: pathname.includes(item.url) ? '#5932EA' : 'none',
									padding: '0.5rem',
									borderRadius: '0.5rem',
									display: 'flex',
									alignItems: 'center',
									width: '100%',
									justifyContent: 'space-between'
								}}
							>
								{expanded ? (
									<>
										<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
											{item.icon && <item.icon />}
											<Typography sx={{ fontSize: 'large', fontWeight: 500, margin: '0 0.5rem' }}>
												{item.label}
											</Typography>
										</Box>
										<KeyboardArrowRight />
									</>
								) : (
									item.icon && <item.icon />
								)}
							</Link>
						</Box>
					))}
				</Box>
				<Box sx={{ display: 'flex', width: '100%', justifyContent: 'center', paddingBottom: '2rem' }}>
					<img
						src={currentUser.photo}
						alt='userPhoto'
						style={{
							width: '2.625rem',
							height: '2.625rem',
							borderRadius: '50%',
							marginRight: '0.5rem'
						}}
					/>
					{expanded && (
						<Box>
							<Typography sx={{ fontSize: '1.5rem', fontWeight: '600' }}>
								{currentUser.firstName}
							</Typography>
							<Typography sx={{ fontSize: '0.75rem', color: 'grey' }}>
								{currentUser.position}
							</Typography>
						</Box>
					)}
				</Box>
				<Button
					onClick={() => setExpanded(!expanded)}
					sx={{
						width: '3rem',
						height: '3rem',
						position: 'absolute',
						right: '0',
						bottom: '5rem',
						backgroundColor: '#5632EA'
					}}
				>
					{expanded ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
				</Button>
			</Box>
			<Box
				sx={{
					width: '100%',
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					padding: '1rem 2rem ',
					backgroundColor: '#FAFBFF'
				}}
			>
				<Box
					sx={{
						height: '5vh',
						display: 'flex',
						alignItems: 'center',
						color: 'black',
						paddingBottom: '0.7rem'
					}}
				>
					<Typography sx={{ marginRight: '0.5rem', fontSize: '1.5rem' }}>
						Hello {currentUser.firstName}
					</Typography>
					<WavingHand />
				</Box>
				<Box
					sx={{
						maxWidth: '100% !important'
					}}
				>
					{children}
				</Box>
			</Box>
		</Box>
	);
};

export default ContentWrapper;
