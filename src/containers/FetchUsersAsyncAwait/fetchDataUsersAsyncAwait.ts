import { api } from '../../helpers/axios';

export const fetchDataUsersAsyncAwait = async () => {
    const users = await api.get('users');
    console.log('users z API:', users.data);
    return users.data;
};
