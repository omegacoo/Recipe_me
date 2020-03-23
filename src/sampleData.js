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
        title: 'Soup',
        id: '1',
        ingredients: [
            {
                title: 'bouillan',
                id: '6'
            },
            {
                title: 'carrot',
                id: '7'
            },
            {
                title: 'chicken',
                id: '8'
            }
        ],
        description: 'Yummy soup'
    },
    {
        title: 'Souffle',
        id: '2',
        ingredients: [
            {
                title: 'egg',
                id: '9'
            },
            {
                title: 'flour',
                id: '10'
            },
            {
                title: 'bacon',
                id: '11'
            }
        ],
        description: 'Yummy souffle'
    },
    {
        title: 'Scramble',
        id: '3',
        ingredients: [
            {
                title: 'egg',
                id: '9'
            },
            {
                title: 'ham',
                id: '3'
            },
            {
                title: 'tomato',
                id: '1'
            }
        ],
        description: 'Yummy scramble'
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