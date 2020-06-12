import { ReactComponent as Home } from "./assets/home.svg";
import { ReactComponent as News } from "./assets/news.svg";
import { ReactComponent as Setting } from "./assets/settings.svg";
import { ReactComponent as User } from "./assets/user.svg";

export const getImage = (name: string) => {
  switch (name) {
    case "news":
      return News;
    case "profile":
      return User;
    case "setting":
      return Setting;
    default:
      return Home;
  }
};
