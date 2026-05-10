export interface Quiz {
  question: string;
  options: string[];
  correctIndex: number;
}

export interface Holiday {
  id: string;
  title: string;
  date: string; // Формат: YYYY-MM-DD
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
    id: 'kukeri', title: 'Кукери / Сурва', date: '2026-01-14', color: '#795548',
    description: 'Страшни маски и силни звуци на чанове, за да се изгонят злите сили!',
    symbols: 'Кукерски маски, чанове, кожи.',
    quiz: { question: 'Каква е целта на кукерите?', options: ['Да плашат децата', 'Да изгонят злите духове', 'Да събират храна'], correctIndex: 1 }
  },
  {
    id: 'baba-marta', title: 'Баба Марта', date: '2026-03-01', color: '#B71C1C',
    description: 'Стара българска традиция за посрещане на пролетта.',
    symbols: 'Мартеница (бяло и червено), Пижо и Пенда.',
    quiz: { question: 'Кои са цветовете на мартеницата?', options: ['Синьо и Зелено', 'Бяло и Червено', 'Жълто и Черно'], correctIndex: 1 }
  },
  {
    id: 'osvobojdenie', title: 'Освобождение', date: '2026-03-03', color: '#e74c3c',
    description: 'Националният празник на България!',
    symbols: 'Българското знаме, Паметникът на Шипка.',
    quiz: { question: 'Къде са битките?', options: ['Шипка', 'Мусала', 'Ботев'], correctIndex: 0 }
  },
  {
    id: 'pismenost', title: 'Кирил и Методий', date: '2026-05-24', color: '#8e44ad',
    description: 'Празник на българската азбука и култура.',
    symbols: 'Буквите А, Б, В, венци от божури.',
    quiz: { question: 'Кой е създал азбуката?', options: ['Кирил и Методий', 'Христо Ботев', 'Васил Левски'], correctIndex: 0 }
  },
  {
    id: 'koleda', title: 'Коледа', date: '2026-12-25', color: '#c0392b',
    description: 'Рождество Христово – светъл семеен празник.',
    symbols: 'Елха, коледари, постни ястия.',
    quiz: { question: 'Кога е Бъдни вечер?', options: ['24 декември', '25 декември', '31 декември'], correctIndex: 0 }
  }
];