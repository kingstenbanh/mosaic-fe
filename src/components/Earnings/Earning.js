import React from 'react'

const Earning = ({ data }) => (
  <tr className="Earning">
    <td>{ data.actualEPS }</td>
    <td>{ data.consensusEPS }</td>
    <td>{ data.yearAgo }</td>
    <td>{ (data.yearAgoChangePercent * 100).toFixed(2) }%</td>
  </tr>
);

export default Earning;