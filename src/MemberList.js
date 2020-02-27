import React from 'react'

const MemberList = props => {
    console.log('checking props', props)
    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.email}</h2>
            <h2>{props.role}</h2>
        </div>
    )
}




export default MemberList;


