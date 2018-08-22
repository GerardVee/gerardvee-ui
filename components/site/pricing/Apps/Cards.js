import Cards from '../Cards';

const AppCards =
[
    {
        price: 'Starting $1600',
        description: 'Simple app, expansive UI, minimal API use',
    },
    {
        price: 'Starting $3000',
        description: 'Big app, dazzling UI, intense API use',
    },
    {
        price: 'Starting $5000',
        description: 'Real time game',
    },
];

export default () => (
    <Cards cards={ AppCards } />
);