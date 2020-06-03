import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import CssBaseline from "@material-ui/core/CssBaseline";

import {
  Typography,
  Card,
  CardActions,
  CardContent,
  Divider,
  IconButton,
  Drawer,
  AppBar,
  Toolbar,
  Avatar,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { deepOrange, deepPurple } from "@material-ui/core/colors";

import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import Grid from "@material-ui/core/Grid";
import Logo from "./logo-white.png";
import LogoDark from "./logo.png";
import "./Drawer.css";

const drawerWidth = 300;

const ITEM_HEIGHT = 36;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));

export default function PersistentDrawerLeft(props) {
  const { orgs } = props.defaultData;
  console.log(orgs);
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
    let logo = document.querySelector(".imgBox");
    logo.style.display = "none";
  };

  const handleDrawerClose = () => {
    setOpen(false);
    let logo = document.querySelector(".imgBox");
    logo.style.display = "block";
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <img
            className="imgBox"
            src={Logo}
            width="55px"
            style={{ marginLeft: "-15px", marginRight: "22px" }}
          />
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <Grid container spacing={3} justify="center">
            <Grid item>
              <img
                src={LogoDark}
                width="55px"
                alt="ecell logo"
                style={{ padding: 0 }}
              />
            </Grid>
            <Grid item>
              <Typography align="center" variant="h5" style={{ marginTop: 12 }}>
                teesco
              </Typography>
            </Grid>
            {/* <Grid item></Grid> */}
          </Grid>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <Card className="card">
          <CardContent className="center">
            <Typography
              variant="h6"
              style={{ textAlign: "center" }}
              className={classes.title}
              gutterBottom
            >
              E-Cell NITRR
            </Typography>

            <Typography
              style={{ textAlign: "center" }}
              className={classes.pos}
              color="textSecondary"
            >
              non-profit organisation
            </Typography>
          </CardContent>
          <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={handleClick}
            className="menu"
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            keepMounted
            open={openMenu}
            onClose={handleClose}
          >
            <Card className="menuCard">
              <CardContent>
                <Typography variant="h5">Switch Orgs</Typography>
                <List>
                  {orgs.map((el) => (
                    <ListItem button className="listItem">
                      <ListItemText
                        primary={el}
                        style={{ textAlign: "center" }}
                      />
                    </ListItem>
                  ))}
                </List>
                <Button className="create">Create or Join orgs</Button>
              </CardContent>
            </Card>
          </Menu>
        </Card>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
      </main>
    </div>
  );
}
