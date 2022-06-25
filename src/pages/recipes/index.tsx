import { Card } from "components/card";
import { useState } from "react";
import { Recipe } from "types/Recipe";

const Recipes = () => {
  const [offset, setOffset] = useState<number>(0);
  const URL = `http://localhost:3000/api/recipes/all?limit=8&offset=${
    offset * 8
  }`;
  const [items, setItems] = useState<Recipe[]>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [totalItems, setTotalItems] = useState<number>(0);

  const handleFetch = () => {
    fetch(URL)
      .then((response) => response.json())
      .then(({ data, total }) => {
        setItems(data);
        setTotalItems(total);
        setIsLoaded(true);
      });
  };

  return (
    <div className="space-y-3 rounded border border-gray-200 bg-white/25 p-5 text-sm">
      <div className="mb-4 grid space-y-3 rounded border border-gray-200 bg-white/25 p-5 text-sm dark:bg-gray-100 sm:grid-cols-2 lg:grid-cols-4">
        {isLoaded ? (
          items.map((recipe: Recipe) => (
            <Card key={recipe.name} recipe={recipe} />
          ))
        ) : (
          <div>Press the button to load the recipes!</div>
        )}
      </div>

      <p>Page {offset}</p>

      <button
        type="button"
        onClick={() => {
          setOffset(offset > 0 ? offset - 1 : 0);
          handleFetch();
        }}
      >
        Previous page
      </button>

      <button
        type="button"
        onClick={() => {
          setOffset(offset * 8 > totalItems ? offset : offset + 1);

          handleFetch();
        }}
      >
        Next page
      </button>
    </div>
  );
};

export default Recipes;
