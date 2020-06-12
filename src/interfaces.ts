export interface MenuJSONProps {
  svg: string;
  name: string;
  url: string;
  subRoutes?: {
    url: string;
    name: string;
  }[];
}

export interface ItemsProps {
  items: MenuJSONProps[];
}
