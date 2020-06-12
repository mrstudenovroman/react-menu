import React, { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import Grid from "hedron";

import Routes from "./components/routes";
import Menu from "./components/Menu";
import MenuJSON from "./menu.json";
import { MenuJSONProps } from "./interfaces";

const App: FC = () => {
  const items: MenuJSONProps[] = JSON.parse(JSON.stringify(MenuJSON));
  return (
    <BrowserRouter>
      <Grid.Provider>
        <Grid.Bounds direction="horizontal">
          <Menu items={items} />
          <Routes />
        </Grid.Bounds>
      </Grid.Provider>
    </BrowserRouter>
  );
};

export default App;
