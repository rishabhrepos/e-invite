import React from 'react';

const petalsConfig = [
  { x: '12%', size: '17px', drift: '-19px', turn: '24deg', fall: '5.8s', delay: '0s' },
  { x: '42%', size: '21px', drift: '12px', turn: '180deg', fall: '6.2s', delay: '0.4s' },
  { x: '88%', size: '14px', drift: '-25px', turn: '93deg', fall: '4.9s', delay: '0.9s' },
  { x: '29%', size: '25px', drift: '41px', turn: '247deg', fall: '7.1s', delay: '0.2s' },
  { x: '58%', size: '18px', drift: '-32px', turn: '61deg', fall: '5.4s', delay: '0.7s' },
  { x: '3%', size: '20px', drift: '16px', turn: '315deg', fall: '6.6s', delay: '1.2s' },
  { x: '94%', size: '24px', drift: '4px', turn: '302deg', fall: '7.3s', delay: '1s' },
  { x: '76%', size: '16px', drift: '33px', turn: '9deg', fall: '5.1s', delay: '0.3s' },
  { x: '23%', size: '23px', drift: '-38px', turn: '76deg', fall: '6.4s', delay: '0.8s' },
  { x: '70%', size: '19px', drift: '-9px', turn: '143deg', fall: '7.7s', delay: '0.1s' },
  { x: '17%', size: '15px', drift: '20px', turn: '210deg', fall: '5.5s', delay: '0.6s' },
  { x: '64%', size: '22px', drift: '49px', turn: '277deg', fall: '6.8s', delay: '1.1s' },
];

export const FloatingPetals: React.FC = () => {
  return (
    <div className="petals" aria-hidden="true">
      {petalsConfig.map((p, idx) => (
        <span
          key={idx}
          style={{
            // @ts-expect-error CSS variables
            '--x': p.x,
            '--size': p.size,
            '--drift': p.drift,
            '--turn': p.turn,
            '--fall': p.fall,
            '--delay': p.delay,
          }}
        />
      ))}
    </div>
  );
};
