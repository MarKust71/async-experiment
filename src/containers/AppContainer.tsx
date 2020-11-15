import React from 'react';
import { FetchUsersAsyncAwait } from './FetchUsersAsyncAwait/FetchUsersAsyncAwait';
import { FetchUsersPromiseThen } from './FetchUsersPromiseThen/FetchUsersPromiseThen';

export const AppContainer = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <FetchUsersAsyncAwait />
            <FetchUsersPromiseThen />
        </div>
    );
};
