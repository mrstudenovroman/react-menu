import React, { memo, FC } from "react";
import Grid from "hedron";

import Header from "../Header";
import Content from "../Content";

import { PageProps } from "./interfaces";

const Page: FC<PageProps> = ({ title }) => (
  <Grid.Bounds direction="vertical">
    <Header title={title} />
    <Content />
  </Grid.Bounds>
);

export default memo(Page);
