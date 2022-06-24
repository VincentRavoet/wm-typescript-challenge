import { Recipe, Ingredient } from "types";

type CardProps = {
  recipe: Recipe;
};

export const Card = ({ recipe }: CardProps) => {
  return (
    <div className="flex border border-gray-200 bg-white/50 p-4">
      <div className="block space-y-2">
        <h2 className="text-2xl font-bold">{recipe.name}</h2>
        <span className="mr-1 inline-block rounded bg-pink-200 py-1 px-2 text-xs font-semibold uppercase text-pink-600 last:mr-0">
          {recipe.category}
        </span>

        <h3 className="text-lg font-bold">Ingredients</h3>
        <ul className="list-inside list-disc px-1 text-sm">
          {recipe.ingredients.map((ingredient: Ingredient /* Sander */) => (
            // Op de property special geeft hij een fout, maar dus ook op unit, amount en ingredient.
            // Dat zijn allevier weldegelijk properties van Ingredient, maar in Ingredient.ts heb je twee definities van Ingredient.
            <li>test</li>
          ))}
        </ul>

        <h3 className="text-lg font-bold">Preparation</h3>
        <div className="text-sm">{recipe.preparation}</div>
      </div>
    </div>
  );
};
