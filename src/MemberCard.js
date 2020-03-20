import React, {usesState} from 'react'
import TeamMembers from './Data'

const MemberCard = (TeamMembers) =>  {
    const [members, setMembers] = useState([]);

    
        
    
    // {members.map(member => {return <MemberForm id={member.id} name={member.name} email={member.email} role={member.role}  />} )}
return (
    <MemberForm/>
    <MemberList/>
)
}




export default MemberCard;