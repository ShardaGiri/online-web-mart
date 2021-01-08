import React from 'react'

const users = [
    {
        id: 1,
        name: 'Varad Edke',
        occupation: 'Trainee',
    },
    {
        id: 2,
        name: 'Tapan Kumar',
        occupation: 'Trainer',
    },
];

const ListComponent = () => (
    <ul>
        {users.map(user => (
            <li key={user.id}>
                <div>{user.id}</div>
                <div>{user.name}</div>
                <div>{user.occupation}</div>
            </li>
        ))}
    </ul>
);


export default ListComponent
