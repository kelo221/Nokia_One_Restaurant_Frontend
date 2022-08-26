import React from "react";
import MenuOfTheDay from "./MenuOfTheDay";

import { Grid } from "grommet";
import { weeksMenu } from "../tmp/FoodStuffObject";
import { FoodMenuInterface } from "../DataStructure/FoodMenuInterface";
import { MenuProp } from "../DataStructure/FoodMenuInterface";

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
  ["xsmall", "medium"], // column 2 is able to flex
  ["xsmall", "medium"], // column 2 is able to flex
  ["xsmall", "medium"], // column 2 is able to flex
  ["xsmall", "medium"], // column 2 is able to flex
  ["xsmall", "medium"], // column 2 is able to flex
];

const MenuItemHandler = ({ menu }: MenuProp) => {
  // first day of the week is 0 in the USA, but we need it to be 0, saturday and sunday won't be used.
  let todaysDayNumber: dayNumberEnum = new Date().getDay()
    ? new Date().getDay() - 1
    : 6;

  //set the current day to the last weekday of the week.
  if (todaysDayNumber > 4) {
    todaysDayNumber = dayNumberEnum.Friday;
  }

  if (!Object.keys(menu).length) {
    return null;
  }

  return (
    <React.Fragment>
      <Grid columns={threeItemColum} gap="none" justifyContent={"center"}>
        {menu.mealdates.map((arrDayNumber, index) => (
          <MenuOfTheDay
            day={index}
            isToday={index === todaysDayNumber}
            key={index}
            menu={menu}
          />
        ))}
      </Grid>
    </React.Fragment>
  );
};

export default MenuItemHandler;
