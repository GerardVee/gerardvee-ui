import Cards from '../Cards';

const websiteCards =
[
    {
        price: '$200',
        description: 'Static, single page site',
        example_url: 'https://gerardvee.com/projects/delano-farms',
    },
    {
        price: '$350',
        description: 'Dynamic, static page site',
    },
    {
        price: '$500',
        description: 'Static, multi page site',
    },
    {
        price: 'Starting $850',
        description: 'Dynamic, multi page site',
    },
    {
        price: 'Starting $1200',
        description: 'Eccomerce site, api included', 
    }
];

export default () => (
    <Cards cards={ websiteCards } />
);