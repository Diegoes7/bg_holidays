import React, { useRef, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import multiMonthPlugin from '@fullcalendar/multimonth';
import interactionPlugin from '@fullcalendar/interaction';
import bgLocale from '@fullcalendar/core/locales/bg';
import { motion, AnimatePresence } from 'framer-motion';
import { bgHolidays, type Holiday } from '../data/holydays';
import {type DateClickArg } from '@fullcalendar/interaction';
import { type EventClickArg, type EventHoveringArg } from '@fullcalendar/core';

interface Props {
	badges: number;
	onHolidayClick: (holiday: Holiday) => void;
}

const CalendarScreen: React.FC<Props> = ({ badges, onHolidayClick }) => {
	const monthCalendarRef = useRef<FullCalendar | null>(null);

	// State за нашия popup (tooltip)
	const [tooltip, setTooltip] = useState<{
		title: string;
		description: string;
		x: number;
		y: number;
	} | null>(null);

	const handleDateClick = (info: DateClickArg) => {
		const calendarApi = monthCalendarRef.current?.getApi();
		calendarApi?.gotoDate(info.date);
	};

	const handleEventClick = (info: EventClickArg) => {
		const holiday = bgHolidays.find((h) => h.title === info.event.title);
		if (holiday) {
			onHolidayClick(holiday);
			setTooltip(null); // Скриваме popup-а, когато кликнем
		}
	};

	// Когато мишката влезе върху празник
	const handleMouseEnter = (info: EventHoveringArg) => {
		const holiday = bgHolidays.find((h) => h.title === info.event.title);
		if (holiday) {
			setTooltip({
				title: holiday.title,
				description: holiday.description,
				x: info.jsEvent.clientX, // Взимаме X координатата на мишката
				y: info.jsEvent.clientY, // Взимаме Y координатата на мишката
			});
		}
	};

	// Когато мишката излезе от празника
	const handleMouseLeave = () => {
		setTooltip(null);
	};

	return (
		<motion.div
			className='app-layout'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0, y: -50 }}
			transition={{ duration: 0.5 }}
			style={{ display: 'flex', padding: '20px', gap: '20px', height: '100vh' }}
		>
			{/* POPUP (Tooltip) Анимация */}
			<AnimatePresence>
				{tooltip && (
					<motion.div
						initial={{ opacity: 0, scale: 0.9, y: 10 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.9 }}
						transition={{ type: 'spring', stiffness: 300, damping: 20 }}
						style={{
							position: 'fixed',
							top: tooltip.y + 15, // Показваме го леко под мишката
							left: tooltip.x - 150, // и леко вдясно
							backgroundColor: 'rgba(255, 255, 255, 0.95)',
							backdropFilter: 'blur(10px)',
							border: '1px solid rgba(0, 0, 0, 0.1)',
							borderRadius: '12px',
							padding: '12px 16px',
							boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
							pointerEvents: 'none', // За да не пречи на кликането
							zIndex: 9999, // Винаги най-отгоре
							maxWidth: '250px',
						}}
					>
						<h4
							style={{
								margin: '0 0 5px 0',
								color: '#B71C1C',
								fontSize: '14px',
							}}
						>
							{tooltip.title}
						</h4>
						<p
							style={{
								margin: 0,
								fontSize: '12px',
								color: '#555',
								lineHeight: '1.4',
							}}
						>
							{tooltip.description}
						</p>
					</motion.div>
				)}
			</AnimatePresence>

			{/* ЛЯВА ЧАСТ: 2/3 екран - Цялата година */}
			<motion.div
				className='year-container glass-panel'
				initial={{ opacity: 0, x: -50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ type: 'spring', stiffness: 100, damping: 20 }}
				style={{
					flex: 2,
					backgroundColor: 'rgba(255,255,255,0.8)',
					borderRadius: '20px',
					padding: '20px',
					overflowY: 'auto',
				}}
			>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<h1 style={{ color: '#B71C1C' }}>Български Празници 2026</h1>
					<div
						style={{ fontSize: '18px', fontWeight: 'bold', color: '#F57F17' }}
					>
						Твоите значки: {badges} 🏅
					</div>
				</div>
				<FullCalendar
					plugins={[multiMonthPlugin, interactionPlugin]}
					initialView='multiMonthYear'
					locales={[bgLocale]}
					locale='bg'
					events={bgHolidays}
					dateClick={handleDateClick}
					eventClick={handleEventClick}
					height='auto'
					headerToolbar={false}
				/>
			</motion.div>

			{/* ДЯСНА ЧАСТ: 1/3 екран - Избраният месец */}
			<motion.div
				className='month-container glass-panel'
				initial={{ opacity: 0, x: 50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
				style={{
					flex: 1,
					backgroundColor: 'rgba(255,255,255,0.8)',
					borderRadius: '20px',
					padding: '20px',
				}}
			>
				<FullCalendar
					ref={monthCalendarRef}
					plugins={[dayGridPlugin, interactionPlugin]}
					initialView='dayGridMonth'
					locales={[bgLocale]}
					locale='bg'
					events={bgHolidays}
					eventClick={handleEventClick}
					eventMouseEnter={handleMouseEnter} // ТУК закачаме hover-а
					eventMouseLeave={handleMouseLeave} // ТУК скриваме при махане на мишката
					height='100%'
					headerToolbar={{
						left: 'title',
						right: 'prev,next today',
					}}
				/>
			</motion.div>
		</motion.div>
	);
};

export default CalendarScreen;
