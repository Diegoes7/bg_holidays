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
    
    // Ако детето намери и двете части, печели играта!
    if (newCount === 2) {
      setTimeout(() => {
        onWin(); // Извикваме функцията, която ще добави значката и ще смени екрана
      }, 1000);
    }
  };

  return (
    <motion.div 
      initial={{ scale: 0.8, opacity: 0 }} 
      animate={{ scale: 1, opacity: 1 }} 
      style={{ padding: '20px', minHeight: '100vh', backgroundColor: theme.colors.background }}
    >
      <button onClick={onBack} style={{ color: theme.colors.turquoise, border: 'none', background: 'none', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold' }}>
        ⬅ Откажи мисията
      </button>
      
      <h1 style={{ color: theme.colors.rustRed, textAlign: 'center', fontFamily: theme.fonts.kids }}>Предизвикателство: Мартеница</h1>
      <p style={{ textAlign: 'center', fontSize: '18px', color: theme.colors.text }}>Открий и свържи двата цвята, за да получиш значка!</p>
      
      <div style={{ ...commonStyles.glassPanel, display: 'flex', justifyContent: 'center', gap: '30px', margin: '40px auto', maxWidth: '400px' }}>
        
        {/* Бутон за Бялата част */}
        <motion.div 
          whileHover={{ scale: piecesFound < 2 ? 1.1 : 1 }}
          onClick={piecesFound === 0 ? handleFindPiece : undefined}
          style={{ 
            width: '100px', height: '100px', backgroundColor: piecesFound > 0 ? '#f1f2f6' : '#ddd', 
            borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', 
            cursor: piecesFound === 0 ? 'pointer' : 'default', border: '4px solid #ccc',
            boxShadow: piecesFound > 0 ? '0 0 15px rgba(255,255,255,0.8)' : 'none'
          }}
        >
          {piecesFound > 0 && <span style={{ fontSize: '30px' }}>🤍</span>}
        </motion.div>

        {/* Бутон за Червената част */}
        <motion.div 
          whileHover={{ scale: piecesFound === 1 ? 1.1 : 1 }}
          onClick={piecesFound === 1 ? handleFindPiece : undefined}
          style={{ 
            width: '100px', height: '100px', backgroundColor: piecesFound > 1 ? theme.colors.rustRed : '#ddd', 
            borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', 
            cursor: piecesFound === 1 ? 'pointer' : 'default', border: '4px solid #ccc',
            boxShadow: piecesFound > 1 ? `0 0 15px ${theme.colors.rustRed}` : 'none'
          }}
        >
          {piecesFound > 1 && <span style={{ fontSize: '30px' }}>❤️</span>}
        </motion.div>

      </div>

      {piecesFound === 2 && (
        <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} style={{ textAlign: 'center', color: '#4caf50' }}>
          <h2>Браво, ти успя! 🎉</h2>
          <p>Значката се добавя в твоята ракла...</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default GamePuzzle;