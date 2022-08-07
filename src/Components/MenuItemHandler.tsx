import React from "react";
import MenuOfTheDay from "./MenuOfTheDay";

import { Grid } from "grommet";
import { weeksMenu } from "../tmp/FoodStuffObject";

export const enum dayNumberEnum {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const threeItemColum = [
  ["xsmall", "small"], // column 2 is able to flex
  ["xsmall", "small"], // column 2 is able to flex
  ["xsmall", "small"], // column 2 is able to flex
  ["xsmall", "small"], // column 2 is able to flex
  ["xsmall", "small"], // column 2 is able to flex
];

// TODO map the days, this also prevents the missing days from causing problems
const MenuItemHandler = () => {
  // first day of the week is 0 in the USA, but we need it to be 0, saturday and sunday won't be used.
  let todaysDayNumber: dayNumberEnum = new Date().getDay()
    ? new Date().getDay() - 1
    : 6;

  //set the current day to the last weekday of the week.
  if (todaysDayNumber > 4) {
    todaysDayNumber = dayNumberEnum.Friday;
  }

  //TODO why must I use index?
  return (
    <React.Fragment>
      <Grid columns={threeItemColum} gap="xsmall" justifyContent={"center"}>
        {weeksMenu.mealdates.map((arrDayNumber, index) => (
          <MenuOfTheDay
            day={index}
            isToday={index === todaysDayNumber}
            key={index}
          />
        ))}
      </Grid>
    </React.Fragment>
  );
};

export default MenuItemHandler;
