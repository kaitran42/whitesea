export interface Food {
  Id: string;
  Title: string;
  PhotoLink: string;
  Description: string;
  RecipeLink: string;
  NumLikes: number;
}

export interface FoodInput {
  Title: string;
  PhotoLink: string;
  Description: string;
  RecipeLink: string;
}
