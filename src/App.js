import React, { useState, useEffect, useReducer } from 'react';
import { Router } from '@reach/router';

import './App.css';

import { SearchField, Earnings } from './components'
import { StocksPage, StockDetailPage } from './pages';

import reducer from './reducer';
import initialState from './state';

import { API_URL, TOKEN } from './constants';

const App = () => {
  const [state, dispatch] = useReducer(initialState, reducer);
  const [earnings, setEarnings] = useState({});
  
  const search = (symbol, count = 5) => {
    const url = `${API_URL}/${symbol}/earnings/${count}?token=${TOKEN}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setEarnings(data);
      })
      .catch((e) => console.log(e));
  }

  useEffect(() => {
    search('AAPL');
  }, []);

  return (
    <div className="App">
      <SearchField action={search} />

      <Earnings data={earnings} />

      {/* <Router>
        <StocksPage path="earning" data={earnings}>
          <StockDetailPage path=":earningId" />
        </StocksPage>
      </Router> */}
    </div>
  )
}

export default App;
