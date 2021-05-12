import React from 'react';
import Kakeibo from '../Container/Kakeibo/kakibo';
import KakeiboProvider from '../Container/Kakeibo/Provider/provider';

const KakeiboMain: React.FC = () => {
  return (
    <KakeiboProvider>
      <Kakeibo />
    </KakeiboProvider>
  );
};

export default KakeiboMain;
