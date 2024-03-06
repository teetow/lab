import React from 'react';

interface Props {
  value: number; // The float value between 0 and 1
  radius: number; // The radius of the arc
  strokeWidth: number; // The width of the arc stroke
}

const Arc: React.FC<Props> = ({ value, radius, strokeWidth }) => {
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = `${circumference} ${circumference}`;
  const strokeDashoffset = circumference * (1 - value);

  return (
    <svg width={radius * 2} height={radius * 2}>
      <circle
        cx={radius}
        cy={radius}
        r={radius - strokeWidth / 2}
        fill="none"
        stroke="#000"
        strokeWidth={strokeWidth}
        strokeDasharray={strokeDasharray}
        strokeDashoffset={strokeDashoffset}
      />
    </svg>
  );
};

export default Arc;