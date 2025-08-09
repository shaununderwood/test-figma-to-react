import React from 'react';

interface StatusTagProps {
  text: string;
}

const StatusTag: React.FC<StatusTagProps> = ({ text }) => {
  return (
    <div className="passport-available-tag">
      <span className="tag-text">{text}</span>
    </div>
  );
};

export default StatusTag; 