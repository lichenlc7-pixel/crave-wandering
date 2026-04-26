export interface FoodItemMetadata {
  ingredients: string[];
  flavors: string[];
  relatedDishes: { name: string; imageUrl: string }[];
  scenes: string[];
  origin?: string;
}

export interface FoodItem {
  id: string;
  name: string;
  category: string;
  imageUrl: string;
  description?: string;
  metadata?: FoodItemMetadata;
}

export enum MapLevel {
  EXPLORATION = 'exploration',
  DEEP_DIVE = 'deep_dive',
  INGREDIENT_PIVOT = 'ingredient_pivot',
}

export interface MapState {
  level: MapLevel;
  centerDish: FoodItem;
  focusedIngredient?: string;
  neighbors: FoodItem[];
  theme: string;
  isGenerating: boolean;
}
