import React from 'react';

const SkillBar = ({ skill, percentage }) => {
  const barStyle = {
    width: `${percentage}%`,
    background: 'linear-gradient(90deg, #003ebbff, #5600a7ff)',
    height: '8px',
    borderRadius: '10px',
    transition: 'width 1s ease-in-out',
  };

  return (
    <div style={{ marginBottom: '15px' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '5px',
        fontWeight: 'bold'
      }}>
        <span>{skill}</span>
        <span>{percentage}%</span>
      </div>

      <div style={{
        background: '#e0e0e0',
        height: '8px',
        borderRadius: '10px',
        overflow: 'hidden'
      }}>
        <div style={barStyle}></div>
      </div>
    </div>
  );
};

export default SkillBar;
