import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { theme, commonStyles } from '../theme';
import { bgHolidays, type Holiday } from '../data/holydays';

interface Props {
	onBack: () => void;
	onSelectHoliday: (holiday: Holiday) => void;
}

const MonthView: React.FC<Props> = ({ onBack, onSelectHoliday }) => {
	const [viewDate, setViewDate] = useState(new Date(2026, 2, 1));
	const monthName = viewDate.toLocaleString('bg-BG', { month: 'long' });

	const changeMonth = (offset: number) => {
		setViewDate(
			new Date(viewDate.getFullYear(), viewDate.getMonth() + offset, 1),
		);
	};

	const getHolidayForDay = (day: number): Holiday | undefined => {
		const month = (viewDate.getMonth() + 1).toString().padStart(2, '0');
		const dayStr = day.toString().padStart(2, '0');
		const dateStr = `2026-${month}-${dayStr}`;
		return bgHolidays.find((h) => h.date === dateStr);
	};

	const daysInMonth = new Date(
		viewDate.getFullYear(),
		viewDate.getMonth() + 1,
		0,
	).getDate();

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			style={{
				padding: '16px',
				flex: 1,
				display: 'flex',
				flexDirection: 'column',
				// ТУК БЕШЕ ГРЕШКАТА: Сменяме theme.colors.background с theme.colors.bgGrey
				backgroundColor: theme.colors.bgGrey,
			}}
		>
			{/* HEADER: Вече с дизайна на колегата ти (сивото хапче) */}
			<header
				style={{
					display: 'flex',
					alignItems: 'center',
					position: 'relative',
					marginBottom: '30px',
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
					<span style={{ textTransform: 'capitalize' }}>{monthName} 2026</span>
				</div>
			</header>

			<div style={{ flex: 1, overflowY: 'auto', paddingBottom: '20px' }}>
				{/* НАВИГАЦИЯ МЕСЕЦИ */}
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						gap: '30px',
						marginBottom: '30px',
					}}
				>
					<button onClick={() => changeMonth(-1)} style={styles.arrowBtn}>
						◀
					</button>
					<span style={{ fontWeight: 'bold', color: theme.colors.turquoise }}>
						Избери месец
					</span>
					<button onClick={() => changeMonth(1)} style={styles.arrowBtn}>
						▶
					</button>
				</div>

				{/* ГРИД КАЛЕНДАР */}
				<div
					style={{
						display: 'grid',
						gridTemplateColumns: 'repeat(7, 1fr)',
						gap: '10px',
					}}
				>
					{[...Array(daysInMonth)].map((_, i) => {
						const day = i + 1;
						const holiday = getHolidayForDay(day);

						return (
							<motion.div
								key={day}
								whileTap={holiday ? { scale: 0.9 } : {}}
								onClick={holiday ? () => onSelectHoliday(holiday) : undefined}
								style={
									holiday ? styles.holidayTile(holiday.color) : styles.dayTile
								}
							>
								<span
									style={{
										fontSize: '14px',
										fontWeight: holiday ? 'bold' : 'normal',
									}}
								>
									{day}
								</span>
								{holiday && <div style={styles.dot} />}
							</motion.div>
						);
					})}
				</div>
			</div>
		</motion.div>
	);
};

// Стилизация, обединяваща логиката с визията
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
	arrowBtn: {
		backgroundColor: '#e9ecef',
		color: '#3392be',
		border: 'none',
		borderRadius: '50%',
		width: '36px',
		height: '36px',
		cursor: 'pointer',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	dayTile: {
		padding: '12px 0',
		textAlign: 'center' as const,
		backgroundColor: 'white',
		borderRadius: '10px',
		border: '1px solid #f0f0f0',
		color: '#ccc',
		display: 'flex',
		flexDirection: 'column' as const,
		alignItems: 'center',
	},
	holidayTile: (color: string) => ({
		padding: '12px 0',
		textAlign: 'center' as const,
		backgroundColor: color,
		color: 'white',
		borderRadius: '10px',
		cursor: 'pointer',
		display: 'flex',
		flexDirection: 'column' as const,
		alignItems: 'center',
		boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
	}),
	dot: {
		width: '4px',
		height: '4px',
		backgroundColor: 'white',
		borderRadius: '50%',
		marginTop: '2px',
	},
};

export default MonthView;
