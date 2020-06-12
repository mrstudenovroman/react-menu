import React, { memo, FC } from "react";

import { ItemsProps } from "../../interfaces";

import Button from "./Button";
import { GridBoxStyled } from "./styles";

const MenuComponent: FC<ItemsProps> = ({ items }) => {
  return (
    <GridBoxStyled>
      {items.map((elem) => (
        <Button key={elem.name} item={elem} />
      ))}
    </GridBoxStyled>
  );
};

export default memo(MenuComponent);
