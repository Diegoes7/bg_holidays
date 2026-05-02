import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { type Holiday } from './data/holydays';
import CalendarScreen from './screens/CalendarScreen';
import HolidayScreen from './screens/HolidayScreen';
import QuizScreen from './screens/QuizScreen';
import './App.css'; // Твоят CSS файл

export type ScreenType = 'calendar' | 'holiday' | 'quiz';

const App: React.FC = () => {
	const [currentScreen, setCurrentScreen] = useState<ScreenType>('calendar');
	const [selectedHoliday, setSelectedHoliday] = useState<Holiday | null>(null);
	const [badges, setBadges] = useState<number>(0);

	const handleEarnBadge = () => setBadges((prev) => prev + 1);

	const handleSelectHoliday = (holiday: Holiday) => {
		setSelectedHoliday(holiday);
		setCurrentScreen('holiday');
	};

	return (
		<div
			style={{
				backgroundColor: '#F5F5DC',
				minHeight: '100vh',
				overflow: 'hidden',
			}}
		>
			<AnimatePresence mode='wait'>
				{currentScreen === 'calendar' && (
					<CalendarScreen
						key='calendar'
						badges={badges}
						onHolidayClick={handleSelectHoliday}
					/>
				)}

				{currentScreen === 'holiday' && selectedHoliday && (
					<HolidayScreen
						key='holiday'
						holiday={selectedHoliday}
						onNavigate={setCurrentScreen}
					/>
				)}

				{currentScreen === 'quiz' && selectedHoliday && (
					<QuizScreen
						key='quiz'
						holiday={selectedHoliday}
						onNavigate={setCurrentScreen}
						onEarnBadge={handleEarnBadge}
					/>
				)}
			</AnimatePresence>
		</div>
	);
};

export default App;
