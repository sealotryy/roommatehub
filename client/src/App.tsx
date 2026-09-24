import { useEffect, useState } from 'react';
import './App.css';

type HealthResponse = {
  status: string;
  service: string;
  database?: string;
};

function App() {
  const [apiStatus, setApiStatus] = useState('Checking API connection…');

  useEffect(() => {
    async function checkApi() {
      try {
        const response = await fetch('http://localhost:4000/api/health');

        if (!response.ok) {
          throw new Error('Health check failed');
        }

        const data = (await response.json()) as HealthResponse;
        setApiStatus(`API: ${data.status} · Database: ${data.database ?? 'not configured'}`);
      } catch {
        setApiStatus('Unable to connect to the RoommateHub API.');
      }
    }

    void checkApi();
  }, []);

  return (
    <main className="app">
      <section className="hero" aria-labelledby="page-title">
        <p className="eyebrow">RoommateHub</p>
        <h1 id="page-title">Share the home. Not the confusion.</h1>
        <p className="description">
          Coordinate chores, shared expenses, and household tasks in one place.
        </p>
        <p className="api-status" role="status">{apiStatus}</p>
        <button type="button">Get started</button>
      </section>
    </main>
  );
}

export default App;
