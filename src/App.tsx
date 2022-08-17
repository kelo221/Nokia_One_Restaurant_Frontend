import React from "react";

import { Grommet, grommet,Box } from "grommet/es6";
import MainHeader from "./Components/Header";
import { weeksMenu } from "./tmp/FoodStuffObject";
import MenuItemHandler from "./Components/MenuItemHandler";
import {customTheme} from "./Theme/Theme";



const App = () => {
  console.log(weeksMenu);

//https://coolors.co/7d4cdb-d5c5c8-db7f8e-ffdbda-60e1e0
  return (
    <React.Fragment>
      <Grommet className="App" theme={customTheme} background={"#D5C5C8"} full>

        <MainHeader></MainHeader>
        <MenuItemHandler></MenuItemHandler>

      </Grommet>
    </React.Fragment>
  );
};

export default App;
