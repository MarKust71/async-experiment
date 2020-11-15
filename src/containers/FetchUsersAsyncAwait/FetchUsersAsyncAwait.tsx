import React, { useEffect, useState } from 'react';
import { fetchDataUsersAsyncAwait } from './fetchDataUsersAsyncAwait';
import { UsersList } from '../UsersList';

export const FetchUsersAsyncAwait = () => {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const users = await fetchDataUsersAsyncAwait();
            console.log('users w container:', users);
            setUsers(users);
        };
        fetchData();
    }, []);
    return <UsersList users={users} />;
};
