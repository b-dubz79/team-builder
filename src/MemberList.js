import React from 'react'

const MemberList = props => {
    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.email}</h2>
            <h2>{props.role}</h2>
        </div>
    )
}




export default MemberList;

{members.map(member => {return <MemberForm id={member.id} name={member.name} email={member.email} role={member.role}  />} )}

//   const addNewMember = member => {
//   const newMember = {
//   name: member.name,
//   email: member.email,
//   role: member.role
// }
// setMembers([...members, newMember])
// }

return (
<MemberForm/>
<MemberList/>
)
}

