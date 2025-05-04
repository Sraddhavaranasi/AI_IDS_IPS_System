import React from 'react';

const LogTable = ({ logs }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Protocol</th>
          <th>Port</th>
          <th>Bytes Sent</th>
          <th>Bytes Received</th>
          <th>Prediction</th>
        </tr>
      </thead>
      <tbody>
        {logs.map((log, index) => (
          <tr key={index}>
            <td>{log.protocol}</td>
            <td>{log.port}</td>
            <td>{log.bytes_sent}</td>
            <td>{log.bytes_received}</td>
            <td>{log.prediction}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LogTable;
