import Cards from '../Cards';
import React from 'react';

const APICards =
[
    {
        price: '$200',
        description: 'Simple API',
    },
    {
        price: 'Starting $500',
        description: 'Complex API',
    },
    {
        price: 'Starting $1500',
        description: 'Mass use API',
    },
];

export default () => (
    <Cards cards={ APICards } />
);