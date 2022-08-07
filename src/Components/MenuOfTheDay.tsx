import React from "react";
import { dayNumberEnum } from "./MenuItemHandler";
import { weeksMenu } from "../tmp/FoodStuffObject";
import { Box, Image, Text, Heading } from "grommet/es6";
import logo from "../Images/AllergyInfo/lemon.png";

interface WelcomeProps {
  day: dayNumberEnum;
  isToday: boolean;
}

const MenuOfTheDay = (props: WelcomeProps) => {
  const dayNumber = props.day;
  const isToday = props.isToday;

  return (
    <Box pad={"small"} background={isToday ? "accent-4" : ""}>
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
                gridArea="main"
                pad={"small"}
                background="light-2"
                height={{ min: "120px", max: "120px" }}
              >
                <Text size={"small"} alignSelf={"center"}>
                  {value.title_en}.
                </Text>
                <Image
                  alignSelf={"center"}
                  src={logo}
                  style={{ height: 20, width: 20 }}
                />
                {/* <Text>{value.additionalDietInfo?.allergens}.</Text>*/}
              </Box>
              <Box gridArea="footer" align={"center"} background="light-3">
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
