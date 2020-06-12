import styled from "styled-components";

export const WrapperStyled = styled.div`
  position: relative;
`;

export const ButtonStyled = styled.button<{
  $subItem?: boolean;
  $active?: boolean;
}>`
  display: flex;
  width: ${({ $subItem }) => ($subItem ? "auto" : "80px")};
  height: ${({ $subItem }) => ($subItem ? "auto" : "80px")};
  flex-direction: column;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  background-color: ${({ $active }) => ($active ? "#ffffff" : "#df9047")};
  border: none;
  cursor: pointer;
  outline: none;
  padding: 5px;

  svg {
    width: 30px;
    height: 30px;
    fill: ${({ $active }) => ($active ? "#df9047" : "#ffffff")};
  }

  &:hover {
    background-color: #ffffff;

    span {
      color: #df9047;
    }

    svg {
      fill: #df9047;
    }
  }

  &:active {
    background-color: #df9047;

    span {
      color: #ffffff;
    }

    svg {
      fill: #ffffff;
    }
  }

  &:first-child {
    border-radius: ${({ $subItem }) => $subItem && "0 5px 0 0"};
  }
  &:last-child {
    border-radius: ${({ $subItem }) => $subItem && "0 0 5px 0"};
  }
`;

export const TextStyled = styled.span<{
  $subItem?: boolean;
  $active?: boolean;
}>`
  display: block;
  font-size: 14px;
  line-height: 14px;
  margin: ${({ $subItem }) => !$subItem && "5px 0 0 0"};
  color: ${({ $active }) => ($active ? "#df9047" : "#ffffff")};
`;

export const DropdownStyled = styled.div`
  display: flex;
  position: absolute;
  z-index: 5;
  top: 0;
  left: 0;
  transform: translate3d(80px, 0, 0);
  box-shadow: 5px 0px 20px 0px rgba(0, 0, 0, 0.6);
  flex-direction: column;
  background-color: #df9047;
  border-radius: 0 5px 5px 0;
`;
