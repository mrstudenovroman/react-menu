import React, { FC, memo } from "react";
import Grid from "hedron";

import { HeaderStyled } from "./styles";
import { HeaderProps } from "./interfaces";

const Header: FC<HeaderProps> = ({ title }) => (
  <Grid.Box width="150px">
    <HeaderStyled>{title}</HeaderStyled>
  </Grid.Box>
);

export default memo(Header);
