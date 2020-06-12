import React, { memo, FC, useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

import { getImage } from "./helper";
import {
  WrapperStyled,
  ButtonStyled,
  TextStyled,
  DropdownStyled,
} from "./styles";
import { ButtonProps } from "./interfaces";

const ButtonComponent: FC<ButtonProps> = ({ item }) => {
  const [isShow, setShow] = useState(false);
  const { subRoutes, name, url, svg } = item;
  const { push } = useHistory();
  const getPaths = () => {
    if (!subRoutes) return url;
    const arr = subRoutes.map((elem) => elem.url);
    arr.push(url);
    return arr;
  };
  const isActive = !!useRouteMatch({
    path: getPaths(),
    exact: true,
  });
  const SVG = getImage(svg);
  return (
    <WrapperStyled>
      <ButtonStyled
        onClick={() => push(url)}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        $active={isActive}
      >
        <SVG />
        <TextStyled $active={isActive}>{name}</TextStyled>
      </ButtonStyled>
      {subRoutes && isShow && (
        <DropdownStyled
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        >
          {subRoutes.map((elem) => (
            <ButtonStyled
              key={elem.name}
              $subItem
              onClick={() => push(elem.url)}
            >
              <TextStyled $subItem>{elem.name}</TextStyled>
            </ButtonStyled>
          ))}
        </DropdownStyled>
      )}
    </WrapperStyled>
  );
};

export default memo(ButtonComponent);
