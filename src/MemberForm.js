import {useState} from 'react'

const Form = () => {
    
}

return(
    <form>
        <label htmlFor='name'>Member Name</label>
        <input 
        id='name'
        type='text'
        name='name'
        // onChange={handleChanges}
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