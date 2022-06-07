import { useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';

const styles = {
  container: {
    boxSizing: 'border-box',
    width: '80%',
    margin: 'auto',
    textAlign: 'center',
  },
  uuid: {
    backgroundColor: '#487eb0',
    borderRadius: 10,
    color: '#f5f6fa',
    paddingTop: 5,
    paddingBottom: 5,
    height: 51,
  },
  spinner: {
    margin: 'auto',
    marginTop: 20,
    width: 50,
    height: 50,
    color: '#7f8fa6',
    borderRadius: 10,
    borderColor: '#dcdde1',
    backgroundColor: '#f5f6fa',
    boxShadow: '5px 5px 5px #7f8fa6'
  },
}

function App() {
  const [id, setId] = useState('');
  const generateId = () => setId(() => uuidv4());
  return (
    <>
      <div style={styles.container}>
        <h1>uuid generator</h1>
        <div style={styles.uuid}>
          <p>{id}</p>
        </div>
        <button onClick={generateId} style={styles.spinner}>
          {/* icon from https://heroicons.com/ */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>
      </div>
    </>
  );
}

export default App;
