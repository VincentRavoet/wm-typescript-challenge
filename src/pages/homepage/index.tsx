import { Card } from "components/card";
import { useEffect, useState } from "react";
import { Recipe } from "types/Recipe";

const Homepage = () => {

  let [items, setItems] = useState<Recipe[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/recipes/popular")
      .then((response) => response.json())
      .then(({ cocktails }) => setItems(cocktails))
  }, []);

  return (
    <main>
      <div className="mb-4 space-y-3 rounded border border-gray-200 bg-white/25 p-5 text-sm dark:bg-gray-100">
        {items.map((recipe: Recipe) => <Card recipe={recipe} />)}
      </div>
    </main>
  );
};

export default Homepage;
