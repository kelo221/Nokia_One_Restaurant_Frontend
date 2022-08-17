import React from "react";

import { Image, Tip } from "grommet/es6";
import { RecipesUnion } from "../DataStructure/FoodMenuInterface";

interface AllergenField {
  allergenString: string;
  additionalAllergens: RecipesUnion;
}

type allergen = {
  name: string;
  contains: boolean;
};

const AllergenInfo = (props: AllergenField) => {
  const listOfAllergens: allergen[] = [
    {
      name: "Gluten",
      contains:
        props.allergenString.toLowerCase().includes("gluteenia") ||
        props.allergenString.includes("vehnä"),
    },
    {
      name: "Crustaceans",
      contains: props.allergenString.toLowerCase().includes("nilviäiset"),
    },
    {
      name: "Milk",
      contains: props.allergenString.toLowerCase().includes("maito"),
    },
    {
      name: "Seeds",
      contains: props.allergenString.toLowerCase().includes("siemenet"),
    },
    {
      name: "Eggs",
      contains: props.allergenString.toLowerCase().includes("munat"),
    },
    {
      name: "Soy",
      contains: props.allergenString.toLowerCase().includes("soija"),
    },
    {
      name: "Celery",
      contains: props.allergenString.toLowerCase().includes("selleri"),
    },
    {
      name: "Fish",
      contains: props.allergenString.toLowerCase().includes("kala"),
    },
    {
      name: "Sulfur",
      contains: props.allergenString.toLowerCase().includes("sulfiitit"),
    },
    {
      name: "Mustard",
      contains: props.allergenString.toLowerCase().includes("sinappi"),
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

  Object.entries(props.additionalAllergens).some(([, value]) => {
    const dishIngredients = value.ingredients;

    if (dishIngredients !== undefined) {
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

  console.log(process.env.PUBLIC_URL);
  return (
    <React.Fragment>
      {listOfAllergens.map((allergen) => {
        if (allergen.contains) {
          const allergenName =
            allergen.name.charAt(0).toUpperCase() + allergen.name.slice(1);
          return (
            <Tip content={allergenName}>
              <Image
                src={require(`./../Images/AllergyInfo/${allergenName}.png`)}
                style={{ height: 20, width: 20 }}
              />
            </Tip>
          );
        }
      })}

      {/*      <Tip content="tooltip">
        <Image src={Lemon} style={{ height: 20, width: 20 }} />
      </Tip>

      <Tip content="tooltip">
        <Image src={Celery} style={{ height: 20, width: 20 }} />
      </Tip>*/}
    </React.Fragment>
  );
};

export default AllergenInfo;
