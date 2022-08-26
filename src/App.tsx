import React, { useCallback, useEffect, useState } from "react";

import { Grommet } from "grommet/es6";
import MainHeader from "./Components/Header";
import MenuItemHandler from "./Components/MenuItemHandler";
import { customTheme } from "./Theme/Theme";
import { getMenu } from "./Networking/GetMenu";
import { FoodMenuInterface } from "./DataStructure/FoodMenuInterface";

const App = () => {
  const [menu, setMenu] = useState({} as FoodMenuInterface);

  useEffect(() => {
    (async function anyNameFunction() {
      await getMenu().then((r) => setMenu(r as FoodMenuInterface));
    })();
  }, []);

  //https://coolors.co/7d4cdb-d5c5c8-db7f8e-ffdbda-60e1e0
  return (
    <React.Fragment>
      <Grommet className="App" theme={customTheme} background={"#D5C5C8"} full>
        <MainHeader></MainHeader>
        <MenuItemHandler menu={menu}></MenuItemHandler>
      </Grommet>
    </React.Fragment>
  );
};

export default App;
