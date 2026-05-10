import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { theme, commonStyles } from '../theme';

interface Props {
	onBack: () => void;
	onWin: () => void;
}

const GamePuzzle: React.FC<Props> = ({ onBack, onWin }) => {
	const [piecesFound, setPiecesFound] = useState<number>(0);

	const handleFindPiece = () => {
		const newCount = piecesFound + 1;
		setPiecesFound(newCount);

		if (newCount === 2) {
			setTimeout(() => {
				onWin();
			}, 1000);
		}
	};

	return (
		<motion.div
			initial={{ scale: 0.9, opacity: 0 }}
			animate={{ scale: 1, opacity: 1 }}
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
					Мисия
				</div>
			</header>

			<div
				style={{
					flex: 1,
					overflowY: 'auto',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<h2
					style={{
						color: theme.colors.rustRed,
						textAlign: 'center',
						fontFamily: theme.fonts.kids,
						marginBottom: '10px',
					}}
				>
					Предизвикателство
				</h2>
				<p style={{ textAlign: 'center', color: '#444', marginBottom: '30px' }}>
					Открий и свържи двата цвята!
				</p>

				<div
					style={{
						backgroundColor: '#ffffff',
						borderRadius: '16px',
						padding: '40px 20px',
						boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
						display: 'flex',
						justifyContent: 'center',
						gap: '30px',
						width: '100%',
						maxWidth: '350px',
					}}
				>
					<motion.div
						whileHover={{ scale: piecesFound < 2 ? 1.1 : 1 }}
						onClick={piecesFound === 0 ? handleFindPiece : undefined}
						style={{
							width: '90px',
							height: '90px',
							backgroundColor: piecesFound > 0 ? '#f1f2f6' : '#ddd',
							borderRadius: '50%',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							cursor: piecesFound === 0 ? 'pointer' : 'default',
							border: '4px solid #ccc',
							boxShadow:
								piecesFound > 0 ? '0 0 15px rgba(255,255,255,0.8)' : 'none',
						}}
					>
						{piecesFound > 0 && <span style={{ fontSize: '30px' }}>🤍</span>}
					</motion.div>

					<motion.div
						whileHover={{ scale: piecesFound === 1 ? 1.1 : 1 }}
						onClick={piecesFound === 1 ? handleFindPiece : undefined}
						style={{
							width: '90px',
							height: '90px',
							backgroundColor: piecesFound > 1 ? theme.colors.rustRed : '#ddd',
							borderRadius: '50%',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							cursor: piecesFound === 1 ? 'pointer' : 'default',
							border: '4px solid #ccc',
							boxShadow:
								piecesFound > 1 ? `0 0 15px ${theme.colors.rustRed}` : 'none',
						}}
					>
						{piecesFound > 1 && <span style={{ fontSize: '30px' }}>❤️</span>}
					</motion.div>
				</div>

				{piecesFound === 2 && (
					<motion.div
						initial={{ y: 50, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						style={{
							textAlign: 'center',
							color: theme.colors.navGreen,
							marginTop: '30px',
						}}
					>
						<h2 style={{ marginBottom: '10px' }}>Браво, ти успя! 🎉</h2>
						<p>Значката се добавя в твоята ракла...</p>
					</motion.div>
				)}
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

export default GamePuzzle;
