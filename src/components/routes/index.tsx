import React, { FC, memo } from "react";
import { Switch, Route } from "react-router-dom";

import Page from "../pages";

const Routes: FC = () => (
  <Switch>
    <Route exact path="/" render={() => <Page title="Главная" />} />
    <Route exact path="/news" render={() => <Page title="Новости" />} />
    <Route exact path="/news/:id" render={() => <Page title="Статья" />} />
    <Route exact path="/profile" render={() => <Page title="Профиль" />} />
    <Route exact path="/setting" render={() => <Page title="Настройки" />} />
    <Route render={() => <Page title="404! Такой страницы не существует" />} />
  </Switch>
);

export default memo(Routes);
