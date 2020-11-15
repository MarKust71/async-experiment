import React from 'react';

type Props = {
    name: string;
};

export const UserItem = ({ name }: Props) => {
    return <div>{name}</div>;
};
