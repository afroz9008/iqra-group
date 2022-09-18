import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "./Layout";
import Routes from "./Routes";

function App() {
  return (
    <Layout>
      <Switch>
        {Routes.map((route) => (
          <Route path={route.path} component={route.Component} exact={Boolean(route.exect)} />
        ))}
        <Redirect to="/dashboard"/>
      </Switch>
    </Layout>
  );
}

export default App;
