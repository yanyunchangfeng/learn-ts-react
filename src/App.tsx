import React, { FC } from 'react';
import { GlobalStyle, WrapContainer } from 'src/index.style';
import { LifeCycle, Other } from 'src/components';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <WrapContainer>
        <Router>
          <Routes>
            <Route path="/" element={<LifeCycle />} />
            <Route path="/other" element={<Other />} />
          </Routes>
        </Router>
      </WrapContainer>
    </>
  );
};

export default App;
