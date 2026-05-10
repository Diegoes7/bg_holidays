import React from 'react';
import { motion } from 'framer-motion';
import { theme, commonStyles } from '../theme';

// Описваме на TypeScript, че вече очакваме и масив със значки (badges)
interface Props {
	badges: string[];
	onBack: () => void;
}

const VirtualChest: React.FC<Props> = ({ badges, onBack }) => {
	return (
		<motion.div
			initial={{ y: '100%' }}
			animate={{ y: 0 }}
			exit={{ y: '100%' }}
			style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
		>
			{/* HEADER: Дизайнът на колегата ти */}
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
					Ракла
				</div>
			</header>

			{/* CONTENT */}
			<main style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
				<h2
					style={{
						color: theme.colors.navGold,
						textAlign: 'center',
						fontFamily: theme.fonts.kids,
						marginBottom: '20px',
					}}
				>
					Твоите Значки
				</h2>

				<div style={styles.chestGrid}>
					{badges.length === 0 ? (
						<p
							style={{
								gridColumn: '1 / -1',
								textAlign: 'center',
								color: '#888',
								fontStyle: 'italic',
							}}
						>
							Раклата е празна. Изпълни мисия, за да я напълниш!
						</p>
					) : (
						badges.map((badge, idx) => (
							<motion.div
								key={idx}
								whileHover={{ scale: 1.05 }}
								style={styles.badgeCard}
							>
								<div style={{ fontSize: '40px', marginBottom: '10px' }}>🏅</div>
								<div
									style={{
										fontSize: '14px',
										fontWeight: 'bold',
										color: theme.colors.rustRed,
										textAlign: 'center',
									}}
								>
									{badge}
								</div>
							</motion.div>
						))
					)}
				</div>
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
	chestGrid: {
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
		gap: '20px',
	},
	badgeCard: {
		backgroundColor: '#fff',
		padding: '20px',
		borderRadius: '16px',
		border: `2px solid ${theme.colors.navGold}`,
		boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
		display: 'flex',
		flexDirection: 'column' as const,
		alignItems: 'center',
		justifyContent: 'center',
	},
};

export default VirtualChest;
