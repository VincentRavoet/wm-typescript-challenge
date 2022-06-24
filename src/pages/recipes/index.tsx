import { Card } from "components/card";
import { useState } from "react";
import { Recipe } from "types/Recipe";

const Recipes = () => {
  let offset: number = 0;

  const [items, setItems] = useState<Recipe[]>([]);
  const getPage = () => {
    fetch(`http://localhost:3000/api/recipes/all?limit=8&offset=${offset}`)
      .then((response) => response.json())
      .then(({ cocktails }) => setItems(cocktails));
  };

  getPage();

  return (
    <div className="space-y-3 rounded border border-gray-200 bg-white/25 p-5 text-sm">
      <div className="mb-4 grid space-y-3 rounded border border-gray-200 bg-white/25 p-5 text-sm dark:bg-gray-100 sm:grid-cols-2 lg:grid-cols-4">
        {items?.map((recipe: Recipe) => (
          <Card recipe={recipe} />
        ))}
      </div>

      <button
        type="button"
        onClick={() => {
          offset = offset > 0 ? (offset -= 1) : offset;
          getPage();
        }}
      >
        Previous page
      </button>

      <button
        type="button"
        onClick={() => {
          offset += 1;
          getPage();
        }}
      >
        Next page
      </button>
    </div>
  );
};

export default Recipes;
