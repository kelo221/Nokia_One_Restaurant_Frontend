import React from "react";

import { Box, Image, Tip, Text } from "grommet/es6";
import { RecipesUnion } from "../DataStructure/FoodMenuInterface";

interface AllergenField {
  allergenString: string;
  additionalAllergens: RecipesUnion;
}

type allergen = {
  name: string;
  contains: boolean;
};

const foodChecker = (
  checkedString: string | undefined,
  ingredient: string
): boolean => {
  if (checkedString === undefined) {
    return false;
  }

  console.log(checkedString, "LOOKING FOR ", ingredient);
  return checkedString.toLowerCase().includes(ingredient);
};

const AllergenInfo = (props: AllergenField) => {
  const listOfAllergens: allergen[] = [
    {
      name: "Gluten",
      contains:
        foodChecker(props.allergenString, "gluten") ||
        foodChecker(props.allergenString, "wheat"),
    },
    {
      name: "Crustaceans",
      contains: foodChecker(props.allergenString, "crustaceans"),
    },
    {
      name: "Milk",
      contains: foodChecker(props.allergenString, "milk"),
    },
    {
      name: "Seeds",
      contains: foodChecker(props.allergenString, "seeds"),
    },
    {
      name: "Eggs",
      contains: foodChecker(props.allergenString, "eggs"),
    },
    {
      name: "Soy",
      contains: foodChecker(props.allergenString, "soy"),
    },
    {
      name: "Celery",
      contains: foodChecker(props.allergenString, "celery"),
    },
    {
      name: "Fish",
      contains: foodChecker(props.allergenString, "fish"),
    },
    {
      name: "Sulfur",
      contains: foodChecker(props.allergenString, "sulfits"),
    },
    {
      name: "Mustard",
      contains: foodChecker(props.allergenString, "mustard"),
    },
    {
      name: "Garlic", // INDEX 10
      contains: false,
    },
    {
      name: "Onion", // INDEX 11
      contains: false,
    },
  ];

  const garlicArrayIndex = 10;
  const onionArrayIndex = 11;

  if (props.additionalAllergens !== undefined) {
    Object.entries(props.additionalAllergens).some(([, value]) => {
      const dishIngredients = value.ingredients;

      if (dishIngredients !== undefined && dishIngredients.length !== 0) {
        if (
          dishIngredients.toLowerCase().includes("valkosipuli") &&
          !listOfAllergens[garlicArrayIndex].contains
        ) {
          listOfAllergens[garlicArrayIndex].contains = true;
        }

        if (
          dishIngredients.toLowerCase().includes("sipuli") &&
          !listOfAllergens[onionArrayIndex].contains
        ) {
          listOfAllergens[onionArrayIndex].contains = true;
        }
      }
    });
  }
  return (
    <React.Fragment>
      {listOfAllergens.map((allergen, index) => {
        if (allergen.contains) {
          const allergenName =
            allergen.name.charAt(0).toUpperCase() + allergen.name.slice(1);
          return (
            <Tip
              key={index}
              plain
              content={
                <Box
                  pad="small"
                  gap="small"
                  width={{ max: "small" }}
                  round="small"
                  background="background-front"
                  responsive={false}
                >
                  <Text>{allergenName}</Text>
                </Box>
              }
            >
              <Image
                src={require(`./../Images/AllergyInfo/${allergenName}.png`)}
                style={{ height: 20 }}
              />
            </Tip>
          );
        }
      })}
    </React.Fragment>
  );
};

export default AllergenInfo;
