import React from 'react';
import './App.css';
import { LoginForm } from './app/components/LoginForm';

function App() {
  /* istanbul ignore next */
  return (
    <div className="App">
      <div className="App-header">
        <LoginForm />
      </div>
    </div>
  );
}

export default App;
