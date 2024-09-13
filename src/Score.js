
import React from 'react';

function Score({ scores = { X: 0, O: 0 } }) {
  return (
    <div style={scoreContainerStyle}>
      <h2 style={titleStyle}>Current Scores</h2>
      <div style={scoreBoxStyle}>
        <div style={playerScoreStyle}>
          <span style={playerLabelStyle}>X:</span> {scores.X}
        </div>
        <div style={playerScoreStyle}>
          <span style={playerLabelStyle}>O:</span> {scores.O}
        </div>
      </div>
    </div>
  );
}

const scoreContainerStyle = {
  border: '2px solid #122936', 
  borderRadius: '10px',
  padding: '10px 20px',
  marginTop: '10px',
  backgroundColor: '#f1f5f5', 
  textAlign: 'center',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const titleStyle = {
  margin: '0 0 10px 0',
  fontSize: '20px',
  color: '#122936', 
};

const scoreBoxStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: '18px',
  color: '#2b2733', 
};

const playerScoreStyle = {
  padding: '5px 15px',
  borderRadius: '8px',
  backgroundColor: '#cdd4d8', 
};

const playerLabelStyle = {
  fontWeight: 'bold',
  marginRight: '5px',
};

export default Score;
