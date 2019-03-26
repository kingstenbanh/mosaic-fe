import React from 'react'

import Earning from './Earning';

import './Earnings.css';

const Earnings = ({ data }) => {
  const { symbol, earnings = [] } = data;

  return (
    <div className="Earnings">
      <h3>{ symbol }</h3>

      <table>
        <thead>
          <tr>
            <th>Actual EPS</th>
            <th>Concensus EPS</th>
            <th>Year Ago</th>
            <th>Percent Change</th>
          </tr>
        </thead>
        <tbody>
          {
            earnings.map((earning) => (
              <Earning 
                key={earning.EPSReportDate} 
                data={earning} />
            ))
          }
        </tbody>
      </table>
      
    </div>
  );
}

export default Earnings;