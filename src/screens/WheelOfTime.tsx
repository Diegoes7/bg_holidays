import React from 'react';
import { motion } from 'framer-motion';
import { theme, commonStyles } from '../theme';

interface Props {
	badgeCount: number;
	onSelectHoliday: () => void;
	onOpenCalendar: () => void;
}

const WheelOfTime: React.FC<Props> = ({
	badgeCount,
	onSelectHoliday,
	onOpenCalendar,
}) => {
	return (
		<div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
			{/* Неговият Header */}
			<header
				style={{ padding: '16px', display: 'flex', alignItems: 'center' }}
			>
				<button onClick={onOpenCalendar} style={styles.calendarBtn}>
					<span style={{ fontSize: '20px' }}>📅</span>
				</button>
				<div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
					<div style={commonStyles.pillTitle}>Начало</div>
				</div>
				{/* Малък индикатор за значките вдясно за баланс */}
				<div style={{ color: theme.colors.navGold, fontWeight: 'bold' }}>
					🏅{badgeCount}
				</div>
			</header>

			{/* Твоето Колело */}
			<main
				style={{
					flex: 1,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					padding: '20px',
				}}
			>
				<h2 style={{ marginBottom: '10px', color: '#444' }}>
					Колелото на Времето
				</h2>
				<motion.div
					whileHover={{ rotate: 5 }}
					whileTap={{ scale: 0.95 }}
					onClick={onSelectHoliday}
					style={styles.wheel}
				>
					<div style={{ fontSize: '18px', color: '#666' }}>1 Март</div>
					<div
						style={{
							fontSize: '28px',
							fontWeight: 'bold',
							color: theme.colors.rustRed,
						}}
					>
						Баба Марта
					</div>
					<div
						style={{
							marginTop: '15px',
							fontSize: '12px',
							color: theme.colors.turquoise,
							fontWeight: 'bold',
						}}
					>
						КЛИКНИ ЗА МИСИЯ
					</div>
				</motion.div>

				<p
					style={{
						textAlign: 'center',
						color: '#888',
						fontSize: '14px',
						maxWidth: '80%',
					}}
				>
					Завърти колелото или отвори календара горе, за да откриеш българските
					традиции!
				</p>
			</main>
		</div>
	);
};

const styles = {
	calendarBtn: {
		backgroundColor: '#e9ecef',
		border: 'none',
		borderRadius: '10px',
		padding: '10px',
		cursor: 'pointer',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: theme.colors.turquoise,
	},
	wheel: {
		width: '280px',
		height: '280px',
		borderRadius: '50%',
		border: `12px solid ${theme.colors.rustRed}`,
		backgroundColor: '#fff',
		display: 'flex',
		flexDirection: 'column' as const,
		alignItems: 'center',
		justifyContent: 'center',
		boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
		cursor: 'pointer',
		marginBottom: '30px',
	},
};

export default WheelOfTime;
