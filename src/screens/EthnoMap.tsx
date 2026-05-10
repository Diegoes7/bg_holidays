import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { theme, commonStyles } from '../theme';

interface Props {
	onBack: () => void;
}

const EthnoMap: React.FC<Props> = ({ onBack }) => {
	const [activeRegion, setActiveRegion] = useState<string | null>(null);

	const regions = [
		{
			id: 'mizia',
			name: 'Мизия',
			color: theme.colors.rustRed,
			info: 'Характерни са белодрешните носии и северняшките хора.',
		},
		{
			id: 'trakia',
			name: 'Тракия',
			color: theme.colors.navGold,
			info: 'Богати на орнаменти носии и бавни, тежки мелодии.',
		}, // Сменен mustard с navGold
		{
			id: 'rodopi',
			name: 'Родопи',
			color: theme.colors.turquoise,
			info: 'Звукът на каба гайдата и тъмните, топли цветове на дрехите.',
		},
	];

	return (
		<motion.div
			initial={{ opacity: 0, x: -50 }}
			animate={{ opacity: 1, x: 0 }}
			style={{
				padding: '16px',
				flex: 1,
				display: 'flex',
				flexDirection: 'column',
				backgroundColor: theme.colors.bgGrey,
			}}
		>
			{/* HEADER: Дизайнът на колегата ти */}
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
					Карта
				</div>
			</header>

			<div style={{ flex: 1, overflowY: 'auto', paddingBottom: '20px' }}>
				<p style={{ textAlign: 'center', color: '#444', marginBottom: '20px' }}>
					Избери регион, за да научиш повече!
				</p>

				<div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
					{regions.map((region) => (
						<motion.div
							key={region.id}
							whileHover={{ scale: 1.02 }}
							onClick={() => setActiveRegion(region.id)}
							style={{
								backgroundColor:
									activeRegion === region.id ? '#f0f8ff' : '#ffffff',
								borderRadius: '16px',
								padding: '20px',
								boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
								cursor: 'pointer',
								borderLeft: `10px solid ${region.color}`,
							}}
						>
							<h2 style={{ margin: '0 0 10px 0', color: region.color }}>
								{region.name}
							</h2>
							{activeRegion === region.id ? (
								<motion.p
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									style={{ margin: 0, color: '#444', lineHeight: '1.5' }}
								>
									{region.info}
								</motion.p>
							) : (
								<span style={{ fontSize: '14px', color: '#888' }}>
									Кликни за детайли...
								</span>
							)}
						</motion.div>
					))}
				</div>
			</div>
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
};

export default EthnoMap;
