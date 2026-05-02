import React from 'react';

export const styles: { [key: string]: React.CSSProperties } = {
  screenWrapper: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%' },
  container: { width: '100%', maxWidth: '500px', backgroundColor: '#FFFFFF', padding: '30px', borderRadius: '20px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', position: 'relative' },
  header: { color: '#B71C1C', textAlign: 'center', marginBottom: '5px', fontSize: '28px' },
  backButton: { backgroundColor: 'transparent', border: 'none', color: '#00838F', fontSize: '16px', cursor: 'pointer', marginBottom: '15px', fontWeight: 'bold', display: 'flex', alignItems: 'center' },
  date: { textAlign: 'center', fontStyle: 'italic', color: '#888', marginTop: '0', marginBottom: '20px' },
  card: { backgroundColor: '#F8F9FA', padding: '20px', borderRadius: '15px', margin: '15px 0', borderLeft: '6px solid #e0e0e0', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' },
  actionButton: { width: '100%', padding: '18px', backgroundColor: '#B71C1C', color: 'white', border: 'none', borderRadius: '12px', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer', marginTop: '20px', boxShadow: '0 4px 10px rgba(183, 28, 28, 0.3)' },
  buttonGroup: { display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '20px' },
  quizButton: { padding: '15px', backgroundColor: '#ecf0f1', color: '#2c3e50', border: 'none', borderRadius: '10px', fontSize: '16px', cursor: 'pointer', fontWeight: 'bold', textAlign: 'left', transition: 'background-color 0.2s' },
  result: { textAlign: 'center', marginTop: '20px' }
};