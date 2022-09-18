import { makeStyles } from "@mui/styles";
import classNames from "classnames";
import React from "react";
import Header from "./Header";

const useStyels = makeStyles((theme) => ({
  main: {
    height:"100vh"
  },
}));
export default function Layout(props) {
  const classes=useStyels();

  return (
    <div className={classNames("d-flex flex-column",classes.main)}>
      <Header />
      <div className="flex-grow-1">{props.children}</div>
    </div>
  );
}
