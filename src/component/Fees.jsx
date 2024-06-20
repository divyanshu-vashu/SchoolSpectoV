import React from 'react';
import '../styles/Fees.css';

const feeData = [
  { class: '1th class', fee: '5000' },
  { class: '2th class', fee: '5500' },
  { class: '3th class', fee: '6000' },
  { class: '4th class', fee: '6500' },
  { class: '5th class', fee: '7000' },
  { class: '6th class', fee: '7500' },
  { class: '7th class', fee: '8000' },
];

const Fees = () => {
  return (
    <div className="landing-page">
      <div className="fee-section">
        <h2>Fee Structure</h2>
        <table className="fee-table">
          <thead>
            <tr>
              <th>Class</th>
              <th>Fee (INR)</th>
            </tr>
          </thead>
          <tbody>
            {feeData.map((item, index) => (
              <tr key={index}>
                <td>{item.class}</td>
                <td>{item.fee}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Fees;
