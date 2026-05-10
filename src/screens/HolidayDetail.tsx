import React from 'react';
import { motion } from 'framer-motion';
import { theme, commonStyles } from '../theme';
import { type Holiday } from '../data/holydays';

interface Props {
	holiday: Holiday | null;
	onBack: () => void;
	onStartGame: () => void;
}

const HolidayDetail: React.FC<Props> = ({ holiday, onBack, onStartGame }) => {
	if (!holiday) {
		return (
			<div style={{ flex: 1, padding: '20px', textAlign: 'center' }}>
				<p>Моля, изберете празник от календара.</p>
				<button onClick={onBack} style={styles.actionBtn('#3392be')}>
					⬅ Назад
				</button>
			</div>
		);
	}

	return (
		<motion.div
			initial={{ x: '100%' }}
			animate={{ x: 0 }}
			exit={{ x: '100%' }}
			style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
		>
			{/* HEADER: Дизайнът със сивото хапче */}
			<header
				style={{
					padding: '12px 16px',
					display: 'flex',
					alignItems: 'center',
					position: 'relative',
				}}
			>
				<button onClick={onBack} style={styles.iconBtn}>
					<span style={{ fontSize: '20px' }}>⬅</span>
				</button>

				<div
					style={{
						position: 'absolute',
						left: '50%',
						transform: 'translateX(-50%)',
						...commonStyles.pillTitle,
					}}
				>
					{holiday.title}
				</div>
			</header>

			{/* CONTENT */}
			<main
				style={{
					flex: 1,
					padding: '16px',
					display: 'flex',
					flexDirection: 'column',
					gap: '20px',
					overflowY: 'auto',
				}}
			>
				{/* ВИДЕО ПЛЕЙСХОЛДЪР (Изглежда като истински екран) */}
				<div style={styles.videoPlaceholder}>
					<div style={styles.playButton}>
						<span style={{ marginLeft: '4px' }}>▶️</span>
					</div>
					<span
						style={{
							marginTop: '12px',
							color: '#fff',
							fontSize: '14px',
							fontWeight: 'bold',
							letterSpacing: '0.5px',
						}}
					>
						ВИДЕО (до 60 сек)
					</span>
				</div>

				{/* Информационни блокове */}
				<div style={styles.infoBlock}>
					<h3
						style={{
							color: holiday.color,
							marginBottom: '8px',
							display: 'flex',
							alignItems: 'center',
							gap: '8px',
						}}
					>
						<span>📜</span> История
					</h3>
					<p style={{ color: '#444', lineHeight: '1.6', fontSize: '15px' }}>
						{holiday.description}
					</p>
				</div>

				<div style={styles.infoBlock}>
					<h3
						style={{
							color: theme.colors.navGold,
							marginBottom: '8px',
							display: 'flex',
							alignItems: 'center',
							gap: '8px',
						}}
					>
						<span>🧶</span> Символи
					</h3>
					<p style={{ color: '#444', lineHeight: '1.6', fontSize: '15px' }}>
						{holiday.symbols}
					</p>
				</div>

				{/* Бутон за Мисия (Геймификация) */}
				<button onClick={onStartGame} style={styles.actionBtn(holiday.color)}>
					🎮 Мисия: Спечели значка!
				</button>
			</main>
		</motion.div>
	);
};

const styles = {
	iconBtn: {
		backgroundColor: '#e9ecef',
		color: '#3392be',
		border: 'none',
		borderRadius: '10px',
		padding: '10px 15px',
		cursor: 'pointer',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		zIndex: 10,
	},
	// Новият стил за видеото
	videoPlaceholder: {
		backgroundColor: '#2c3e50', // Тъмно синьо-сив "екран"
		borderRadius: '16px',
		minHeight: '200px',
		display: 'flex',
		flexDirection: 'column' as const,
		alignItems: 'center',
		justifyContent: 'center',
		boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
		border: '4px solid #1a252f', // Рамка на "телевизора"
	},
	playButton: {
		width: '60px',
		height: '60px',
		borderRadius: '50%',
		backgroundColor: 'rgba(255, 255, 255, 0.2)', // Полупрозрачен кръг
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: '30px',
		cursor: 'pointer',
	},
	infoBlock: {
		backgroundColor: '#ffffff',
		padding: '16px',
		borderRadius: '16px',
		border: '1px solid #e9ecef',
		boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
	},
	actionBtn: (color: string) => ({
		backgroundColor: color,
		color: 'white',
		border: 'none',
		padding: '16px',
		borderRadius: '16px',
		fontSize: '16px',
		fontWeight: 'bold',
		cursor: 'pointer',
		marginTop: '10px',
		marginBottom: '20px',
		boxShadow: `0 4px 15px ${color}66`,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		gap: '10px',
	}),
};

export default HolidayDetail;
