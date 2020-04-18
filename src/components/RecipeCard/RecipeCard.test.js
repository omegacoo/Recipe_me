import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import RecipeCard from './RecipeCard';

describe('RecipeCard component', () => {
    let testRecipe = {
        id: '3',
        title: 'Bruschetta with tomato and basil',
        description: `Chopped fresh tomatoes with garlic, basil, olive oil, and vinegar, served on toasted slices of french bread.`,
        diet: null,
        instructions: `1. Blanch and peel the tomatoes: bring 2 quarts of water to a boil. As the water is heating make shallow cuts in a cross pattern at the tip ends of the tomatoes (this will make the tomatoes easier to peel). Once water is boiling, remove the pot from the heat. Put the tomatoes in the hot water and blanch for 1 minute. Remove with a slotted spoon and let sit until cool enough to handle. Then genlty peel off the tomato skins. Cut out the stem base with a paring knife. Cut the tomatoes into halves or quarters and squeeze out most of the juices and seeds. 2. Preheat oven: to 450 degrees with a rack in the top slot of the oven. 3. Chop tomatoes, toss them with garlics, olive oil, vinegar, basil, salt, and pepper: finely chop the tomatoes and place them in a medium bowl. Mix in the minced garlic, 1 Tbsp olive oil, and the balsamic vinegar. Stir in the thingly sliced basil and add salt and freshly ground black pepper, adding more to taste. Note, tomatoes love salt; you may need to add more than you expect. 4. Toast the baguette slices: use a bread knife to slice the baguette on the diagonal, making half-inch thick slices. Brush one side of each slice with olive oil (a pastry brush helps here) and place olive oil-side down on a baking sheet or roasting pan. The baguette slices will toast best in the top rack of your oven, so you may need to work in batches to toast them all. When the over has readh 450 degrees place the slices in the oven on the top rack and toast for 5 to 6 minutes until lightly browned around the edges. 5. Serve toasted bread with tomato mixture: arrange the toasted bread on a platter, olive oil side facing up (the olive oil will help create a temprorary barrier keeping the bread from getting soggy from the chopped tomatoes). Either serve the toasts plain with a bowl of the tomato brushetta mixture on the side for people to top their own, or sue a spoon to gently top each toasted bread slice with some of the tomato mixture. If you top each slice individually, do it right before serving.`,
        prep_time: '15 minutes',
        cook_time: '120 minutes',
        ingredients: [14, 15, 16, 17, 18, 9, 19, 20]
    };

    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(
            <BrowserRouter>
                <RecipeCard recipe={ testRecipe } />
            </BrowserRouter>, 
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders UI correctly', () => {
        expect(
        renderer.create(
            <BrowserRouter>
                <RecipeCard recipe={ testRecipe } />
            </BrowserRouter>).toJSON()
        ).toMatchSnapshot();
    });
});