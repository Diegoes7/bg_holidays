import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { theme, commonStyles } from './theme';

// Импортираме данните и типовете
import { bgHolidays, type Holiday } from './data/holydays';

// Импортираме компонентите
import WheelOfTime from './screens/WheelOfTime';
import HolidayDetail from './screens/HolidayDetail';
import VirtualChest from './screens/VirtualChest';
import GamePuzzle from './screens/GamePuzzle';
import EthnoMap from './screens/EthnoMap';
import MonthView from './screens/MonthView';
import MobileNavBar from './components/MobileNavBar';

export type ScreenType =
	| 'wheel'
	| 'holiday'
	| 'chest'
	| 'map'
	| 'game'
	| 'month';

const App: React.FC = () => {	
	const [currentScreen, setCurrentScreen] = useState<ScreenType>('wheel');
	const [badges, setBadges] = useState<string[]>([]);
	const [selectedHoliday, setSelectedHoliday] = useState<Holiday | null>(null);

	const handleEarnBadge = (badgeName: string) => {
		if (!badges.includes(badgeName)) setBadges([...badges, badgeName]);
	};

	// Функция за отваряне на празник - предаваме обекта и сменяме екрана
	const openHoliday = (holiday: Holiday) => {
		setSelectedHoliday(holiday);
		setCurrentScreen('holiday');
	};

	return (
		<div style={{ backgroundColor: theme.colors.bgGrey, minHeight: '100vh' }}>
			<div style={commonStyles.appContainer}>
				<AnimatePresence mode='wait'>
					{currentScreen === 'wheel' && (
						<WheelOfTime
							key='wheel'
							badgeCount={badges.length}
							onSelectHoliday={() => {
								// НАМЕРИ ПРАЗНИКА И ГО ОТВОРИ (Вече не отваря календара!)
								const holiday = bgHolidays.find((h) => h.id === 'baba-marta');
								if (holiday) openHoliday(holiday);
							}}
							onOpenCalendar={() => setCurrentScreen('month')}
						/>
					)}

					{currentScreen === 'month' && (
						<MonthView
							key='month'
							onBack={() => setCurrentScreen('wheel')}
							onSelectHoliday={openHoliday}
						/>
					)}

					{currentScreen === 'holiday' && (
						<HolidayDetail
							key='holiday'
							holiday={selectedHoliday}
							onBack={() => setCurrentScreen('wheel')}
							onStartGame={() => setCurrentScreen('game')}
						/>
					)}

					{currentScreen === 'game' && (
						<GamePuzzle
							key='game'
							onBack={() => setCurrentScreen('holiday')}
							onWin={() => {
								handleEarnBadge(selectedHoliday?.title || 'Мисия');
								setCurrentScreen('chest');
							}}
						/>
					)}

					{currentScreen === 'chest' && (
						<VirtualChest
							key='chest'
							badges={badges}
							onBack={() => setCurrentScreen('wheel')}
						/>
					)}

					{currentScreen === 'map' && (
						<EthnoMap key='map' onBack={() => setCurrentScreen('wheel')} />
					)}
				</AnimatePresence>

				<MobileNavBar
					currentScreen={currentScreen}
					onNavigate={setCurrentScreen}
				/>
			</div>
		</div>
	);
};

export default App;
