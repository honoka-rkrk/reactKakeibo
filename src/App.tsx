import React from 'react';
import './App.css';
import Kakeibo from './kakeibo/Component/main';
import KakeiboProvider from './kakeibo/Container/LeftComponent/Provider/provider';

const App: React.FC = () => {
  return (
    <KakeiboProvider>
      <Kakeibo />
    </KakeiboProvider>
  );
};

export default App;
