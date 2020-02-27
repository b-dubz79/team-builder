import React, {useState} from 'react';

import logo from './logo.svg';
import './App.css';
import MemberForm from './MemberForm'
import TeamMembers from './Data'

function App() {
  const MemberCard = () =>  {
    const [members, setMembers] = useState(TeamMembers);
    {members.map(member => {return <MemberForm id={member.id} name={member.name} email={member.email} role={member.role}  />} )}
//   const [members, setMembers] = useState(TeamMembers);
   
// console.log('something', members);
  
  //   const addNewMember = member => {
  //   const newMember = {
  //   name: member.name,
  //   email: member.email,
  //   role: member.role
  // }
  // setMembers([...members, newMember])
  // }

  return (
    <div className="App">
    <MemberList members={members}/>
    </div>
  );
}
// {starInfo.map(userObj => {return <CharCard name = {userObj.name} gender = {userObj.gender}/>})}
export default App;
