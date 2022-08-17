import React from "react";
import { dayNumberEnum } from "./MenuItemHandler";
import { weeksMenu } from "../tmp/FoodStuffObject";
import { Box, Text } from "grommet/es6";
import AllergenInfo from "./AllergenInfo";

interface WelcomeProps {
  day: dayNumberEnum;
  isToday: boolean;
}

const MenuOfTheDay = (props: WelcomeProps) => {
  const dayNumber = props.day;
  const isToday = props.isToday;

  return (
    <Box pad={"small"} background={isToday ? "neutral-3" : ""}>
      <Text size={"medium"} alignSelf={"center"}>
        {weeksMenu.mealdates[dayNumber].date}
      </Text>
      {Object.entries(weeksMenu.mealdates[dayNumber].courses).map(
        ([key, value]) => (
          <React.Fragment key={key}>
            <Box pad={"small"}>
              <Box gridArea="header" background="brand" align="center">
                <Text>{value.category}</Text>
              </Box>
              <Box
                pad={"small"}
                background="light-2"
                height={{ min: "110px", max: "120px" }}
              >
                <Text size={"small"} alignSelf={"center"}>
                  {value.title_en}.
                </Text>
              </Box>
              <Box
                align={"center"}
                background="light-3"
                direction={"row-responsive"}
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
        )
      )}
    </Box>
  );
};
export default MenuOfTheDay;
