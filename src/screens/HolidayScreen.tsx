import React from 'react';
import { motion } from 'framer-motion';
import { type ScreenType } from '../App';
import { type Holiday } from '../data/holydays';
import { styles } from '../styles';

interface Props {
	holiday: Holiday;
	onNavigate: (screen: ScreenType) => void;
}

const HolidayScreen: React.FC<Props> = ({ holiday, onNavigate }) => {
	return (
		<motion.div
			style={styles.screenWrapper}
			initial={{ opacity: 0, scale: 0.9 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0.9 }}
			transition={{ type: 'spring', stiffness: 200, damping: 20 }}
		>
			<div
				style={{ ...styles.container, borderTop: `8px solid ${holiday.color}` }}
			>
				<button style={styles.backButton} onClick={() => onNavigate('month')}>
					⬅ Към календара
				</button>
				<h1 style={{ ...styles.header, color: holiday.color }}>
					{holiday.title}
				</h1>
				<p style={styles.date}>{holiday.date} - Национален празник</p>

				<motion.div
					className='card'
					style={styles.card}
					whileHover={{ scale: 1.02 }}
				>
					<h3 style={{ color: '#00838F' }}>📜 Исторически контекст</h3>
					<p>{holiday.description}</p>
				</motion.div>

				<motion.div
					className='card'
					style={styles.card}
					whileHover={{ scale: 1.02 }}
				>
					<h3 style={{ color: '#F57F17' }}>🧶 Символи и Обичаи</h3>
					<p>{holiday.symbols}</p>
				</motion.div>

				<motion.button
					style={styles.actionButton}
					onClick={() => onNavigate('game')}
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
				>
					🎮 Мисия: Спечели значка!
				</motion.button>
			</div>
		</motion.div>
	);
};

export default HolidayScreen;
