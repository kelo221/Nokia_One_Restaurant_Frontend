export interface foodMenuInterface {
  meta: Meta;
  timeperiod: string;
  mealdates: Mealdate[];
}

export interface Mealdate {
  date: string;
  courses: { [key: string]: Course };
}

export interface Course {
  title_fi: string;
  title_en: string;
  category: string;
  dietcodes?: string;
  properties?: string;
  additionalDietInfo?: AdditionalDietInfo;
  price: string;
  recipes?: Recipes;
}

export interface AdditionalDietInfo {
  dietcodeImages?: string[];
  allergens: string;
}

export interface Recipes {
  "0": The0;
  "1"?: The0;
  "2"?: The0;
  hideAll: HideAll;
  "3"?: The0;
}

export interface The0 {
  name: string;
  ingredients: any[];
  nutrients: string;
}

export interface HideAll {
  dietcodes: string;
}

export interface Meta {
  generated_timestamp: number;
  ref_url: string;
  ref_title: string;
}
