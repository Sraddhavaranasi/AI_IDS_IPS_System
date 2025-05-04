import React, { useState } from 'react';
import axios from 'axios';

const Dashboard = ({ onSignOut }) => {
  const [protocol, setProtocol] = useState('');
  const [port, setPort] = useState('');
  const [bytesSent, setBytesSent] = useState('');
  const [bytesReceived, setBytesReceived] = useState('');
  const [sourceIp, setSourceIp] = useState('');
  const [destinationIp, setDestinationIp] = useState('');
  const [prediction, setPrediction] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage("Analyzing traffic...");
    setPrediction('');
    setError('');

    const data = {
      protocol,
      port: parseInt(port),
      bytes_sent: parseInt(bytesSent),
      bytes_received: parseInt(bytesReceived),
      source_ip: sourceIp,
      destination_ip: destinationIp,
    };

    try {
      const response = await axios.post('http://127.0.0.1:8000/detect', data);
      const result = response.data;
      setPrediction(result.prediction);

      if (result.threat_detected) {
        setStatusMessage(`Threat Detected! Blocking IP ${result.blocked_ip}...`);
        setTimeout(() => {
          setStatusMessage(`[IPS] Blocked IP ${result.blocked_ip} using Windows Firewall.`);
        }, 1500);
      } else {
        setStatusMessage("No threat detected. Traffic is normal.");
      }

    } catch (err) {
      setError('Error detecting threat.');
      setStatusMessage('');
      console.error(err);
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <button
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          width: '80px',
          height: '30px',
          backgroundColor: '#f44336',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '12px',
        }}
        onClick={onSignOut}
      >
        Sign Out
      </button>

      <h2>Vijaya Enterprises - IDS/IPS Dashboard</h2>
      <form onSubmit={handleSubmit}>
        <div><label>Protocol</label><input type="text" value={protocol} onChange={(e) => setProtocol(e.target.value)} required /></div>
        <div><label>Port</label><input type="number" value={port} onChange={(e) => setPort(e.target.value)} required /></div>
        <div><label>Bytes Sent</label><input type="number" value={bytesSent} onChange={(e) => setBytesSent(e.target.value)} required /></div>
        <div><label>Bytes Received</label><input type="number" value={bytesReceived} onChange={(e) => setBytesReceived(e.target.value)} required /></div>
        <div><label>Source IP</label><input type="text" value={sourceIp} onChange={(e) => setSourceIp(e.target.value)} /></div>
        <div><label>Destination IP</label><input type="text" value={destinationIp} onChange={(e) => setDestinationIp(e.target.value)} /></div>
        <button type="submit">Detect Threat</button>
      </form>

      {prediction && <div><h3>Prediction: {prediction}</h3></div>}
      {statusMessage && <p style={{ color: 'blue', fontWeight: 'bold' }}>{statusMessage}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Dashboard;
