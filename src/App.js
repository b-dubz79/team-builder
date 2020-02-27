import React, {useState} from 'react';

import logo from './logo.svg';
import './App.css';
import MemberForm from './MemberForm'
import data from './Data'
import MemberList from './MemberList'

function App() {
  
    const [members, setMembers] = useState(data);

   

  
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
    <MemberForm addNewMember={addNewMember}/>
    {members.map(member => {return <MemberList id={member.id} name={member.name} email={member.email} role={member.role}  />} )}
    </div>
  );
}

export default App;
