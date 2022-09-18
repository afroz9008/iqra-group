import React, { useState } from "react";
import { Menu } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link, NavLink } from "react-router-dom";
import Routes from "../Routes";

const useStyles = makeStyles((theme) => ({
  appbarRoot: {
    borderBottom: `3px solid ${theme.palette.primary.main}`,
    position: "sticky",
    top: 0,
    background:theme.palette.general.white,
    zIndex:1
  },
  link: {
    margin: theme.spacing(0, 1),
    color: `${theme.palette.text.primary} !important`,
    border: "none",
    textDecoration: "none !important",
    transition: "1s all",
    fontWeight: "400",
    cursor: "pointer",
    "&:nth-last-child(2)": {
      marginRight: theme.spacing(2),
    },
  },
  activeLink: {
    fontWeight: "600",
    textDecoration: "underline !important",
    textUnderlineOffset: "8px",
  },
}));

export default function Header() {
  const classes = useStyles();
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const toggleDrawer = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsOpenDrawer((p) => !p);
  };

  return (
    <Box sx={{ flexGrow: 0 }} className={classes.appbarRoot} id="app-header">
      <AppBar color="transparent" position="sticky">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            IQRA GROUP
          </Typography>

          <Hidden mdDown>
            {Routes.map((route) => {
              if (route.hidden) return null;
              return (
                <NavLink
                  key={route.path}
                  to={route.path}
                  activeClassName={classes.activeLink}
                  className={classes.link}
                >
                  {route.title}
                </NavLink>
              );
            })}
            <Button size="small" variant="contained" color="primary">
              Sign Up
            </Button>
          </Hidden>

          <Hidden mdUp>
            <IconButton
              size="small"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
            >
              <Menu />
            </IconButton>
            <Drawer anchor={"right"} open={isOpenDrawer} onClose={toggleDrawer}>
              {Routes.map((route) => {
                if (route.hidden) return null;
                return (
                  <NavLink
                    to={route.path}
                    activeClassName={classes.activeLink}
                    className={classes.link}
                  >
                    {route.title}
                  </NavLink>
                );
              })}
              <Button size="small" variant="contained" color="primary">
                Sign Up
              </Button>
            </Drawer>
          </Hidden>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
