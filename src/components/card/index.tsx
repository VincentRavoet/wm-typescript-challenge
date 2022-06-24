import { Recipe, Ingredient, isSpecialIngredient } from "types";

type CardProps = {
  recipe: Recipe;
};

export const Card = ({ recipe }: CardProps) => {
  return (
    <div className="m-2 flex border border-gray-200 bg-white/50 p-4">
      <div className="block space-y-2">
        <h2 className="text-2xl font-bold">{recipe.name}</h2>
        {recipe.category && (
          <span className="mr-1 inline-block rounded bg-pink-200 py-1 px-2 text-xs font-semibold uppercase text-pink-600 last:mr-0">
            {recipe.category}
          </span>
        )}

        <h3 className="text-lg font-bold">Ingredients</h3>
        <ul className="list-inside list-disc px-1 text-sm">
          {recipe.ingredients.map((ingredient: Ingredient) => {
            if (isSpecialIngredient(ingredient)) {
              return <li>{ingredient.special}</li>;
            }
            return (
              <li>
                {ingredient.amount} {ingredient.unit} {ingredient.ingredient}
              </li>
            );
          })}
        </ul>

        <h3 className="text-lg font-bold">Preparation</h3>
        <div className="text-sm">{recipe.preparation}</div>
      </div>
    </div>
  );
};
