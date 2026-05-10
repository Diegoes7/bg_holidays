import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { theme, commonStyles } from '../theme';

interface Props {
  onBack: () => void;
}

const EthnoMap: React.FC<Props> = ({ onBack }) => {
  const [activeRegion, setActiveRegion] = useState<string | null>(null);

  const regions = [
    { id: 'mizia', name: 'Мизия', color: theme.colors.rustRed, info: 'Характерни са белодрешните носии и северняшките хора.' },
    { id: 'trakia', name: 'Тракия', color: theme.colors.mustard, info: 'Богати на орнаменти носии и бавни, тежки мелодии.' },
    { id: 'rodopi', name: 'Родопи', color: theme.colors.turquoise, info: 'Звукът на каба гайдата и тъмните, топли цветове на дрехите.' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: -50 }} 
      animate={{ opacity: 1, x: 0 }} 
      style={{ padding: '20px', minHeight: '100vh', backgroundColor: theme.colors.background }}
    >
      <button onClick={onBack} style={{ color: theme.colors.turquoise, border: 'none', background: 'none', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold' }}>
        ⬅ Към Календара
      </button>
      
      <h1 style={{ color: theme.colors.turquoise, textAlign: 'center', fontFamily: theme.fonts.kids }}>🗺️ Етнографска Карта</h1>
      <p style={{ textAlign: 'center', color: theme.colors.text }}>Избери регион, за да научиш повече за неговите традиции и носии!</p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '500px', margin: '30px auto' }}>
        {regions.map((region) => (
          <motion.div 
            key={region.id}
            whileHover={{ scale: 1.02 }}
            onClick={() => setActiveRegion(region.id)}
            style={{ 
              ...commonStyles.glassPanel, 
              cursor: 'pointer', 
              borderLeft: `10px solid ${region.color}`,
              backgroundColor: activeRegion === region.id ? '#f0f8ff' : 'rgba(255,255,255,0.8)'
            }}
          >
            <h2 style={{ margin: '0 0 10px 0', color: region.color }}>{region.name}</h2>
            {activeRegion === region.id ? (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ margin: 0, fontStyle: 'italic' }}>
                {region.info}
              </motion.p>
            ) : (
              <span style={{ fontSize: '14px', color: '#888' }}>Кликни за детайли...</span>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default EthnoMap;