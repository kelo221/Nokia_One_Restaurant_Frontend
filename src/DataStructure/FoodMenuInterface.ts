export interface FoodMenuInterface {
  meta:       Meta;
  timeperiod: string;
  mealdates:  Mealdate[];
}

export interface Mealdate {
  date:    string;
  courses: { [key: string]: Course };
}

export interface Course {
  title_fi:           string;
  title_en:           string;
  category:           string;
  additionalDietInfo: AdditionalDietInfo;
  price:              string;
  recipes:            RecipesUnion;
  dietcodes?:         string;
  properties?:        string;
}

export interface AdditionalDietInfo {
  allergens: string;
}

export enum Category {
  Bowl = "BOWL",
  Favorites = "FAVORITES",
  SoupAtCafe = "Soup at cafe",
  Vege = "Vege",
}

export enum Price {
  The500500 = "5,00 € / 5,00 €",
  The715915 = "7,15 € / 9,15 €",
  The715980 = "7,15 € / 9,80 €",
}

export type RecipesUnion = Recipe[] | RecipesClass;

export interface Recipe {
  name:        string;
  ingredients: string;
  nutrients:   string;
}

export interface RecipesClass {
  "0":     Recipe;
  "1"?:    Recipe;
  "2"?:    Recipe;
  hideAll: HideAll;
}

export interface HideAll {
  dietcodes: string;
}

export interface Meta {
  generated_timestamp: number;
  ref_url:             string;
  ref_title:           string;
}
