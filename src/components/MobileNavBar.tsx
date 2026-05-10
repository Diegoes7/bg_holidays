import React from 'react';
import { motion } from 'framer-motion';
import { theme } from '../theme';
import {type ScreenType } from '../App';

interface Props {
	currentScreen: ScreenType;
	onNavigate: (screen: ScreenType) => void;
}

const MobileNavBar: React.FC<Props> = ({ currentScreen, onNavigate }) => {
	const navItems: { id: ScreenType; icon: string; color: string }[] = [
		{ id: 'wheel', icon: '🏠', color: theme.colors.navPink },
		{ id: 'map', icon: '🗺️', color: theme.colors.navGreen },
		{ id: 'game', icon: '🎮', color: theme.colors.navRed },
		{ id: 'chest', icon: '🏅', color: theme.colors.navGold },
	];

	return (
		<nav style={styles.navBar}>
			{navItems.map((item) => {
				const isActive =
					currentScreen === item.id ||
					(currentScreen === 'month' && item.id === 'wheel');
				return (
					<motion.button
						key={item.id}
						whileHover={{ scale: 1.15 }}
						whileTap={{ scale: 0.9 }}
						onClick={() => onNavigate(item.id)}
						style={{
							...styles.navBtn,
							backgroundColor: isActive ? '#e9ecef' : 'transparent',
							transform: isActive ? 'scale(1.1)' : 'scale(1)',
						}}
					>
						<span
							style={{
								fontSize: '24px',
								filter: isActive ? 'none' : 'grayscale(100%) opacity(0.6)',
							}}
						>
							{item.icon}
						</span>
					</motion.button>
				);
			})}
		</nav>
	);
};

const styles = {
	navBar: {
		position: 'absolute' as const,
		bottom: 0,
		left: 0,
		right: 0,
		display: 'flex',
		justifyContent: 'space-around',
		padding: '12px 0',
		borderTop: '1px solid #ddd',
		background: '#ffffff',
		height: '75px',
		alignItems: 'center',
	},
	navBtn: {
		background: 'none',
		border: 'none',
		cursor: 'pointer',
		padding: '12px',
		borderRadius: '50%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		transition: 'all 0.2s ease',
		width: '55px',
		height: '55px',
	},
};

export default MobileNavBar;
