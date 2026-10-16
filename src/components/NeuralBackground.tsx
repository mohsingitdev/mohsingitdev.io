import React from 'react';
import { ConstellationField } from '@designcodeio/threeui';
import { useTheme } from '../context/ThemeContext';

export const NeuralBackground: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Claude Terracotta ambient volumetric spotlights */}
      <div className="absolute -top-32 left-1/4 w-[650px] h-[650px] bg-terracotta/15 rounded-full blur-[180px] pointer-events-none transition-opacity duration-700" />
      <div className="absolute top-1/3 -right-24 w-[550px] h-[550px] bg-terracotta/10 rounded-full blur-[200px] pointer-events-none transition-opacity duration-700" />
      <div className="absolute bottom-10 left-1/3 w-[500px] h-[500px] bg-terracotta/8 rounded-full blur-[190px] pointer-events-none transition-opacity duration-700" />

      {/* 3D WebGL Connectivity Field from ThreeUI */}
      <div className="w-full h-full opacity-65 dark:opacity-85 transition-opacity duration-500">
        <ConstellationField
          variant="connectivity-graph"
          mode={theme === 'dark' ? 'dark' : 'light'}
          density={0.8}
          speed={0.65}
          className="w-full h-full"
        />
      </div>
    </div>
  );
};
