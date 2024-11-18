import React, { FC } from 'react';
import { GlobalStyle, WrapContainer } from 'src/index.style';
import { LifeCycle, Other, WrapPage, Counter } from 'src/components';
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
            <Route path="/wrap" element={<WrapPage />} />
            <Route path="/counter" element={<Counter />} />
          </Routes>
        </Router>
      </WrapContainer>
    </>
  );
};

export default App;
