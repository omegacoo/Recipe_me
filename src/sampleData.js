const sampleIngredients = [
    {
        title: 'egg',
        id: 1,
        category: 'dairy'
    },
    {
        title: 'milk',
        id: 2,
        category: 'dairy'
    },
    {
        title: 'cinnamon',
        id: 3,
        category: 'condiment'
    },
    {
        title: 'bread',
        id: 4,
        category: 'grain'
    },
    {
        title: 'butter',
        id: 5,
        category: 'dairy'
    },
    {
        title: 'maple syrup',
        id: 6,
        category: 'condiment'
    },
    {
        title: 'flour',
        id: 7,
        category: 'grain'
    },
    {
        title: 'sugar',
        id: 8,
        category: 'condiment'
    },
    {
        title: 'salt',
        id: 9,
        category: 'condiment'
    },
    {
        title: 'vanilla extract',
        id: 11,
        category: 'condiment'
    },
    {
        title: 'heavy whipping cream',
        id: 12,
        category: 'dairy'
    },
    {
        title: 'cocoa, natural, unsweetened',
        id: 13,
        category: 'condiment'
    },
    {
        title: 'tomato',
        id: 14,
        category: 'vegetable'
    },
    {
        title: 'garlic',
        id: 15,
        category: 'condiment'
    },
    {
        title: 'olive oil',
        id: 16,
        category: 'condiment'
    },
    {
        title: 'balsamic vinegar',
        id: 17,
        category: 'condiment'
    },
    {
        title: 'basil leaves',
        id: 18,
        category: 'condiment'
    },
    {
        title: 'black pepper',
        id: 19,
        category: 'condiment'
    },
    {
        title: 'french bread baguette',
        id: 20,
        category: 'grain'
    },
    {
        title: 'vegetable oil',
        id: 21,
        category: 'condiment'
    }
];

const sampleRecipes = [
    {
        id: '1',
        title: 'French Toast',
        description: `The BEST french toast! Fluffy and tender on the inside, gloriously browned on the outside.`,
        diet: null,
        instructions: `1. Make the egg mixture: In a medium bowl, whisk together the eggs, milk, and cinnamon. Whisk the mixture until well blended and pour into a shallow bowl, wide wide enough to place a slice of the bread you will be using. 2. Soak bread slices in egg mixture: Place each slice of bread into the mil egg mixture, allowing the bread to soak in some of it. 3. Fry the french toast: Melt some butter in a large skillet over medium high heat. Shake off the excess egg mixture from the bread, and place the bread slices onto the hot skillet. Fry the french toast until browned on one side, then flip and brown the other side. 4. Serve hot with butter, maple syrup, and if available, fresh berries.`,
        prep_time: '8 minutes',
        cook_time: '15 minutes',
        ingredients: [1, 2, 3, 4, 5, 6]
    },
    {
        id: '2',
        title: 'Brownie in a mug',
        description: `Easiest brownie ever! Single serving brownie microwaved in a mug. Takes 5 minutes to make.`,
        diet: null,
        instructions: `1. Add the dry ingredients to the mug and stir: place flour, sugar, cocoa, salt, and cinnamon in a microwave safe ceramic mug. Stir with a fork or spoon to mix well and break up any clumps. 2. Add the wet ingredients and stir: add the oil, water, and vanilla to the cup and stir until the mixture is smooth and there are no lumps. 3. Zap in microwave: place in microwave on high heat until the mixture is cooked through, about 1 minute and 40 seconds for a 1000 watt microwave, or 1 minute 10 seconds for a 1650 watt microwave. 4. Top with heavy whipping cream: let cool for a minute and serve with a teaspoon or two of whipping cream poured over.`,
        prep_time: '3 minutes',
        cook_time: '2 minutes',
        ingredients: [7, 8, 13, 9, 3, 21, 11, 12]
    },
    {
        id: '3',
        title: 'Bruschetta with tomato and basil',
        description: `Chopped fresh tomatoes with garlic, basil, olive oil, and vinegar, served on toasted slices of french bread.`,
        diet: null,
        instructions: `1. Blanch and peel the tomatoes: bring 2 quarts of water to a boil. As the water is heating make shallow cuts in a cross pattern at the tip ends of the tomatoes (this will make the tomatoes easier to peel). Once water is boiling, remove the pot from the heat. Put the tomatoes in the hot water and blanch for 1 minute. Remove with a slotted spoon and let sit until cool enough to handle. Then genlty peel off the tomato skins. Cut out the stem base with a paring knife. Cut the tomatoes into halves or quarters and squeeze out most of the juices and seeds. 2. Preheat oven: to 450 degrees with a rack in the top slot of the oven. 3. Chop tomatoes, toss them with garlics, olive oil, vinegar, basil, salt, and pepper: finely chop the tomatoes and place them in a medium bowl. Mix in the minced garlic, 1 Tbsp olive oil, and the balsamic vinegar. Stir in the thingly sliced basil and add salt and freshly ground black pepper, adding more to taste. Note, tomatoes love salt; you may need to add more than you expect. 4. Toast the baguette slices: use a bread knife to slice the baguette on the diagonal, making half-inch thick slices. Brush one side of each slice with olive oil (a pastry brush helps here) and place olive oil-side down on a baking sheet or roasting pan. The baguette slices will toast best in the top rack of your oven, so you may need to work in batches to toast them all. When the over has readh 450 degrees place the slices in the oven on the top rack and toast for 5 to 6 minutes until lightly browned around the edges. 5. Serve toasted bread with tomato mixture: arrange the toasted bread on a platter, olive oil side facing up (the olive oil will help create a temprorary barrier keeping the bread from getting soggy from the chopped tomatoes). Either serve the toasts plain with a bowl of the tomato brushetta mixture on the side for people to top their own, or sue a spoon to gently top each toasted bread slice with some of the tomato mixture. If you top each slice individually, do it right before serving.`,
        prep_time: '15 minutes',
        cook_time: '120 minutes',
        ingredients: [14, 15, 16, 17, 18, 9, 19, 20]
    }
];

module.exports = {
    sampleIngredients,
    sampleRecipes
};