const sampleIngredients = [
    {
        title: 'tomato',
        id: '1',
        category: 'vegetable'
    },
    {
        title: 'radish',
        id: '2',
        category: 'vegetable'
    },
    {
        title: 'ham',
        id: '3',
        category: 'meat'
    },
    {
        title: 'parsley',
        id: '4',
        category: 'condiment'
    },
    {
        title: 'bread',
        id: '5',
        category: 'grain'

    },
    {
        title: 'bouillan',
        id: '6',
        category: 'condiment'
    },
    {
        title: 'carrot',
        id: '7',
        category: 'vegetable'
    },
    {
        title: 'chicken',
        id: '8',
        category: 'meat'
    },
    {
        title: 'egg',
        id: '9',
        category: 'dairy'
    },
    {
        title: 'flour',
        id: '10',
        category: 'grain'
    },
    {
        title: 'bacon',
        id: '11',
        category: 'meat'
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