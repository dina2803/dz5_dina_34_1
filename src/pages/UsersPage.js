import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/actions/usersActions'
import UserCard from '../components/UsersCard'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function UsersPage() {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.users.users)
    const [selectedUser, setSelectedUser] = useState(null)

    const getUsers = () => {
        dispatch(fetchUsers())
    }
    const handleCardHover = (userId) => {
        setSelectedUser(userId)
    }
    return (
        <div>
            <Button variant="outline-success" onClick={getUsers}>Get Users</Button>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {users.map((user) => (
                    <UserCard key={user.id} user={user} isSelected={selectedUser === user.id} onMouseEnter={() => handleCardHover(user.id)} onMouseLeave={() => setSelectedUser(null)}/>))}
            </div>
        </div>
    )
}
export default UsersPage;