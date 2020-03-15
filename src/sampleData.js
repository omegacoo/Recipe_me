const sampleIngredients = [
    {
        name: 'tomato',
        id: '1'
    },
    {
        name: 'radish',
        id: '2'
    },
    {
        name: 'ham',
        id: '3'
    },
    {
        name: 'parsley',
        id: '4'
    },
    {
        name: 'bread',
        id: '5'

    },
    {
        name: 'bouillan',
        id: '6'
    },
    {
        name: 'carrot',
        id: '7'
    },
    {
        name: 'chicken',
        id: '8'
    },
    {
        name: 'egg',
        id: '9'
    },
    {
        name: 'flour',
        id: '10'
    },
    {
        name: 'bacon',
        id: '11'
    }
];

const sampleRecipes = [
    {
        name: 'Soup',
        id: '1',
        ingredients: [
            {
                name: 'bouillan',
                id: '6'
            },
            {
                name: 'carrot',
                id: '7'
            },
            {
                name: 'chicken',
                id: '8'
            }
        ]
    },
    {
        name: 'Souffle',
        id: '2',
        ingredients: [
            {
                name: 'egg',
                id: '9'
            },
            {
                name: 'flour',
                id: '10'
            },
            {
                name: 'bacon',
                id: '11'
            }
        ]
    },
    {
        name: 'Scramble',
        id: '3',
        ingredients: [
            {
                name: 'egg',
                id: '9'
            },
            {
                name: 'ham',
                id: '3'
            },
            {
                name: 'tomato',
                id: '1'
            }
        ]
    }
];

const sampleUnits = [
    'cups',
    'lbs',
    'Tbsps',
    'tsps',
    'ounces'
];

module.exports = {
    sampleIngredients,
    sampleRecipes,
    sampleUnits
};