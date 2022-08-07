import React from "react";

import { Grommet, grommet } from "grommet";
import MainHeader from "./Components/Header";
import { weeksMenu } from "./tmp/FoodStuffObject";
import MenuItemHandler from "./Components/MenuItemHandler";

const App = () => {
  console.log(weeksMenu);

  return (
    <React.Fragment>
      <Grommet className="App" theme={grommet} full>
        <MainHeader></MainHeader>
        <MenuItemHandler></MenuItemHandler>
      </Grommet>
    </React.Fragment>
  );
};

export default App;
