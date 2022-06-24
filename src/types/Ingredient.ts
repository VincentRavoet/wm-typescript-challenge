export type SpecialIngredient = {
  special: string;
};

export type DefaultIngredient = {
  unit: string;
  amount: string;
  ingredient: string;
};

export type Ingredient = SpecialIngredient | DefaultIngredient;

export function isSpecialIngredient(
  value: Ingredient
): value is SpecialIngredient {
  return Object.prototype.hasOwnProperty.call(value, "special");
}
