export const theme = {
  colors: {
    rustRed: '#9b2226',    // Неговото червено
    turquoise: '#3392be',  // Неговото синьо за икони
    bgGrey: '#f4f4f5',     // Фон на тялото
    pills: '#f1f1f1',      // Сивите заоблени заглавия
    white: '#ffffff',
    text: '#222222',
    // Цветовете за иконите в навигацията
    navPink: '#de368e',
    navRed: '#e63946',
    navGreen: '#2a9d8f',
    navGold: '#e9c46a'
  },
  fonts: {
    main: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    kids: '"Comic Sans MS", cursive, sans-serif'
  }
};

export const commonStyles = {
  appContainer: {
    maxWidth: '420px',
    minHeight: '100vh',
    margin: '0 auto',
    background: '#ffffff',
    display: 'flex',
    flexDirection: 'column' as const,
    position: 'relative' as const,
    boxShadow: '0 0 20px rgba(0,0,0,0.1)',
    overflow: 'hidden'
  },
  pillTitle: {
    alignSelf: 'center',
    background: '#f1f1f1',
    padding: '10px 24px',
    borderRadius: '20px',
    fontSize: '17px',
    fontWeight: '600',
    color: '#222',
    fontFamily: '-apple-system, sans-serif'
  }
};




// export const theme = {
//   colors: {
//     rustRed: '#B71C1C',
//     turquoise: '#00838F',
//     gold: '#F57F17',
//     mustard: '#E4A81E',
//     background: '#FFFDF7',
//     white: '#FFFFFF',
//     text: '#333333'
//   },
//   fonts: {
//     main: '"Times New Roman", Times, serif', // Класически [cite: 270]
//     kids: '"Comic Sans MS", cursive, sans-serif' // Ръкописен стил [cite: 271]
//   }
// };

// export const commonStyles = {
//   glassPanel: {
//     background: 'rgba(255, 255, 255, 0.85)',
//     backdropFilter: 'blur(12px)',
//     borderRadius: '20px',
//     border: '1px solid rgba(255, 255, 255, 0.3)',
//     boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2)',
//     padding: '20px'
//   }
// };