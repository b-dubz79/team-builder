import React, {useState} from 'react'

const MemberForm = (props) => {
    
    const [newMember, setNewMember] = useState({
        name: '',
        email:'',
        role: ''
    })

    const handleNameChange = e => {
        setNewMember({
            ...newMember, name:e.target.value
        })
    }
    const handleEmailChange = e => {
        setNewMember({
            ...newMember, email:e.target.value
        })
    }
    const handleRoleChange = e => {
        setNewMember({
            ...newMember, role:e.target.value
        })
    }

const  submitForm = e => {
    e.preventDefault ();
    props.addNewMember(newMember); //sends memberForms state to addNewMember function (member)
    setNewMember({ name: '', email: '', role: ''})
}
return(
    <form onSubmit={submitForm}>
        <label htmlFor='name'>Member Name</label>
        <input 
        id='name'
        type='text'
        name='name'
        onChange={handleNameChange}
        value = {newMember.name}
        />
        <label htmlFor='email'>Email</label>
        <input
        id='email'
        type='text'
        name='email'
        onChange={handleEmailChange}
        value = {newMember.email}
        />
        
        <label htmlFor='role'>Role</label>
        <input
        id="role"
        type='text'
        name='role'
        onChange={handleRoleChange}
        value = {newMember.role}
        />
        <button type='submit'>Submit</button> 
    </form>
)
}

export default MemberForm