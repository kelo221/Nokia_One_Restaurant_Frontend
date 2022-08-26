import React from "react";
import { dayNumberEnum } from "./MenuItemHandler";
import { Box, Text } from "grommet/es6";
import AllergenInfo from "./AllergenInfo";
import { FoodMenuInterface } from "../DataStructure/FoodMenuInterface";

interface WelcomeProps {
  day: dayNumberEnum;
  isToday: boolean;
  menu: FoodMenuInterface;
}

const MenuOfTheDay = (props: WelcomeProps) => {
  const dayNumber = props.day;
  const isToday = props.isToday;
  const menu = props.menu;

  if (!Object.keys(menu).length) {
    return null;
  }

  return (
    <Box pad={"medium"} background={isToday ? "neutral-3" : ""}>
      <Text size={"medium"} weight={600} alignSelf={"center"}>
        {menu.mealdates[dayNumber].date}
      </Text>
      {Object.entries(menu.mealdates[dayNumber].courses).map(([key, value]) => (
        <React.Fragment key={key}>
          <Box pad={"5px"}>
            <Box gridArea="header" background="brand" align="center">
              <Text>{value.category}</Text>
            </Box>
            <Box
              pad={"small"}
              background="light-2"
              height={{ min: "60px", max: "70px" }}
            >
              <Text size={"small"} alignSelf={"center"}>
                {value.title_en}.
              </Text>
            </Box>
            <Box
              align={"center"}
              background="light-3"
              direction={"row-responsive"}
              justify={"center"}
            >
              <AllergenInfo
                allergenString={value.additionalDietInfo?.allergens}
                additionalAllergens={value.recipes}
              />
            </Box>
            <Box align={"center"} background="light-3">
              <Text>{value.price}</Text>
            </Box>
          </Box>
        </React.Fragment>
      ))}
    </Box>
  );
};
export default MenuOfTheDay;
