import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { type ScreenType } from '../App';
import { type Holiday } from '../data/holydays';
import { styles } from '../styles';

interface Props {
	holiday: Holiday;
	onNavigate: (screen: ScreenType) => void;
	onEarnBadge: () => void;
}

const QuizScreen: React.FC<Props> = ({ holiday, onNavigate, onEarnBadge }) => {
	const [answered, setAnswered] = useState<boolean>(false);
	const [isCorrect, setIsCorrect] = useState<boolean>(false);
	const quiz = holiday.quiz;

	const handleAnswer = (index: number) => {
		setAnswered(true);
		const correct = index === quiz.correctIndex;
		setIsCorrect(correct);
		if (correct) {
			onEarnBadge();
		}
	};

	return (
		<motion.div
			style={styles.screenWrapper}
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 50 }}
			transition={{ type: 'spring', stiffness: 200, damping: 20 }}
		>
			<div style={styles.container}>
				<button style={styles.backButton} onClick={() => onNavigate('holiday')}>
					⬅ Назад
				</button>
				<h1 style={styles.header}>Мисия: {holiday.title}</h1>

				<div style={styles.card}>
					<h3>Въпрос:</h3>
					<p style={{ fontSize: '18px', fontWeight: 'bold' }}>
						{quiz.question}
					</p>

					{!answered ? (
						<div style={styles.buttonGroup}>
							{quiz.options.map((option, idx) => (
								<motion.button
									key={idx}
									style={styles.quizButton}
									whileHover={{ scale: 1.03, backgroundColor: '#d0d0d0' }}
									whileTap={{ scale: 0.95 }}
									onClick={() => handleAnswer(idx)}
								>
									{option}
								</motion.button>
							))}
						</div>
					) : (
						<motion.div
							style={styles.result}
							initial={{ scale: 0.8, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
						>
							{isCorrect ? (
								<>
									<h2 style={{ color: '#27ae60' }}>
										Браво! Ти спечели нова значка! 🎉🏅
									</h2>
									<p>Справи се отлично с тази мисия!</p>
								</>
							) : (
								<>
									<h2 style={{ color: '#c0392b' }}>
										Опитай пак следващия път!
									</h2>
									<p>
										Правилният отговор е:{' '}
										<b>{quiz.options[quiz.correctIndex]}</b>
									</p>
								</>
							)}
							<motion.button
								style={{ ...styles.actionButton, backgroundColor: '#00838F' }}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								onClick={() => onNavigate('month')}
							>
								🏠 Към календара
							</motion.button>
						</motion.div>
					)}
				</div>
			</div>
		</motion.div>
	);
};

export default QuizScreen;
