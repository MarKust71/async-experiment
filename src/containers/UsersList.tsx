import React from 'react';
import { UserItem } from '../components/UserItem';

type Props = {
    users: any[] | null | undefined;
};

export const UsersList = ({ users }: Props) => {
    console.log('users w component:', users);

    let items;
    if (users) {
        items = users.map((item, index) => <UserItem name={item.name} key={index} />);
    }

    return (
        <div>
            FetchUsersPromiseThen
            <div>
                names:
                <div>{items}</div>
            </div>
        </div>
    );
};
