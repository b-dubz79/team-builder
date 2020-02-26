import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [members, setMembers] = useState([
    {
      name: 'Brian',
      email: 'butts@gmail.com',
      role: 'Web Developer'
    },
    {
      name: 'Taryn',
      email: 'email@gmail.com',
      role: 'Nurse'
    },
    {
      name: 'Fin',
      email: 'unicorns@gmail.com',
      role: 'Student',
    }

  ])

  const addNewMember = member => {
    const newMember = {
    name: member.name,
    email: member.email,
    role: member.role
  }
  setMembers([...members, newMember])
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
