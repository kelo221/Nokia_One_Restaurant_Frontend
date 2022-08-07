import React from "react";
import { Text, Box, Clock, Grid } from "grommet/es6";

const columns = [
  ["xxsmall", "xsmall"], // column 1 is able to flex
  ["xsmall", "small"], // column 2 is able to flex
  ["xxsmall", "xsmall"], // column 1 is able to flex
];
function MainHeader() {
  return (
    <Box>
      <Grid
        fill
        rows={["auto", "flex"]}
        columns={["auto", "flex"]}
        areas={[
          { name: "header", start: [0, 0], end: [1, 0] },
          { name: "main", start: [1, 1], end: [1, 1] },
        ]}
      >
        <Box
          gridArea="header"
          direction="row"
          align="center"
          justify="between"
          pad={{ horizontal: "medium", vertical: "small" }}
          background="brand"
        >
          <Text>Nokia One Cafeteria Menu</Text>
          <Clock type="digital" />
        </Box>
      </Grid>

      {/*<Box tag="header" background="brand" pad="small" align="center">
        <Text>Nokia One Cafeteria Menu</Text>
        <Clock type="digital" />
      </Box>*/}
    </Box>
  );
}

export default MainHeader;
