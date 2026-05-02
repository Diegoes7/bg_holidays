export interface Quiz {
  question: string;
  options: string[];
  correctIndex: number;
}

export interface Holiday {
  id: string;
  title: string;
  date: string;
  color: string;
  description: string;
  symbols: string;
  quiz: Quiz;
}

export const bgHolidays: Holiday[] = [
  {
    id: 'new-year', title: 'Нова Година', date: '2026-01-01', color: '#ff9f89',
    description: 'Началото на новата календарна година. Сурвакарите обикалят за здраве и берекет!',
    symbols: 'Сурвачка, баница с късмети, фойерверки.',
    quiz: { question: 'От какво се прави традиционната сурвачка?', options: ['Дряново клонче', 'Борово клонче', 'Върбово клонче'], correctIndex: 0 }
  },
  {
    id: 'baba-marta', title: 'Баба Марта', date: '2026-03-01', color: '#B71C1C', // Добавен за примера
    description: 'Стара българска традиция за посрещане на пролетта и пробуждането на природата.',
    symbols: 'Мартеница (бяло и червено), Пижо и Пенда. Връзват се за здраве.',
    quiz: { question: 'Кои са двата основни цвята на мартеницата?', options: ['Синьо и Зелено', 'Бяло и Червено', 'Жълто и Черно'], correctIndex: 1 }
  },
  {
    id: 'osvobojdenie', title: 'Освобождението на България', date: '2026-03-03', color: '#e74c3c',
    description: 'Националният празник на България! Денят, в който е подписан Санстефанският мирен договор.',
    symbols: 'Българското знаме (бяло, зелено, червено), Паметникът на Шипка.',
    quiz: { question: 'Къде се водят най-решителните битки за Освобождението?', options: ['Връх Шипка', 'Връх Мусала', 'Връх Ботев'], correctIndex: 0 }
  },
  {
    id: 'trud', title: 'Ден на труда', date: '2026-05-01', color: '#f39c12',
    description: 'Ден на труда и на международната работническа солидарност.',
    symbols: 'Пролетни цветя, манифестации, почивка сред природата.',
    quiz: { question: 'Какво се чества на 1-ви май?', options: ['Ден на храбростта', 'Ден на труда', 'Ден на детето'], correctIndex: 1 }
  },
  // Можеш да попълниш описанията и за останалите...
];