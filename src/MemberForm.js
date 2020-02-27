import React, {useState} from 'react'

const MemberForm = () => {
    


return(
    <form>
        <label htmlFor='name'>Member Name</label>
        <input 
        id='name'
        type='text'
        name='name'
        // onChange={handleChanges}
        // value=''
        />
        <label htmlFor='email'>Email</label>
        <input
        id='email'
        type='text'
        name='email'
        />
        {/* onChange={handleChanges} */}
        <label htmlFor='role'>Role</label>
        <input
        id="role"
        type='text'
        name='role'
        />
        {/* //onChange = {handleChanges} */}
    </form>
)
}

export default MemberForm