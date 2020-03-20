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
    props.addNewMember(newMember);
    setNewMember({ name: '', email: '', role: ''})
}
return(
    <form>
        <label htmlFor='name'>Member Name</label>
        <input 
        id='name'
        type='text'
        name='name'
        onChange={handleNameChange}
        // value=''
        />
        <label htmlFor='email'>Email</label>
        <input
        id='email'
        type='text'
        name='email'
        onChange={handleEmailChange}
        />
        
        <label htmlFor='role'>Role</label>
        <input
        id="role"
        type='text'
        name='role'
        onChange={handleRoleChange}
        />
        <button type='submit'>Submit</button> 
    </form>
)
}

export default MemberForm